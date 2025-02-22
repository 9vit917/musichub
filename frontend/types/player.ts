import { TrackType } from './track';

export type PlayerStateType = {
	active: null | TrackType;
	volume: number;
	duration: number;
	currentTime: number;
	pause: boolean;
};

export const PLAYER_ACTION_TYPES = {
	PLAY: 'PLAY',
	PAUSE: 'PAUSE',
	SET_ACTIVE: 'SET_ACTIVE',
	SET_DURATION: 'SET_DURATION',
	SET_CURRENT_TIME: 'SET_CURRENT_TIME',
	SET_VOLUME: 'SET_VOLUME',
} as const;

type PlayActionType = {
	type: typeof PLAYER_ACTION_TYPES.PLAY;
};

type PauseActionType = {
	type: typeof PLAYER_ACTION_TYPES.PAUSE;
};

type SetActiveActionType = {
	type: typeof PLAYER_ACTION_TYPES.SET_ACTIVE;
	payload: TrackType;
};

type SetDurationActionType = {
	type: typeof PLAYER_ACTION_TYPES.SET_DURATION;
	payload: number;
};

type SetCurrentTimeActionType = {
	type: typeof PLAYER_ACTION_TYPES.SET_CURRENT_TIME;
	payload: number;
};

type SetVolumeyActionType = {
	type: typeof PLAYER_ACTION_TYPES.SET_VOLUME;
	payload: number;
};

export type PlayerAction =
	| PlayActionType
	| PauseActionType
	| SetActiveActionType
	| SetCurrentTimeActionType
	| SetDurationActionType
	| SetVolumeyActionType;
