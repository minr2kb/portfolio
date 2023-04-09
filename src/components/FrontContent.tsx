import React from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const FrontContent = () => {
	return (
		<Grid2
			sx={{
				position: "relative",
				width: "100%",
				height: "100%",
			}}
		>
			<img
				src={"/images/memoji-lg.png"}
				alt="memoji-lg"
				style={{
					height: "100%",
					position: "absolute",
					bottom: 0,
					marginLeft: "40%",
				}}
			/>
			<img
				src={"/images/logo/tmr.png"}
				alt="tmr"
				style={{
					width: "100%",
					position: "absolute",
					bottom: 0,
					opacity: 0.85,
				}}
			/>
		</Grid2>
	);
};

export default FrontContent;
