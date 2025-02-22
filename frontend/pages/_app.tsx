import React from 'react';
import App, { AppInitialProps } from 'next/app';
import { wrapper } from '../store';

class WrappedApp extends App<AppInitialProps> {
	public static getInitialProps = wrapper.getInitialAppProps(store => async context => {
		// 1. Wait for all page actions to dispatch
		const pageProps = {
			// https://nextjs.org/docs/advanced-features/custom-app#caveats
			...(await App.getInitialProps(context)).pageProps,
		};

		// 3. Return props
		return { pageProps };
	});

	public render() {
		const { Component, pageProps } = this.props;
		return <Component {...pageProps} />;
	}
}

export default wrapper.withRedux(WrappedApp);
