import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import getTheme, { mobileMaxWidthMediaQuery } from '~/theme';

import { ThemeMode } from '@interface/enums';
import Home from '@pages/Home';
import Test from '@pages/Test';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

function App() {
	const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);

	const router = createBrowserRouter([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/test',
			element: <Test />,
		},
	]);

	return (
		<ThemeProvider theme={getTheme(ThemeMode.LIGHT, isMobile)}>
			<CssBaseline />
			<RouterProvider router={router} />
		</ThemeProvider>
	);
}

export default App;
