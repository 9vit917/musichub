import { Button, Grid2 as Grid } from '@mui/material';
import FileUpload from '../../../components/FileUpload';
import { FC } from 'react';

type StepProps = {
	onUpload: () => void;
}

const SecondStep: FC<StepProps> = ({ onUpload }) => {

	return (
		<Grid container direction="column" style={{ padding: 20 }} >
			<FileUpload setFile={() => onUpload} accept='image/*'>
				<Button>
					Upload image
				</Button>
			</FileUpload>
		</Grid>
	)
}

export default SecondStep