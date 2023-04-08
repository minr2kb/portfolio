import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Trail from "../components/Trail";
import { SectionProps } from "../interface/interfaces";
import { FontWeightValues } from "../interface/types";

const AcademicSection: React.FC<SectionProps> = ({
	open = false,
	isMobile,
}) => {
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
					<Trail
						open={open}
						fontStyle={{
							fontSize: isMobile ? 18 : 22,
							fontWeight: FontWeightValues.REGULAR,
						}}
						spacing={16}
					>
						<span>- Bachelor of Science</span>
						<span>
							- 전공: Applied Mathematics and Statistics (응용
							수학 통계학)
						</span>
						<span>- 부전공: Computer Science (컴퓨터 공학)</span>
						<span>- CGPA: 3.98/4.0</span>
					</Trail>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default AcademicSection;
