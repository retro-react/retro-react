import React from 'react';

interface StarProps {
	$top: number;
	$left: number;
	$width: number;
	$height: number;
	$color: string;
	$visible: boolean;
}

export const TrailingStar = React.memo(
	({ $top, $left, $width, $height, $color, $visible }: StarProps) => {
		const sharedStyles = {
			position: 'absolute' as 'absolute',
			top: $top,
			left: $left,
			width: $width,
			height: `${$height + 2}px`,
			backgroundColor: $color,
		};

		const beforeStyles = {
			...sharedStyles,
			transform: 'rotate(-45deg) skewX(22.5deg) skewY(22.5deg)',
		};

		const afterStyles = {
			...sharedStyles,
			transform: 'rotate(45deg) skewX(22.5deg) skewY(22.5deg)',
		};

		return (
			<span
				style={{
					position: 'relative',
					width: $width,
					visibility: $visible ? 'visible' : 'hidden',
					transition: 'visibility 0.5s',
					userSelect: 'none' as 'none',
					pointerEvents: 'none' as 'none',
				}}
			>
				<span style={beforeStyles} />
				<span style={afterStyles} />
			</span>
		);
	},
);
