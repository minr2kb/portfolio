import React, { useState } from "react";

import FlippableCard from "../components/FlippableCard";
import FrontContent from "../components/FrontContent";
import BackContent from "../components/BackContent";
import { Grid, IconButton, Typography } from "@mui/material";
import {
	Call,
	Email,
	GitHub,
	Instagram,
	Link,
	LinkedIn,
} from "@mui/icons-material";

const BusinessCard = () => {
	const [isActive, setIsActive] = useState(false);

	const handleCardFlip = () => {
		setIsActive(!isActive);
	};

	const tel = "01045541664";
	const email = "kyungbae.min@tmr-founders.com";
	const github = "https://github.com/minr2kb";
	const instagram = "https://www.instagram.com/minr2_kb";
	const linkedin = "https://www.linkedin.com/in/kyungbae-min-5963a921b";
	const link = "https://portfolio-kbmin.web.app";

	return (
		<Grid
			sx={{
				width: "100vw",
				height: "100vh",
				backgroundColor: isActive ? "rgba(0,0,0,0.4)" : "#FFF",
				transition: "background-color 0.2s ease-out",
			}}
		>
			<Grid
				container
				sx={{
					position: "relative",
					flexDirection: "column",
					width: "100%",
					maxWidth: "800px",
					height: "100%",
					mx: "auto",
					p: 3,
					alignItems: "center",
				}}
			>
				{/* <Slide in={isActive} direction="up" mountOnEnter unmountOnExit>
					<img
						src={"/images/tmr-trans.png"}
						style={{
							height: "100%",
							filter: "blur(10px)",
						}}
					/>
				</Slide> */}

				<Grid
					container
					sx={{
						flexDirection: "column",
						alignItems: "center",
						position: "absolute",
						top: "50vh",
						// opacity: isActive ? 0 : 1,
					}}
				>
					<img
						src={"/images/logo/tmr-logo.png"}
						alt="TMR Logo"
						style={{
							width: "40px",
						}}
					/>
					<Typography sx={{ fontSize: 32, fontWeight: 800, mt: 3 }}>
						민경배 / Ben
					</Typography>

					<Grid mt={3}>
						<IconButton target="_blank" href={`tel:${tel}`}>
							<Call />
						</IconButton>
						<IconButton target="_blank" href={`mailto:${email}`}>
							<Email />
						</IconButton>
						<IconButton target="_blank" href={github}>
							<GitHub />
						</IconButton>
						<IconButton target="_blank" href={instagram}>
							<Instagram />
						</IconButton>
						<IconButton target="_blank" href={linkedin}>
							<LinkedIn />
						</IconButton>
						<IconButton target="_blank" href={link}>
							<Link />
						</IconButton>
					</Grid>

					{/* <Grid mt={5}>
						<Button fullWidth>
							<img
								src={"/images/logo/tag-here.png"}
								style={{
									width: "140px",
								}}
							/>
						</Button>
						<Button fullWidth sx={{ mt: 1 }}>
							<img
								src={"/images/logo/tmr-founders.png"}
								style={{
									width: "140px",
								}}
							/>
						</Button>
					</Grid> */}
				</Grid>
				{/* <Grid
					sx={{
						position: "absolute",
						top: "80vh",
					}}
				>
					<svg viewBox="0 0 100 100" width="400" height="400">
						<defs>
							<path
								id="circle"
								d="
                                    M 50, 50
                                    m -37, 0
                                    a 37,37 0 1,1 74,0
                                    a 37,37 0 1,1 -74,0"
							/>
						</defs>
						<text font-size="4">
							<textPath xlinkHref="#circle">
								TMR Founders - TMR Founders - TMR Founders - TMR
								Founders - TMR Founders - TMR Founders - TMR
								Founders - TMR -
							</textPath>
						</text>
					</svg>
				</Grid> */}

				<Grid
					sx={{
						position: "absolute",
						top: isActive ? "30vh" : "15vh",
						transition: "top 0.4s ease-out",
					}}
				>
					<FlippableCard
						frontContent={<FrontContent />}
						backContent={<BackContent />}
						isActive={isActive}
						onClick={handleCardFlip}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default BusinessCard;
