import React from "react";
import { Divider, Grid, Rating, Typography } from "@mui/material";

import TagSphere from "../components/TagSphere";
import { SectionProps } from "../interface/interfaces";
import { Lightbulb, LightbulbOutlined } from "@mui/icons-material";

const devSkills = [
	{
		name: "ReactJS",
		rating: 4.5,
	},
	{
		name: "ReactNative",
		rating: 4,
	},
	{
		name: "NextJS",
		rating: 4,
	},
	{
		name: "TypeScript",
		rating: 4.5,
	},
	{
		name: "JavaScript",
		rating: 4,
	},
	{
		name: "React-Query",
		rating: 4,
	},
	{
		name: "Material UI",
		rating: 4.5,
	},
	{
		name: "Tailwind CSS",
		rating: 4.5,
	},
	{
		name: "ThreeJS",
		rating: 3,
	},
];

const toolSkills = [
	{
		name: "Jira",
		rating: 4,
	},
	{ name: "Bitbucket", rating: 3 },
	{ name: "Github", rating: 4 },
	{ name: "Confluence", rating: 3 },
	{
		name: "Notion",
		rating: 4,
	},
	{
		name: "Slack",
		rating: 4.5,
	},
	{
		name: "Figma",
		rating: 3,
	},
];

const etcSkills = [
	{
		name: "악기연주",
		rating: 4,
	},
	{
		name: "스케이트보드",
		rating: 3,
	},
	{
		name: "UI/UX",
		rating: 2.5,
	},
	{
		name: "영어",
		rating: 3.5,
	},
];

const SkillList: React.FC<{
	skills: { name: string; rating: number }[];
}> = ({ skills }) => {
	return (
		<>
			{skills.map(skill => (
				<Grid
					container
					alignItems={"center"}
					// justifyContent={"space-between"}
					mt={2}
					key={skill.name}
				>
					<Typography color={"text.secondary"} variant="body1">
						{skill.name}
					</Typography>
					<Grid
						container
						flex={1}
						sx={{
							height: "50%",
							border: "dashed 0.5px #CCC",
							mx: 2,
						}}
					/>
					<Rating
						defaultValue={skill.rating}
						precision={0.5}
						icon={<Lightbulb fontSize="inherit" />}
						emptyIcon={<LightbulbOutlined fontSize="inherit" />}
						readOnly
					/>
				</Grid>
			))}
		</>
	);
};

const SkillSection: React.FC<SectionProps> = () => {
	return (
		<Grid>
			<Typography variant="h2">Skills</Typography>
			<Divider />
			<TagSphere />
			<Grid container columnSpacing={3}>
				<Grid mb={5} item xs={12} sm={4}>
					<Typography variant="h3">개발 스택</Typography>
					<SkillList skills={devSkills} />
				</Grid>
				<Grid mb={5} item xs={12} sm={4}>
					<Typography variant="h3">업무 협업 툴</Typography>
					<SkillList skills={toolSkills} />
				</Grid>
				<Grid mb={5} item xs={12} sm={4}>
					<Typography variant="h3">기타</Typography>
					<SkillList skills={etcSkills} />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default SkillSection;
