import React from "react";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import getTheme, { mobileMaxWidthMediaQuery } from "./theme";

import { ThemeMode } from "./interface/types";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import BusinessCard from "./pages/BusinessCard";

function App() {
	const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/card",
			element: <BusinessCard />,
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
