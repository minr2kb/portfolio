import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { SectionProps } from "../interface/interfaces";
import ExperienceItem, {
	ExperienceItemType,
} from "../components/ExperienceItem";

const AcademicSection: React.FC<SectionProps> = ({ open = false }) => {
	const academic: ExperienceItemType = {
		title: "Stony Brook University",
		subtitle: "2019 Spring - 2022 Fall",
		logoSrc: "/images/SBU-logo-simp.png",
		descs: [
			"Bachelor of Science",
			"전공: Applied Mathematics and Statistics (응용 수학 통계학)",
			"부전공: Computer Science (컴퓨터 공학)",
			"CGPA: 3.98/4.0",
		],
	};
	return (
		<Grid>
			<Typography variant="h2">Academics</Typography>
			<Divider sx={{ mb: 2 }} />

			<ExperienceItem open={open} {...academic} />
		</Grid>
	);
};

export default AcademicSection;
