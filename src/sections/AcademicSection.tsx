import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Trail from "../components/Trail";
import { SectionProps } from "../interface/interfaces";
import { FontWeightValues } from "../interface/types";
import TextWithDot from "../components/TextWithDot";

const AcademicSection: React.FC<SectionProps> = ({ open = false }) => {
	return (
		<Grid>
			<Typography variant="h2">Academics</Typography>
			<Divider />
			<Grid
				sx={{
					my: 2,
					width: "100%",
				}}
			>
				<Grid
					container
					sx={{
						alignItems: "center",
					}}
				>
					<img
						src="/images/SBU-logo-simp.png"
						alt="SBU"
						style={{
							transition: "all 0.3s ease-in-out",
							width: open ? "30px" : 0,
							marginTop: "4px",
							marginRight: open ? "8px" : 0,
						}}
					/>
					<Typography
						variant="h3"
						sx={{
							flex: 1,
						}}
					>
						Stony Brook University
					</Typography>
				</Grid>
				<Typography color={"text.secondary"} variant="body1">
					2019 Spring - 2022 Fall
				</Typography>
				<Grid mt={2}>
					<Trail open={open} spacing={16}>
						<TextWithDot variant="body1">
							Bachelor of Science
						</TextWithDot>
						<TextWithDot variant="body1">
							전공: Applied Mathematics and Statistics (응용 수학
							통계학)
						</TextWithDot>
						<TextWithDot variant="body1">
							부전공: Computer Science (컴퓨터 공학)
						</TextWithDot>
						<TextWithDot variant="body1">
							CGPA: 3.98/4.0
						</TextWithDot>
					</Trail>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AcademicSection;
