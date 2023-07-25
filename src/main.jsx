import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard from './scenes/dashboard/index.jsx';
import Team from './scenes/team/index.jsx';
import Contacts from './scenes/contacts/index.jsx';
import Invoices from './scenes/invoices/index.jsx';
import Form from './scenes/form/index.jsx';
import Calendar from './scenes/calendar/index.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Dashboard />,
			},
			{
				path: '/team',
				element: <Team />,
			},
			{
				path: '/contacts',
				element: <Contacts />,
			},
			{
				path: '/invoices',
				element: <Invoices />,
			},
			{
				path: '/form',
				element: <Form />,
			},
			{
				path: '/bar',
				element: <Dashboard />,
			},
			{
				path: '/pie',
				element: <Dashboard />,
			},
			{
				path: '/line',
				element: <Dashboard />,
			},
			{
				path: '/faq',
				element: <Dashboard />,
			},
			{
				path: '/geography',
				element: <Dashboard />,
			},
			{
				path: '/calendar',
				element: <Calendar />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
