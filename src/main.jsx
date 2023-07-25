import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Bar from './scenes/bar/index.jsx';
import Calendar from './scenes/calendar/index.jsx';
import Contacts from './scenes/contacts/index.jsx';
import Dashboard from './scenes/dashboard/index.jsx';
import FAQ from './scenes/faq/index.jsx';
import Form from './scenes/form/index.jsx';
import Invoices from './scenes/invoices/index.jsx';
import Line from './scenes/line/index.jsx';
import Pie from './scenes/pie/index.jsx';
import Team from './scenes/team/index.jsx';
import Geography from './scenes/geography/index.jsx';

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
				element: <Bar />,
			},
			{
				path: '/pie',
				element: <Pie />,
			},
			{
				path: '/line',
				element: <Line />,
			},
			{
				path: '/faq',
				element: <FAQ />,
			},
			{
				path: '/geography',
				element: <Geography />,
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
