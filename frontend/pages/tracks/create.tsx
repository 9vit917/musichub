import { Button, Grid2 as Grid } from '@mui/material';
import StepWrapper from '../../components/StepWrapper';
import MainLayout from '../../layouts/MainLayout';
import { useMemo, useState } from 'react';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep';
import ThirdStep from './components/ThirdStep';

const steps = ['Track Details', 'Track Image', 'Track Audio']

const Create = () => {
	const [activeStep, setActiveStep] = useState(0);
	// const [audioFile, setAudioFile] = useState({
	// 	name: ''
	// });
	const [audioFile, setAudioFile] = useState('');
	const [pictureFile, setPictureFile] = useState('');

	const onNext = () => {
		if (activeStep == steps.length - 1) return;

		setActiveStep((prev) => ++prev);
	}
	const onBack = () => {
		setActiveStep((prev) => --prev)
	}

	const onSubmit = () => {
		console.log(audioFile)
		console.log(audioFile)
		console.log(pictureFile)
	}

	const stepContent = useMemo(() => {
		switch (activeStep) {
			case 0:
				return FirstStep();
			case 1:
				return <SecondStep onUpload={() => setPictureFile} />;
			case 2:
				return <ThirdStep onUpload={() => setAudioFile} />;

			default:
				break;
		}
	}, [activeStep])

	return (<MainLayout>
		<StepWrapper activeStep={activeStep} steps={steps}>
			{stepContent}
		</StepWrapper>
		<Grid container justifyContent="space-between">
			<Button disabled={activeStep === 0} onClick={() => onBack()}>Back</Button>
			<Button onClick={() => onNext()}>Next</Button>
			{
				activeStep === steps.length - 1 && <Button onClick={() => onSubmit()}>Submit</Button>
			}
		</Grid>
	</MainLayout>)
}

export default Create;