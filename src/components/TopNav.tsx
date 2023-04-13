import React, { useState } from "react";
import { Grid, Slider, Typography, useMediaQuery } from "@mui/material";

import { mobileMaxWidthMediaQuery } from "../theme";
import { SpringValue, animated } from "@react-spring/web";
import { FontWeightValues } from "../interface/types";

export interface TopNavProps {
	startedScroll?: boolean;
	scrollY: SpringValue<number>;
	pageHeight: number;
	sectionHeights: {
		[section: string]: number;
	};
	scrollTo: (top: number) => void;
}

const TopNav: React.FC<TopNavProps> = ({
	startedScroll,
	scrollY,
	pageHeight,
	sectionHeights,
	scrollTo,
}) => {
	const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);
	const [isHovering, setIsHovering] = useState(false);

	return (
		<Grid
			container
			sx={{
				position: "fixed",
				top: 0,
				left: 0,
				width: "100%",
				height: isMobile ? "50px" : "60px",
				alignItems: "center",
				bgcolor: "rgba(255,255,255,0.6)",
				// mixBlendMode: "difference",
				zIndex: 2,
				transition: "all 0.2s ease-in-out",
				boxShadow: startedScroll
					? "0px 0px 10px 5px rgba(0,0,0,0.1)"
					: "none",
				backdropFilter: startedScroll ? "blur(10px)" : "none",
			}}
		>
			<Grid
				container
				sx={{
					alignItems: "center",
					// maxWidth: "960px",
					px: 3,
					mx: "auto",
				}}
			>
				<Typography
					sx={{
						fontSize: isMobile ? 18 : 22,
						fontWeight: FontWeightValues.BOLD,
					}}
				>
					포트폴리오
				</Typography>
				<Grid
					container
					sx={{
						mx: 2,
						flex: 1,
						alignItems: "center",
						cursor: "pointer",
						minHeight: "15px",
						// borderRadius: "5px",
						// overflow: "hidden",
					}}
					onMouseOver={() => setIsHovering(true)}
					onMouseOut={() => setIsHovering(false)}
					// onClick={e => {
					// 	// get the x position of the click
					// 	const x = e.clientX - e.currentTarget.offsetLeft;

					// 	// get the width of the element
					// 	const width = e.currentTarget.clientWidth;

					// 	// calculate the percentage the user clicked
					// 	const percentage = x / width;
					// 	// scroll to the location of the click
					// 	console.log(
					// 		x,
					// 		width,
					// 		percentage,
					// 		pageHeight * percentage
					// 	);
					// 	scrollTo(pageHeight * percentage);
					// }}
				>
					{isHovering ? (
						<Slider
							size="small"
							max={pageHeight}
							defaultValue={scrollY.get()}
							// valueLabelDisplay="on"
							onChange={(e, val) => {
								scrollTo(val as number);
							}}
							marks={Object.values({
								...sectionHeights,
								contacts: pageHeight,
							}).map(height => ({
								value: height,
							}))}
							step={null}
						/>
					) : (
						<>
							<animated.div
								style={{
									width: scrollY.to(
										val =>
											`${
												Math.max(
													Math.min(
														val / pageHeight,
														1
													),
													0
												) * 100
											}%`
									),
									height: "1px",
									backgroundColor: " #1ECCA2",
								}}
							/>
							<animated.div
								style={{
									width: scrollY.to(
										val =>
											`${
												Math.max(
													Math.min(
														1 - val / pageHeight,
														1
													),
													0
												) * 100
											}%`
									),
									height: "1px",
									backgroundColor: "rgba(0,0,0,0.2)",
								}}
							/>
						</>
					)}{" "}
				</Grid>
				<a
					href="https://tmr-card.web.app/ben"
					target="_blank"
					rel="noreferrer"
					style={{
						display: "flex",
						alignItems: "center",
						textDecoration: "none",
						color: "inherit",
					}}
				>
					<Typography
						sx={{
							fontSize: isMobile ? 18 : 22,
							fontWeight: FontWeightValues.BOLD,
						}}
					>
						by. 경배 민
					</Typography>

					<img
						src="/images/memoji.png"
						alt="미모지"
						style={{
							transition: "all 0.2s ease-in-out",
							width: startedScroll ? "30px" : 0,
							marginTop: "2px",
						}}
					/>
				</a>
			</Grid>
		</Grid>
	);
};

export default TopNav;
