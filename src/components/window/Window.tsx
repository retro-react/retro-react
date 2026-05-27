/** @jsxImportSource theme-ui */
import {
	forwardRef,
	useCallback,
	useEffect,
	useId,
	useRef,
	useState,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import { ComponentColors } from '../../utils/getColorScheme';
import * as Sc from './Window.styled';

export interface WindowPosition {
	x: number;
	y: number;
}

export interface WindowSize {
	width: number;
	height: number;
}

export type WindowBounds = 'viewport' | 'parent' | false;

export interface WindowProps
	extends Omit<
		React.HTMLAttributes<HTMLDivElement>,
		'title' | 'onDragStart' | 'onDragEnd'
	> {
	/**
	 * The title shown in the title bar.
	 */
	title?: React.ReactNode;
	/**
	 * Optional icon rendered to the left of the title.
	 */
	icon?: React.ReactNode;
	/**
	 * Title bar background color when the window is active.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors | string;
	/**
	 * Initial position when uncontrolled. Only read on first render.
	 *
	 * @default { x: 40, y: 40 }
	 */
	defaultPosition?: WindowPosition;
	/**
	 * Controlled window position.
	 */
	position?: WindowPosition;
	/**
	 * Fires when the user drags the window.
	 */
	onPositionChange?: (position: WindowPosition) => void;
	/**
	 * Initial size when uncontrolled and resizable.
	 */
	defaultSize?: WindowSize;
	/**
	 * Controlled window size. Requires `resizable` and `onSizeChange`.
	 */
	size?: WindowSize;
	/**
	 * Fires when the user resizes the window.
	 */
	onSizeChange?: (size: WindowSize) => void;
	/**
	 * Smallest size the window can be resized to.
	 *
	 * @default { width: 160, height: 80 }
	 */
	minSize?: WindowSize;
	/**
	 * Largest size the window can be resized to.
	 */
	maxSize?: WindowSize;
	/**
	 * Constrain dragging.
	 * - `'viewport'` keeps the window inside the browser viewport.
	 * - `'parent'` keeps the window inside its offset parent.
	 * - `false` disables clamping.
	 *
	 * @default 'viewport'
	 */
	bounds?: WindowBounds;
	/**
	 * Allow dragging the window by its title bar.
	 *
	 * @default true
	 */
	draggable?: boolean;
	/**
	 * Show a resize handle in the bottom-right corner.
	 *
	 * @default false
	 */
	resizable?: boolean;
	/**
	 * Show the close button in the title bar.
	 *
	 * @default true
	 */
	closable?: boolean;
	/**
	 * Fires when the user clicks the close button or presses Escape.
	 */
	onClose?: () => void;
	/**
	 * Marks the window as the active one. The title bar darkens and z-index
	 * drops when inactive.
	 *
	 * @default true
	 */
	active?: boolean;
	/**
	 * Initial active state when uncontrolled.
	 *
	 * @default true
	 */
	defaultActive?: boolean;
	/**
	 * Fires when the user interacts with an inactive window.
	 */
	onActivate?: () => void;
	/**
	 * Fires when a drag gesture begins.
	 */
	onDragStart?: (position: WindowPosition) => void;
	/**
	 * Fires when a drag gesture ends.
	 */
	onDragEnd?: (position: WindowPosition) => void;
	/**
	 * Fires when a resize gesture begins.
	 */
	onResizeStart?: (size: WindowSize) => void;
	/**
	 * Fires when a resize gesture ends.
	 */
	onResizeEnd?: (size: WindowSize) => void;
	sx?: ThemeUICSSObject;
}

const DEFAULT_POSITION: WindowPosition = { x: 40, y: 40 };
const DEFAULT_MIN_SIZE: WindowSize = { width: 160, height: 80 };

function clampPosition(
	pos: WindowPosition,
	size: WindowSize | undefined,
	containerEl: HTMLElement | null,
	bounds: WindowBounds,
): WindowPosition {
	if (bounds === false) return pos;
	const w = size?.width ?? containerEl?.offsetWidth ?? 0;
	const h = size?.height ?? containerEl?.offsetHeight ?? 0;
	let minX = 0;
	let minY = 0;
	let maxX = window.innerWidth - w;
	let maxY = window.innerHeight - h;
	if (bounds === 'parent' && containerEl?.parentElement) {
		const rect = containerEl.parentElement.getBoundingClientRect();
		minX = rect.left;
		minY = rect.top;
		maxX = rect.right - w;
		maxY = rect.bottom - h;
	}
	return {
		x: Math.max(minX, Math.min(pos.x, maxX)),
		y: Math.max(minY, Math.min(pos.y, maxY)),
	};
}

export const Window = forwardRef<HTMLDivElement, WindowProps>(
	(
		{
			id,
			className,
			children,
			title,
			icon,
			color = 'primary',
			defaultPosition = DEFAULT_POSITION,
			position,
			onPositionChange,
			defaultSize,
			size,
			onSizeChange,
			minSize = DEFAULT_MIN_SIZE,
			maxSize,
			bounds = 'viewport',
			draggable = true,
			resizable = false,
			closable = true,
			onClose,
			active,
			defaultActive = true,
			onActivate,
			onDragStart,
			onDragEnd,
			onResizeStart,
			onResizeEnd,
			sx,
			...rest
		},
		ref,
	) => {
		const reactId = useId().replace(/:/g, '');
		const titleId = `window-${id ?? reactId}-title`;

		const isPositionControlled = position !== undefined;
		const [internalPosition, setInternalPosition] =
			useState<WindowPosition>(defaultPosition);
		const currentPosition = isPositionControlled
			? (position as WindowPosition)
			: internalPosition;

		const isSizeControlled = size !== undefined;
		const [internalSize, setInternalSize] = useState<WindowSize | undefined>(
			defaultSize,
		);
		const currentSize = isSizeControlled ? size : internalSize;

		const isActiveControlled = active !== undefined;
		const [internalActive, setInternalActive] = useState(defaultActive);
		const isActive = isActiveControlled ? (active as boolean) : internalActive;

		const containerRef = useRef<HTMLDivElement | null>(null);
		const dragOriginRef = useRef<{
			pointerId: number;
			offsetX: number;
			offsetY: number;
			rafId: number | null;
			latest: WindowPosition;
		} | null>(null);
		const resizeOriginRef = useRef<{
			pointerId: number;
			startW: number;
			startH: number;
			startX: number;
			startY: number;
			rafId: number | null;
			latest: WindowSize;
		} | null>(null);
		const callbacksRef = useRef({
			onPositionChange,
			onSizeChange,
			onDragEnd,
			onResizeEnd,
		});
		callbacksRef.current = {
			onPositionChange,
			onSizeChange,
			onDragEnd,
			onResizeEnd,
		};

		if (
			process.env['NODE_ENV'] !== 'production' &&
			isSizeControlled &&
			!onSizeChange
		) {
			console.warn(
				'[retro-react] Window: `size` is controlled but `onSizeChange` is missing. The resize handle will not update the window.',
			);
		}

		const commitPosition = useCallback(
			(next: WindowPosition) => {
				const clamped = clampPosition(
					next,
					currentSize,
					containerRef.current,
					bounds,
				);
				if (!isPositionControlled) setInternalPosition(clamped);
				callbacksRef.current.onPositionChange?.(clamped);
			},
			[isPositionControlled, bounds, currentSize],
		);

		const commitSize = useCallback(
			(next: WindowSize) => {
				if (!isSizeControlled) setInternalSize(next);
				callbacksRef.current.onSizeChange?.(next);
			},
			[isSizeControlled],
		);

		const activate = useCallback(() => {
			if (!isActive) {
				if (!isActiveControlled) setInternalActive(true);
				onActivate?.();
			}
		}, [isActive, isActiveControlled, onActivate]);

		const handleTitlePointerDown = (
			event: React.PointerEvent<HTMLDivElement>,
		) => {
			if (!draggable) return;
			const target = event.target as HTMLElement;
			if (target.closest('button, a, [data-no-drag]')) return;
			event.preventDefault();
			activate();
			(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
			dragOriginRef.current = {
				pointerId: event.pointerId,
				offsetX: event.clientX - currentPosition.x,
				offsetY: event.clientY - currentPosition.y,
				rafId: null,
				latest: currentPosition,
			};
			onDragStart?.(currentPosition);
		};

		const handleTitlePointerMove = (
			event: React.PointerEvent<HTMLDivElement>,
		) => {
			const o = dragOriginRef.current;
			if (!o || o.pointerId !== event.pointerId) return;
			const next = {
				x: event.clientX - o.offsetX,
				y: event.clientY - o.offsetY,
			};
			o.latest = next;
			if (o.rafId !== null) return;
			o.rafId = requestAnimationFrame(() => {
				if (!dragOriginRef.current) return;
				commitPosition(dragOriginRef.current.latest);
				dragOriginRef.current.rafId = null;
			});
		};

		const handleTitlePointerUp = (
			event: React.PointerEvent<HTMLDivElement>,
		) => {
			const o = dragOriginRef.current;
			if (!o || o.pointerId !== event.pointerId) return;
			if (o.rafId !== null) {
				cancelAnimationFrame(o.rafId);
				commitPosition(o.latest);
			}
			dragOriginRef.current = null;
			callbacksRef.current.onDragEnd?.(o.latest);
		};

		const handleResizePointerDown = (
			event: React.PointerEvent<HTMLDivElement>,
		) => {
			if (!resizable || !containerRef.current) return;
			event.preventDefault();
			event.stopPropagation();
			activate();
			(event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
			const rect = containerRef.current.getBoundingClientRect();
			const initial = { width: rect.width, height: rect.height };
			resizeOriginRef.current = {
				pointerId: event.pointerId,
				startW: rect.width,
				startH: rect.height,
				startX: event.clientX,
				startY: event.clientY,
				rafId: null,
				latest: initial,
			};
			onResizeStart?.(initial);
		};

		const handleResizePointerMove = (
			event: React.PointerEvent<HTMLDivElement>,
		) => {
			const o = resizeOriginRef.current;
			if (!o || o.pointerId !== event.pointerId) return;
			let width = Math.max(
				minSize.width,
				o.startW + (event.clientX - o.startX),
			);
			let height = Math.max(
				minSize.height,
				o.startH + (event.clientY - o.startY),
			);
			if (maxSize) {
				width = Math.min(maxSize.width, width);
				height = Math.min(maxSize.height, height);
			}
			const next = { width, height };
			o.latest = next;
			if (o.rafId !== null) return;
			o.rafId = requestAnimationFrame(() => {
				if (!resizeOriginRef.current) return;
				commitSize(resizeOriginRef.current.latest);
				resizeOriginRef.current.rafId = null;
			});
		};

		const handleResizePointerUp = (
			event: React.PointerEvent<HTMLDivElement>,
		) => {
			const o = resizeOriginRef.current;
			if (!o || o.pointerId !== event.pointerId) return;
			if (o.rafId !== null) {
				cancelAnimationFrame(o.rafId);
				commitSize(o.latest);
			}
			resizeOriginRef.current = null;
			callbacksRef.current.onResizeEnd?.(o.latest);
		};

		useEffect(() => {
			return () => {
				if (dragOriginRef.current?.rafId !== null && dragOriginRef.current) {
					cancelAnimationFrame(dragOriginRef.current.rafId as number);
				}
				if (
					resizeOriginRef.current?.rafId !== null &&
					resizeOriginRef.current
				) {
					cancelAnimationFrame(resizeOriginRef.current.rafId as number);
				}
			};
		}, []);

		const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
			if (event.key === 'Escape' && closable && onClose) {
				event.stopPropagation();
				onClose();
			}
		};

		const setRefs = (node: HTMLDivElement | null) => {
			containerRef.current = node;
			if (typeof ref === 'function') ref(node);
			else if (ref) ref.current = node;
		};

		return (
			<Sc.WindowContainer
				ref={setRefs}
				id={id}
				sx={sx}
				role="region"
				aria-labelledby={titleId}
				data-state={isActive ? 'active' : 'inactive'}
				tabIndex={-1}
				$active={isActive}
				className={classNames('window-root', className, commonClassNames)}
				style={{
					left: currentPosition.x,
					top: currentPosition.y,
					width: currentSize?.width,
					height: currentSize?.height,
				}}
				onMouseDown={activate}
				onKeyDown={handleKeyDown}
				{...rest}
			>
				<Sc.WindowTitleBar
					$color={color}
					$active={isActive}
					$draggable={draggable}
					className="window-titlebar"
					onPointerDown={handleTitlePointerDown}
					onPointerMove={handleTitlePointerMove}
					onPointerUp={handleTitlePointerUp}
					onPointerCancel={handleTitlePointerUp}
				>
					{icon && (
						<Sc.WindowIcon className="window-icon">{icon}</Sc.WindowIcon>
					)}
					<Sc.WindowTitle id={titleId} className="window-title">
						{title}
					</Sc.WindowTitle>
					<Sc.WindowControls className="window-controls">
						{closable && (
							<Sc.WindowButton
								type="button"
								onClick={(e) => {
									e.stopPropagation();
									onClose?.();
								}}
								aria-label="Close window"
								className="window-close-button"
							>
								×
							</Sc.WindowButton>
						)}
					</Sc.WindowControls>
				</Sc.WindowTitleBar>

				<Sc.WindowContent className="window-content">
					{children}
				</Sc.WindowContent>

				{resizable && (
					<Sc.WindowResizeHandle
						className="window-resize-handle"
						onPointerDown={handleResizePointerDown}
						onPointerMove={handleResizePointerMove}
						onPointerUp={handleResizePointerUp}
						onPointerCancel={handleResizePointerUp}
						aria-hidden="true"
					/>
				)}
			</Sc.WindowContainer>
		);
	},
);

Window.displayName = 'Window';
