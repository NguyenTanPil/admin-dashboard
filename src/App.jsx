import { Outlet } from 'react-router-dom';
import TopBar from './scenes/global/TopBar';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import SideBar from './scenes/global/SideBar';

function App() {
	const [theme, colorMode] = useMode();

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<div className='app'>
					<SideBar />
					<main className='content'>
						<TopBar />
						<Outlet />
					</main>
				</div>
			</ThemeProvider>
		</ColorModeContext.Provider>
	);
}

export default App;
