import React, { useRef, useState } from "react";
import {
	CssBaseline,
	Grid,
	ThemeProvider,
	Typography,
	useMediaQuery,
} from "@mui/material";

import { animated, useScroll } from "@react-spring/web";
import getTheme, { mobileMaxWidthMediaQuery } from "./theme";
import Trail from "./components/Trail";
import RotatingText from "./components/RotatingText";
import { TypeAnimation } from "react-type-animation";
import useRangeSwitch from "./utils/useRangeSwitch";
import TopNav from "./components/TopNav";

import SkillSection from "./sections/SkillSection";
import AcademicSection from "./sections/AcademicSection";
import ProjectSection from "./sections/ProjectSection";
import Footer from "./sections/Footer";
import ContactSection from "./sections/ContactSection";
import { ThemeMode } from "./interface/types";
import ExperienceSection from "./sections/ExperienceSection";

function App() {
	const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);
	const containerRef = useRef<HTMLDivElement>(null!);
	const innerRef = useRef<HTMLDivElement>(null!);

	const [openTrail, onTrailRange] = useRangeSwitch();
	const [openText, onTextRange] = useRangeSwitch();
	const [openAcaTexts, onAcaTextsRange] = useRangeSwitch();
	const [openExeTexts, onExeTextsRange] = useRangeSwitch();
	const [startedScroll, setStartedScroll] = useState(false);
	const [sectionHeights, setSectionHeights] = useState<{
		[section: string]: number;
	}>({ intro: 0 });

	const { scrollY } = useScroll({
		container: containerRef,
		onChange: ({ value: { scrollY } }) => {
			setStartedScroll(scrollY > 0);
			onTrailRange(scrollY, 300);
			onTextRange(scrollY, 4200, 5000);
			onAcaTextsRange(scrollY, 500);
			onExeTextsRange(scrollY, 900);
		},
		default: {
			immediate: true,
		},
	});

	return (
		<ThemeProvider theme={getTheme(ThemeMode.LIGHT, isMobile)}>
			<CssBaseline />
			<Grid ref={containerRef} sx={{ height: "100vh", overflow: "auto" }}>
				{/* Outer Container */}
				<Grid
					ref={innerRef}
					sx={{ mx: "auto", maxWidth: "960px", p: 3 }}
				>
					{/* Inner Container */}
					<Grid>
						<TopNav
							startedScroll={startedScroll}
							scrollY={scrollY}
							pageHeight={(() => {
								if (innerRef.current && containerRef.current)
									return (
										innerRef.current.clientHeight -
										containerRef.current.clientHeight
									);

								return 1;
							})()}
							scrollTo={top => {
								if (containerRef.current !== null)
									containerRef.current?.scrollTo({
										top,
										behavior: "smooth",
									});
							}}
							sectionHeights={sectionHeights}
						/>
						<Grid
							sx={{
								position: "relative",
								// height: "700vh",
							}}
						>
							{/* SECTION: Intro */}
							<Grid
								container
								height={"90vh"}
								flexDirection={isMobile ? "column" : "row"}
								justifyContent={isMobile ? "center" : "start"}
								alignItems={isMobile ? "start" : "center"}
								// ref={ref => {
								// 	if (ref && !sectionHeights.intro)
								// 		setSectionHeights(prev => ({
								// 			...prev,
								// 			intro: ref.offsetTop,
								// 		}));
								// }}
							>
								<img
									src="/images/memoji.png"
									alt="미모지"
									// width={isMobile ? "200px" : "300px"}
									height={isMobile ? "200px" : "300px"}
								/>
								<Grid>
									<Typography variant="h1">
										안녕하세요
									</Typography>

									<Typography variant="h1">
										{/* 저는{" "} */}
										<RotatingText
											texts={[
												"도전하는",
												"꼼꼼한",
												"재미를 쫒는",
												"새로움을 찾는",
											]}
											textSx={{
												background:
													"linear-gradient(to right, #30CFD0 0%, #330867 100%)",
												WebkitBackgroundClip: "text",
												WebkitTextFillColor:
													"transparent",
											}}
										/>{" "}
										FE 개발자
									</Typography>

									<Typography variant="h1">
										민경배입니다
									</Typography>
								</Grid>
							</Grid>

							{/* <Grid mt={10}>
							<Trail
								open={openTrail}
								fontStyle={{
									fontSize: isMobile ? 32 : 60,
									fontWeight: FontWeightValues.BOLD,
								}}
							>
								<span>너와 나의 연결 고리</span>
								<span>이건 우리 안의 소리</span>
								<span>너와 나의 연결 고리</span>
								<span>이건 우리 안의 소리</span>
							</Trail>
						</Grid> */}
							{/* <Grid mt={10}>
							<TypeAnimation
								sequence={[
									"",
									500,
									"이건",
									500,
									"이건 경배의",
									1000,
									"이건 경배의 포트폴리오",
									2000,
									// () => {
									// 	console.log("Sequence completed"); // Place optional callbacks anywhere in the array
									// },
								]}
								wrapper="span"
								cursor={true}
								repeat={Infinity}
								style={{
									fontSize: isMobile ? 32 : 60,
									fontWeight: FontWeightValues.BOLD,
									display: "inline-block",
								}}
							/>
						</Grid> */}

							{/* SECTION: Academics */}
							<Grid
								pt={10}
								id={"academics"}
								ref={ref => {
									if (ref && !sectionHeights.academics)
										setSectionHeights(prev => ({
											...prev,
											academics: ref.offsetTop,
										}));
								}}
							>
								<AcademicSection
									open={openAcaTexts}
									isMobile={isMobile}
								/>
							</Grid>

							{/* SECTION: Experiences */}
							<Grid
								pt={10}
								id={"experiences"}
								ref={ref => {
									if (ref && !sectionHeights.experiences)
										setSectionHeights(prev => ({
											...prev,
											experiences: ref.offsetTop,
										}));
								}}
							>
								<ExperienceSection
									open={openExeTexts}
									isMobile={isMobile}
								/>
							</Grid>

							{/* SECTION: Skills */}
							<Grid
								pt={10}
								id={"skills"}
								ref={ref => {
									if (ref && !sectionHeights.skills)
										setSectionHeights(prev => ({
											...prev,
											skills: ref.offsetTop,
										}));
								}}
							>
								<SkillSection isMobile={isMobile} />
							</Grid>

							{/* SECTION: Projects */}
							<Grid
								pt={10}
								id={"projects"}
								ref={ref => {
									if (ref && !sectionHeights.projects)
										setSectionHeights(prev => ({
											...prev,
											projects: ref.offsetTop,
										}));
								}}
							>
								<ProjectSection isMobile={isMobile} />
							</Grid>

							{/* SECTION: Contacts */}
							<Grid
								pt={10}
								id={"contacts"}
								// ref={ref => {
								// 	if (ref && !sectionHeights.contacts)
								// 		setSectionHeights(prev => ({
								// 			...prev,
								// 			contacts: ref.offsetTop,
								// 		}));
								// }}
							>
								<ContactSection isMobile={isMobile} />
							</Grid>

							{/* SECTION: Footer */}
							<Grid pt={10} component={"footer"}>
								<Footer />
							</Grid>
						</Grid>
						{/* <Box
						sx={{
							width: "100%",
							height: "100%",
							position: "fixed",
							inset: 0,
							pointerEvents: "none",
							// zIndex: 2,
						}}
					>
						<animated.div
							style={{
								pointerEvents: "none",
								width: "100%",
								height: "100%",
								position: "fixed",
								inset: 0,
								backgroundColor: "orange",
								top: "50%",
								left: "50%",
								transform: "translate(-50%, -50%)",
								clipPath: scrollY.to(
									val =>
										`circle(${
											scaleRange(val, 4000, 4700) * 100
										}%)`
								),
								opacity: scrollY.to(
									val => 1 - scaleRange(val, 4700, 5500)
								),
							}}
						>
							<Grid
								sx={{
									mx: "auto",
									maxWidth: "960px",
									p: 3,
									pt: "30vh",
								}}
							>
								<TextFromBottom open={openText}>
									<Typography
										sx={{
											// color: "rgb(5, 74, 238)",
											color: "#FFF",
											fontSize: isMobile ? 28 : 32,
											fontWeight: FontWeightValues.BOLD,
										}}
									>
										경배의 포트폴리오는
									</Typography>
								</TextFromBottom>
								<TextFromBottom open={openText}>
									<Typography
										sx={{
											// color: "rgb(5, 74, 238)",
											color: "#FFF",
											fontSize: isMobile ? 28 : 32,
											fontWeight: FontWeightValues.BOLD,
										}}
									>
										지금부터 시작
									</Typography>
								</TextFromBottom>
							</Grid>
						</animated.div>
					</Box> */}

						{/* <ScrollExample /> */}
					</Grid>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}

export default App;
