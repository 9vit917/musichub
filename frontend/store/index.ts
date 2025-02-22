import { createWrapper, Context, MakeStore } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import { reducer, RootState } from './reducers';

const makeStore = () =>
	configureStore({
		reducer,
		devTools: true,
	});

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: true });
