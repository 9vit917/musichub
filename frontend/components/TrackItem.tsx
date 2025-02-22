import { TrackType } from '../types/track';
import { Box, Card, Grid2 as Grid, IconButton } from '@mui/material';
import styles from "../styles/TrackItem.module.scss"
import { Delete, Pause, PlayArrow } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useActions } from '../hooks/useActions';

type TrackItemProps = {
	track: TrackType,
	active?: boolean,
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
	const router = useRouter();
	const { _id, name, artist, picture } = track;

	const { setActive } = useActions()

	const play = (e) => {
		console.log(e)
	}

	const playControlIcon = active ? <Pause /> : <PlayArrow />;


	return (
		<Card className={styles.track} onClick={() => router.push("/tracks/" + _id)}>
			<IconButton onClick={play}>
				{playControlIcon}
			</IconButton>
			<img width={70} height={70} src={picture} alt={`${name} album cover`} />
			<Grid container direction="column">
				<div className={styles.trackInfo}>
					<div>
						{name}
					</div>
					<div className={styles.artist}>
						{artist}
					</div>
				</div>
			</Grid>

			<IconButton className={styles.deleteButton} onClick={(e) => {
				e.stopPropagation();
				console.log("delete")
			}}>
				<Delete />
			</IconButton>
		</Card>
	)
}

export default TrackItem;