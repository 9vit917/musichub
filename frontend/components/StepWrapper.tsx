import { Card, Container, Grid2 as Grid, Step, StepLabel, Stepper } from '@mui/material';
import { FC } from 'react'

type StepWrapperProps = {
	steps: string[];
	activeStep: number;
	children: any
}

const StepWrapper: FC<StepWrapperProps> = ({ activeStep, steps, children }) => {
	return (
		<Container>
			<Stepper activeStep={activeStep}>
				{steps.map((step, index) => (
					<Step
						key={index}
						completed={activeStep > index}
					>
						<StepLabel>
							{step}
						</StepLabel>
					</Step>
				))}
			</Stepper>
			<Grid container justifyContent="center" style={{ margin: '70px 0', height: 270 }}>
				<Card style={{ width: 600 }}>
					{children}
				</Card>
			</Grid>
		</Container>
	)
}

export default StepWrapper