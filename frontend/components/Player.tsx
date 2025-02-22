import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material';
import { Grid2 as Grid, IconButton } from '@mui/material';
import { TrackType } from '../types/track';
import TrackProgress from './TrackProgress';

import styles from "../styles/Player.module.scss"
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { useEffect } from 'react';

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

let audio;

const Player = () => {
	const { active, pause, volume, duration, currentTime } = useTypedSelector(state => state.player);
	const { playTrack, pauseTrack, setCurrentTime, setDuration, setVolume } = useActions();
	const playControlIcon = !pause ? <Pause /> : <PlayArrow />;

	const play = () => {
		if (pause) {
			playTrack()
			audio.play()
		} else {
			pauseTrack()
			audio.pause()
		}
	}

	const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
		audio.volume = Number(e.target.value) / 100
		setVolume(Number(e.target.value))
	}

	const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
		audio.currentTime = Number(e.target.value)
		setCurrentTime(Number(e.target.value))
	}

	const setAudio = () => {
		if (active) {
			audio.src = track.audio
			audio.volume = volume / 100;
			audio.onloadedmetadata = () => {
				setDuration(Math.ceil(audio.duration));
			}
			audio.ontimeupdate = () => {
				setCurrentTime(Math.ceil(audio.currentTime));
			}
		}
	}

	useEffect(() => {
		if (!audio) {
			audio = new Audio()
		} else {
			setAudio();
		}
	}, [])

	return (<div className={styles.player}>
		<IconButton onClick={play}>
			{playControlIcon}
		</IconButton>
		<Grid container direction="column">
			<div className={styles.trackInfo}>
				<div>
					{track.name}
				</div>
				<div className={styles.artist}>
					{track.artist}
				</div>
			</div>
		</Grid>
		<TrackProgress left={currentTime} right={duration} onChange={changeCurrentTime} />
		<VolumeUp style={{ marginLeft: 'auto' }} />
		<TrackProgress left={volume} right={100} onChange={changeVolume} />
	</div>)
}

export default Player;