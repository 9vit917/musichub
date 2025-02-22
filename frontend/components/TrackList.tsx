import Grid from '@mui/material/Grid2';
import { TrackType } from '../types/track';
import { Box } from '@mui/material';
import TrackItem from './TrackItem';

type TrackListProps = {
	tracks: TrackType[]
}

const TrackList: React.FC<TrackListProps> = ({ tracks }) => {
	return (
		<Grid container direction='column'>
			<Box p={2}>
				{
					tracks.map(track => <TrackItem key={track._id} track={track} />)
				}
			</Box>
		</Grid>
	)
}

export default TrackList;