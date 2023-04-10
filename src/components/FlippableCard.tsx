import { SxProps } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";

export interface FlippableCardProps {
	frontContent: React.ReactNode;
	backContent: React.ReactNode;
	isActive?: boolean;
	onClick?: () => void;
}

const FlippableCard: React.FC<FlippableCardProps> = ({
	frontContent,
	backContent,
	isActive,
	onClick,
}) => {
	const cardProps: SxProps = {
		position: "absolute",
		width: "100%",
		height: "100%",
		backfaceVisibility: "hidden",
		backgroundColor: "#FFF",
		borderRadius: "10px",
	};

	const width = isActive ? 500 : 300;

	return (
		<Grid2
			sx={{
				fontFamily: "'Albert Sans', sans-serif",
				position: "relative",
				width: width,
				height: width * 0.5733,
				transformStyle: "preserve-3d",
				transition:
					"transform 0.4s ease-out, width 0.4s ease-out, height 0.4s ease-out, box-shadow 0.4s ease-out",
				cursor: "pointer",
				transform: `rotateY(${isActive ? "-180" : "0"}deg) rotateZ(${
					isActive ? "-90" : "0"
				}deg)`,
				boxShadow: isActive
					? "-20px 0px 20px 10px rgba(0, 0, 0, 0.2)"
					: "0px 20px 20px 7px rgba(0, 0, 0, 0.2)",
				borderRadius: "10px",
			}}
			onClick={onClick}
		>
			<Grid2
				sx={{
					...cardProps,
				}}
			>
				{frontContent}
			</Grid2>
			<Grid2
				sx={{
					...cardProps,

					transform: "rotateY(180deg)",
				}}
			>
				{backContent}
			</Grid2>

			<Grid2
				sx={{
					position: "absolute",
					width: "100px",
					height: "100%",
					borderRadius: "10px",
					background:
						"linear-gradient(70deg, transparent, white, transparent)",
					opacity: 0,

					animation: "shining 5s ease-in-out infinite",

					"@keyframes shining": {
						"0%": { left: 0, opacity: 0 },
						"5%": { opacity: 0.4 },
						"10%": { left: width - 100, opacity: 0 },
						"11%": { left: 0, opacity: 0 },
					},
				}}
			/>
		</Grid2>
	);
};

export default FlippableCard;
