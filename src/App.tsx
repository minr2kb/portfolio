import { ThemeMode } from '@interface/enums';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Home from '@pages/Home';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeV2 from '~/pages/HomeV2';
import getTheme from '~/theme';
import useDeviceQuery from './hooks/useDeviceQuery';

function App() {
  const { isMobile } = useDeviceQuery();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/v2" replace />,
    },
    {
      path: '/v1',
      element: <Home />,
    },
    {
      path: '/v2',
      element: <HomeV2 />,
    },
  ]);

  const theme = getTheme(ThemeMode.LIGHT, isMobile);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
