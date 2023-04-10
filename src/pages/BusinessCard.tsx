import React, { useEffect, useState } from "react";

import FlippableCard from "../components/FlippableCard";
import FrontContent from "../components/FrontContent";
import BackContent from "../components/BackContent";
import { Grid, IconButton, Typography, Zoom } from "@mui/material";
import {
	Call,
	Email,
	GitHub,
	Instagram,
	Link,
	LinkedIn,
	Share,
} from "@mui/icons-material";
import { use100vh } from "react-div-100vh";

const BusinessCard = () => {
	const [isActive, setIsActive] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const vh = use100vh();

	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleCardFlip = () => {
		setIsActive(!isActive);
	};

	const tel = "01045541664";
	const email = "kyungbae.min@tmr-founders.com";
	const github = "https://github.com/minr2kb";
	const instagram = "https://www.instagram.com/minr2_kb";
	const linkedin = "https://www.linkedin.com/in/kyungbae-min-5963a921b";
	const linkPortfolio = "https://portfolio-kbmin.web.app";
	const linkTMR = "https://tmr-founders.com";
	const linkTagHere = "https://tag-here.com/?store=moojoo&table=1";

	useEffect(() => {
		document
			.querySelector('meta[name="theme-color"]')
			?.setAttribute("content", "#2D57AF");
	}, []);

	return (
		<Grid
			sx={{
				width: "100vw",
				height: vh ? vh : "100vh",
				backgroundColor: isActive ? "rgba(0,0,0,0.4)" : "#FFF",
				transition: "background-color 0.2s ease-out",
				overflow: "hidden",
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
				<IconButton
					sx={{ position: "absolute", top: 8, right: 8 }}
					onClick={() => {
						if (navigator.share) {
							navigator
								.share({
									title: "민경배/Ben",
									text: "민경배의 티엠알파운더스 명함",
									url: "https://portfolio-kbmin.web.app/card",
								})
								.then(() => console.log("Successful share"))
								.catch(error =>
									console.log("Error sharing", error)
								);
						}
					}}
				>
					<Share />
				</IconButton>

				<Grid
					container
					sx={{
						flexDirection: "column",
						alignItems: "center",
						position: "absolute",
						top: vh ? 0.5 * vh : "50vh",
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
					<Typography sx={{ fontSize: 32, fontWeight: 700, mt: 3 }}>
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
						<IconButton
							// onClick={handleClick}
							target="_blank"
							href={linkPortfolio}
						>
							<Link />
						</IconButton>
					</Grid>
				</Grid>
				<Grid
					sx={{
						position: "absolute",
						bottom: -400,
						animation: "rotate 20s linear infinite",
						"@keyframes rotate": {
							"100%": { transform: "rotate(-360deg)" },
						},
					}}
				>
					<Zoom in={!isActive}>
						<svg
							viewBox="0 0 100 100"
							width="600"
							height="600"
							xmlns={linkPortfolio + "/images/logo/"}
						>
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
							<text font-size="2">
								<textPath xlinkHref="#circle">
									TMR FOUNDERS 🕶️ TMR FOUNDERS 🤩 TMR FOUNDERS
									👨‍💻 TMR FOUNDERS ☕️ TMR FOUNDERS 🍚 TMR
									FOUNDERS 🏢 TMR FOUNDERS ⏰ TMR FOUNDERS 💡
									TMR FOUNDERS 📑 TMR FOUNDERS 🧢 TMR FOUNDERS
									🤖 🏆
								</textPath>
							</text>
						</svg>
					</Zoom>
				</Grid>

				<Grid
					sx={{
						position: "absolute",
						top: isActive
							? vh
								? 0.3 * vh
								: "30vh"
							: vh
							? 0.15 * vh
							: "15vh",
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
