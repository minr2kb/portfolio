import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { Typography } from "@mui/material";

const BackContent = () => {
	const themeColor = "#2D57AF";
	return (
		<Grid2
			container
			sx={{
				position: "relative",
				width: "100%",
				height: "100%",
				p: "8px",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Grid2 container>
				<img
					src={"/images/logo/tmr.png"}
					alt="tmr"
					style={{
						width: "50px",
						objectFit: "contain",
					}}
				/>
				{/* Albert Sans, Alexandria */}
				<Typography
					sx={{ ml: 0.5, pt: "8px", fontSize: 15, fontWeight: 700 }}
				>
					founders
				</Typography>
			</Grid2>
			<Grid2>
				<Grid2 container alignItems={"end"}>
					<Typography
						sx={{
							fontSize: 20,
							fontWeight: 800,
							color: themeColor,
						}}
					>
						민경배
					</Typography>
					<Typography
						sx={{ fontSize: 13, fontWeight: 800, ml: 1, pb: "3px" }}
					>
						/ Software Engineer
					</Typography>
				</Grid2>
				<Grid2 mt={1}>
					<Typography
						sx={{
							fontSize: 13,
							fontWeight: 800,
							color: themeColor,
						}}
					>
						010-4554-1664
					</Typography>
					<Typography
						sx={{
							fontSize: 13,
							fontWeight: 800,
							color: themeColor,
						}}
					>
						kyungbae.min@tmr-founders.com
					</Typography>
					<Typography
						sx={{
							fontSize: 13,
							fontWeight: 800,
							color: themeColor,
						}}
					>
						https://tmr-founders.com
					</Typography>
					{/* <Typography
						color={"primary"}
						sx={{ fontSize: 13, fontWeight: 800 }}
					>
						https://tag-here.com
					</Typography> */}
				</Grid2>
			</Grid2>
			<Grid2>
				<Typography sx={{ fontSize: 11, fontWeight: 800 }}>
					2F, MARU 180,
				</Typography>
				<Typography sx={{ fontSize: 11, fontWeight: 800 }}>
					180, Yeoksam-ro, Gangnam-gu
				</Typography>
				<Typography sx={{ fontSize: 11, fontWeight: 800 }}>
					Seoul, Republic of Korea, 06248
				</Typography>
			</Grid2>
			<Grid2
				sx={{
					position: "absolute",
					top: 120,
					right: 0,
					width: 100,
					height: 30,
					bgcolor: "#000",
				}}
			/>
		</Grid2>
	);
};

export default BackContent;
