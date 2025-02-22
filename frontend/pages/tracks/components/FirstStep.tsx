import { Grid2 as Grid, TextField } from '@mui/material';
import { FC } from 'react'

// type FirstStepProps = {
// 	steps: string[];
// 	children: any
// }

const FirstStep = () => {
	return (
		<Grid container direction="column" style={{ padding: 20 }} >
			<TextField
				style={{ marginTop: 10 }}
				label="Track name"
			/>
			<TextField
				style={{ marginTop: 10 }}
				label="Author"
			/>
			<TextField
				style={{ marginTop: 10 }}
				label="Track script"
				multiline
				rows={3}
			/>
		</Grid>
	)
}

export default FirstStep