import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PascoaIT } from '../pages/Pascoa/PascoaIT';
import App from '../App';

const route = createBrowserRouter([
	{
		path: '/',
		element: <App/>
	},
	{
		path: '/pascoa',
		element: <PascoaIT/>
	},
]);

export const Routers = () => {
	return <RouterProvider router={route} />;
};
