import { PLAYER_ACTION_TYPES, PlayerAction } from '../../types/player';
import { TrackType } from '../../types/track';

export const playTrack = (): PlayerAction => {
	return { type: PLAYER_ACTION_TYPES.PLAY };
};

export const pauseTrack = (): PlayerAction => {
	return { type: PLAYER_ACTION_TYPES.PAUSE };
};

export const setActive = (payload: TrackType): PlayerAction => {
	return { type: PLAYER_ACTION_TYPES.SET_ACTIVE, payload };
};

export const setCurrentTime = (payload: number): PlayerAction => {
	return { type: PLAYER_ACTION_TYPES.SET_CURRENT_TIME, payload };
};

export const setDuration = (payload: number): PlayerAction => {
	return { type: PLAYER_ACTION_TYPES.SET_DURATION, payload };
};

export const setVolume = (payload: number): PlayerAction => {
	return { type: PLAYER_ACTION_TYPES.SET_VOLUME, payload };
};
