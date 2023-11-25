import { ThemeMode } from '@interface/enums';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import Home from '@pages/Home';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeV2 from '~/pages/HomeV2';
import getTheme, { mobileMaxWidthMediaQuery } from '~/theme';

function App() {
  const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);
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

  return (
    <ThemeProvider theme={getTheme(ThemeMode.LIGHT, isMobile)}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
