import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import RotatingText from "../components/RotatingText";
import { mobileMaxWidthMediaQuery } from "../theme";

const IntroSection = () => {
	const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);
	return (
		<Grid
			container
			height={"90vh"}
			flexDirection={isMobile ? "column" : "row"}
			justifyContent={isMobile ? "center" : "start"}
			alignItems={isMobile ? "start" : "center"}
		>
			<img
				src='/images/memoji.png'
				alt='미모지'
				height={isMobile ? "200px" : "300px"}
			/>
			<Grid>
				<Typography variant='h1'>안녕하세요</Typography>

				<Typography variant='h1'>
					<RotatingText
						texts={["도전하는", "꼼꼼한", "새로움을 찾는", "즐기는"]}
						textSx={{
							background: "linear-gradient(to right, #30CFD0 0%, #330867 100%)",
							WebkitBackgroundClip: "text",
							WebkitTextFillColor: "transparent",
						}}
					/>{" "}
					FE 개발자
				</Typography>

				<Typography variant='h1'>민경배입니다</Typography>
			</Grid>
		</Grid>
	);
};

export default IntroSection;
