import {
	PLAYER_ACTION_TYPES,
	PlayerAction,
	PlayerStateType,
} from '../../types/player';

const initialState: PlayerStateType = {
	active: null,
	volume: 50,
	duration: 0,
	currentTime: 0,
	pause: true,
};

export const playerReducer = (
	state = initialState,
	action: PlayerAction
): PlayerStateType => {
	switch (action.type) {
		case PLAYER_ACTION_TYPES.PLAY:
			return { ...state, pause: false };

		case PLAYER_ACTION_TYPES.PAUSE:
			return { ...state, pause: true };

		case PLAYER_ACTION_TYPES.SET_ACTIVE:
			return {
				...state,
				active: action.payload,
				duration: 0,
				currentTime: 0,
			};

		case PLAYER_ACTION_TYPES.SET_CURRENT_TIME:
			return { ...state, currentTime: action.payload };

		case PLAYER_ACTION_TYPES.SET_DURATION:
			return { ...state, duration: action.payload };

		case PLAYER_ACTION_TYPES.SET_VOLUME:
			return { ...state, volume: action.payload };

		default:
			return state;
	}
};
