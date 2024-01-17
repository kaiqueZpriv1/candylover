import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PascoaIT } from '../pages/Pascoa/PascoaIT';
import App from '../App';
import { Kit } from '../pages/Pascoa/50g/Kit';

const route = createBrowserRouter([
	{
		path: '/',
		element: <App/>
	},
	{
		path: '/pascoa',
		element: <PascoaIT/>
	},
	{
		path: '/kit',
		element: <Kit/>
	},
]);

export const Routers = () => {
	return <RouterProvider router={route} />;
};
