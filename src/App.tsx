import { ThemeMode } from '@interface/enums';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import useDeviceQuery from '@hooks/useDeviceQuery';
import getTheme from '~/theme';

const HomeV1 = React.lazy(() => import('@pages/Home'));
const HomeV2 = React.lazy(() => import('@pages/HomeV2'));
const HomeV3 = React.lazy(() => import('@pages/HomeV3'));

function App() {
  const { isMobile } = useDeviceQuery();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/v3" replace />,
    },
    {
      path: '/v1',
      element: <HomeV1 />,
    },
    {
      path: '/v2',
      element: <HomeV2 />,
    },
    {
      path: '/v3',
      element: <HomeV3 />,
    },
  ]);

  const theme = getTheme(ThemeMode.V3, isMobile);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
