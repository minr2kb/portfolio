import { ThemeMode } from '@interface/enums';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { Suspense } from 'react';
import { Navigate, RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';

import useDeviceQuery from '@hooks/useDeviceQuery';
import getTheme from '~/theme';
import ErrorPage from './pages/ErrorPage';
import LoadingPage from './pages/LoadingPage';

const HomeV1 = React.lazy(() => import('@pages/Home'));
const HomeV2 = React.lazy(() => import('@pages/HomeV2'));
const HomeV3 = React.lazy(() => import('@pages/HomeV3'));

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
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
    ],
  },
];

function App() {
  const { isMobile } = useDeviceQuery();

  const router = createBrowserRouter(routesConfig);
  const theme = getTheme(ThemeMode.V3, isMobile);

  return (
    <Suspense fallback={<LoadingPage />}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
