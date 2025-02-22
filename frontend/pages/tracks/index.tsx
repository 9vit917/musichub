import { Box, Button, Card } from '@mui/material';
import MainLayout from '../../layouts/MainLayout';
import Grid from '@mui/material/Grid2';
import { useRouter } from 'next/router';
import { TrackType } from '../../types/track';
import TrackList from '../../components/TrackList';

const Index = () => {
	const router = useRouter();
	const tracks: TrackType[] = [
		{
			_id: '1',
			name: 'Track 1',
			artist: 'Kavi',
			text: 'New track from Kavi',
			picture: 'http://localhost:5001/image/cdc6282a-9db6-4bf9-99ad-6540d5fe6eb8.jpg',
			listens: 0,
			audio: 'http://localhost:5001/audio/32000109-a717-414f-be88-ab80630f2a76.wav',
			comments: []
		},
		{
			_id: '2',
			name: 'Track 2',
			artist: 'Kavi 1',
			text: 'New track from Kavi',
			picture: 'http://localhost:5001/image/3f4e45e4-3c2a-4692-8114-f16a6c7713e5.png',
			listens: 0,
			audio: 'http://localhost:5001/audio/565b80c9-71f5-491c-a614-1bdefdbf938b.wav',
			comments: []
		},
		{
			_id: '3',
			name: 'Track 3',
			artist: 'Kavi3',
			text: 'New track from Kavi',
			picture: 'http://localhost:5001/image/cdc6282a-9db6-4bf9-99ad-6540d5fe6eb8.jpg',
			listens: 0,
			audio: 'http://localhost:5001/audio/32000109-a717-414f-be88-ab80630f2a76.wav',
			comments: []
		}
	];

	return (<MainLayout>
		<Grid container spacing={2}>
			<Grid size={8} justifyContent='space-between'>
				<Card style={{ width: 900 }}>
					<Box p={3}>
						<Grid container justifyContent='space-between'>
							<h1> List of tracks</h1>
							<Button onClick={() => router.push('/tracks/create')}>Upload</Button>
						</Grid>
					</Box>
					<TrackList tracks={tracks} />
				</Card>
			</Grid>
		</Grid>
	</MainLayout>)
}

export default Index;