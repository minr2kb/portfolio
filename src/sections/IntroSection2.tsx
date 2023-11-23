import GradientBackground from "@components/GradientBackground";
import HoverChangingText from "@components/HoverChangingText";
import { Box, Zoom, useMediaQuery } from "@mui/material";
import { mobileMaxWidthMediaQuery } from "~/theme";

const IntroSection = () => {
	const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);
	return (
		<Box
			sx={{
				position: "relative",
				display: "flex",
				alignItems: "center",
				width: "100%",
				height: "100vh",
			}}
		>
			<GradientBackground filter />
			<Box
				sx={{
					position: "absolute",
					width: "100vw",
					height: "10%",
					bottom: 0,
					left: 0,
					background: "linear-gradient(transparent, #FFF)",
				}}
			/>

			<Box
				sx={{
					display: isMobile ? "block" : "flex",
					mx: "auto",
					p: 3,
				}}
			>
				<Zoom in style={{ transitionDelay: "1500ms" }}>
					<Box>
						<img
							src='/images/memoji.png'
							alt='미모지'
							height={isMobile ? "150px" : "240px"}
						/>
					</Box>
				</Zoom>
				<Box>
					{/* <TypeAnimation
						sequence={[
							2000,
							"안녕하세요,\n성장하는 프론트엔드 개발자 \n민경배입니다",
						]}
						wrapper='span'
						cursor={false}
						style={{
							fontSize: isMobile ? 32 : 50,
							fontWeight: FontWeightValues.BOLD,
							mixBlendMode: "color-burn",
							whiteSpace: "pre-wrap",
						}}
					/> */}

					<HoverChangingText
						fontSize={isMobile ? 32 : 50}
						text='안녕하세요,'
						alt='👋하세요,'
					/>
					<Box display={"flex"}>
						<HoverChangingText
							fontSize={isMobile ? 32 : 50}
							text='성장하는 '
							alt='🌱📈하는 '
						/>
						<HoverChangingText
							fontSize={isMobile ? 32 : 50}
							text='FE 개발자,'
							alt='💻📱 🧑‍💻 ,'
						/>
					</Box>
					<HoverChangingText
						fontSize={isMobile ? 32 : 50}
						text='민경배입니다'
						alt={
							<Box display={"flex"}>
								<img
									src='/images/memoji.png'
									alt='미모지'
									height={isMobile ? "32px" : "65px"}
								/>
								입니다
							</Box>
						}
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default IntroSection;
