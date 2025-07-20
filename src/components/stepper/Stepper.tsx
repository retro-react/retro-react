/** @jsxImportSource theme-ui */
import React, { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import {
	Step,
	StepConnector,
	StepLabel,
	StepperVariant,
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
	 * The visual variant of the Stepper.
	 * - default: Blue active, green completed
	 * - process: Blue process flow styling
	 * - warning: Red warning state styling
	 * - success: Green success state styling
	 *
	 * @default 'default'
	 */
	variant?: StepperVariant;
	/**
	 * Whether to show labels for each step under the step number.
	 *
	 * @default true
	 */
	showLabels?: boolean;
	sx?: ThemeUICSSObject;
}

/**
 * Authentic retro Stepper component with Windows 3.1 styling for step-by-step processes.
 *
 * Features:
 * - Authentic Windows 3.1 button and panel styling
 * - Visual distinction between active, completed, and inactive steps
 * - Multiple retro variants (default, process, warning, success)
 * - Proper step connectors showing progress flow
 * - Optional step labels with authentic typography
 *
 * @example
 * // Basic process stepper
 * <Stepper
 *   variant="process"
 *   activeStep={2}
 *   steps={["Select Service", "Choose Time", "Confirm Booking", "Complete"]}
 * />
 */
export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
	(
		{
			id,
			className,
			activeStep,
			steps,
			variant = 'default',
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
					<React.Fragment key={index}>
						<StepWrapper>
							<Step
								$active={index === activeStep}
								$completed={index < activeStep}
								$variant={variant}
							>
								{index < activeStep ? '' : index + 1}
							</Step>
							{showLabels && (
								<StepLabel
									$active={index === activeStep}
									$completed={index < activeStep}
									$variant={variant}
									title={step} // Show full text on hover
								>
									{step}
								</StepLabel>
							)}
						</StepWrapper>
						{index < steps.length - 1 && (
							<StepConnector
								$showLabels={showLabels}
								$variant={variant}
								$completed={index < activeStep}
							/>
						)}
					</React.Fragment>
				))}
			</StepperWrapper>
		);
	},
);

Stepper.displayName = 'Stepper';
