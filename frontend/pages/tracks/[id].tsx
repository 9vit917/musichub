import { Button, Grid2 as Grid, TextField } from '@mui/material';
import MainLayout from '../../layouts/MainLayout';
import { TrackType } from '../../types/track';
import { useRouter } from 'next/router';

const TrackPage = () => {
	const router = useRouter();
	const track: TrackType = {
		_id: '1',
		name: 'Track 1',
		artist: 'Kavi',
		text: 'New track from Kavi',
		picture: 'http://localhost:5001/image/cdc6282a-9db6-4bf9-99ad-6540d5fe6eb8.jpg',
		listens: 0,
		audio: 'http://localhost:5001/audio/32000109-a717-414f-be88-ab80630f2a76.wav',
		comments: []
	};

	return (<MainLayout>
		<Button variant="outlined" onClick={() => router.push('/tracks')} style={{ fontSize: 24 }}>
			Go to Track List
		</Button>
		<Grid container columns={2} style={{ margin: '20px 0' }}>
			<img src={track.picture} alt={track.name + " albumn picture"} width={200} height={200} />
			<div style={{ marginLeft: 30 }}>
				<h1>Track name: {track.name}</h1>
				<h1>Artist: {track.artist}</h1>
				<h1>Listens: {track.listens}</h1>
			</div>
		</Grid>
		<h1>Track script</h1>
		<p>{track.text}</p>
		<h1>Comments</h1>
		<Grid container>
			<TextField label="Your name" fullWidth />
			<TextField label="Your comment" fullWidth multiline rows={4} />
			<Button>Send</Button>
		</Grid>
		<div>
			{track.comments.map(comment => (<div key={comment._id}>
				<div>Author: {comment.username}</div>
				<div>Comment: {comment.text}</div>
			</div>))}
		</div>
	</MainLayout>)
}

export default TrackPage;