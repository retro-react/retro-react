/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import commonClassNames from '@src/constants/commonClassNames';
import {
	Step,
	StepConnector,
	StepLabel,
	StepperWrapper,
	StepWrapper,
} from './Stepper.styled';

interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The active step of the Stepper.
	 *
	 * @default 0
	 */
	activeStep: number;
	/**
	 * The steps of the Stepper.
	 *
	 * @default []
	 */
	steps: Array<string>;
	/**
	 * The color of the Stepper. This should be a color key from the theme.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors;
	/**
	 * Whether to show labels for each step under the step number.
	 *
	 * @default true
	 */
	showLabels?: boolean;
	sx?: ThemeUICSSObject;
}

/**
 * Stepper allows navigation through numbered steps. Currently in experimental phase.
 *
 * @example
 * <Stepper activeStep={2} steps={['Step 1', 'Step 2', 'Step 3', 'Step 4']} color="primary" />
 */
export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
	(
		{
			id,
			className,
			activeStep,
			steps,
			color = 'primary',
			showLabels = true,
			sx = {},
			...rest
		},
		ref,
	) => {
		return (
			<StepperWrapper
				id={id}
				ref={ref}
				sx={sx}
				className={classNames('stepper-root', className, commonClassNames)}
				{...rest}
			>
				{steps.map((step, index) => (
					<>
						<StepWrapper>
							<Step active={index === activeStep} color={color}>
								{index + 1}
							</Step>
							{showLabels && (
								<StepLabel active={index === activeStep} color={color}>
									{step}
								</StepLabel>
							)}
						</StepWrapper>
						{index < steps.length - 1 && (
							<StepConnector $showLabels={showLabels} color={color} />
						)}
					</>
				))}
			</StepperWrapper>
		);
	},
);

Stepper.displayName = 'Stepper';
