import { createTheme } from "@mui/material/styles";
import { FontWeightValues, ThemeMode } from "./interface/types";

export const MOBILE_WIDTH = 700;
export const TABLET_WIDTH = 960;

export const mobileMaxWidthMediaQuery = `@media (max-width:${MOBILE_WIDTH}px)`;
export const tabletMaxWidthMediaQuery = `@media (max-width:${TABLET_WIDTH}px)`;

// A custom theme for this app
const getTheme = (mode: ThemeMode, isMobile?: boolean) =>
	createTheme({
		breakpoints: {
			values: {
				xs: 0,
				sm: MOBILE_WIDTH,
				md: TABLET_WIDTH,
				lg: 1200,
				xl: 1600,
			},
		},
		palette: {
			//keep
			primary: {
				main: "#1ECCA2",
				light: "#83ECD2",
				contrastText: "#FFF",
			},
			//remove from below
			common: {
				black: "#000",
				white: "#fff",
			},
			secondary: {
				main: "#666",
			},
			text: {
				primary: "#333",
				secondary: "#666",
				disabled: "#C1C1C1",
			},

			info: {
				main: "#3580F3",
			},
			//above will be depreciated

			error: {
				main: "#ff0000",
			},

			// 아래 컬러 팔레트로 이동 작업
			// tmr_color: {
			// 	main: "#1ECCA2",
			// 	opacity_50: "#1ECCA2",
			// 	opacity_20: "#1ECCA2",
			// 	point_01: "#83ECD2",
			// },
			// tmr_black: {
			// 	main: "#000000",
			// 	900: "#000000",
			// 	800: "#191919",
			// 	700: "#333333",
			// 	600: "#666666",
			// 	500: "#999999",
			// },

			// tmr_grey: {
			// 	main: "#AEAEAE",
			// 	500: "#AEAEAE",
			// 	400: "#BBBBBB",
			// 	300: "#C4C4C4",
			// 	200: "#E0E0E0",
			// 	100: "#EEEEEE",
			// 	50: "#f4f4f4",
			// 	30: "#f9f9f9",
			// },

			// tmr_white: {
			// 	main: "#ffffff",
			// },
		},

		typography: {
			fontFamily: [
				"AppleSDGothicNeo",
				"-apple-system",
				"BlinkMacSystemFont",
				'"Segoe UI"',
				"Roboto",
				'"Helvetica Neue"',
				"Arial",
				"sans-serif",
				'"Apple Color Emoji"',
				'"Segoe UI Emoji"',
				'"Segoe UI Symbol"',
			].join(","),
			h1: {
				fontSize: isMobile ? 32 : 50,
				fontWeight: FontWeightValues.BOLD,
				letterSpacing: "0.02em",
				lineHeight: 1.3,
			},
			h2: {
				fontSize: isMobile ? 28 : 44,
				fontWeight: FontWeightValues.BOLD,
				letterSpacing: "0.02em",
				lineHeight: 1.5,
				wordBreak: "keep-all",
			},
			h3: {
				fontSize: isMobile ? 22 : 32,
				fontWeight: FontWeightValues.BOLD,
				lineHeight: 1.5,
				letterSpacing: "0.015em",
				wordBreak: "keep-all",
			},
			h4: {
				fontSize: isMobile ? 18 : 22,
				fontWeight: FontWeightValues.BOLD,
				lineHeight: 1.3,
				letterSpacing: "0.015em",
				wordBreak: "keep-all",
			},
			body1: {
				fontSize: isMobile ? 18 : 22,
				fontWeight: FontWeightValues.REGULAR,
				wordBreak: "keep-all",
			},
			body2: {
				fontSize: isMobile ? 16 : 20,
				fontWeight: FontWeightValues.REGULAR,
			},
		},

		components: {
			MuiButton: {
				styleOverrides: {
					root: {
						borderRadius: "5px",
						boxShadow: "none",
						textTransform: "none",
						"&:hover": {
							boxShadow: "none",
						},
					},
				},
			},
			MuiCard: {
				styleOverrides: {
					root: {
						boxShadow: "none",
						border: "solid 1px #E5E8EB",
						borderRadius: "5px",
					},
				},
			},
			MuiPaginationItem: {
				styleOverrides: {
					root: {
						height: "24px",
						width: "24px",
						minWidth: "24px",
						borderRadius: "5px",
						fontWeight: 600,
						"&.Mui-selected": { color: "white" },
						"&.Mui-disabled": { display: "none" },
						"&.MuiPaginationItem-previousNext": {
							border: "solid 1px #E0E0E0",
						},
					},
				},
			},
		},
	});

export default getTheme;
