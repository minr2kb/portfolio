import {
	Chip,
	Grid,
	IconButton,
	Typography,
	useMediaQuery,
} from "@mui/material";
import React from "react";
import { mobileMaxWidthMediaQuery } from "../theme";
import { Link } from "@mui/icons-material";
import { FontWeightValues } from "../interface/types";

export interface ProjectBlockProps {
	title: string;
	description: string;
	image: string;
	link?: string;
	skills: string[];
	cateTag?: string;
}

const ProjectBlock: React.FC<ProjectBlockProps> = ({
	title,
	description,
	image,
	link,
	skills,
	cateTag,
}) => {
	const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);

	return (
		<Grid py={5}>
			<Grid
				sx={{
					overflow: "hidden",
					width: "100%",
					height: isMobile ? "200px" : "400px",
					borderRadius: "10px",
					"&:hover img": {
						transform: "scale(1.1)",
					},
				}}
			>
				<img
					src={image}
					alt="project"
					style={{
						transition: "all 0.2s ease-in-out",
						width: "100%",
						height: "100%",
						borderRadius: "10px",
						objectFit: "cover",
						objectPosition: "center center",
					}}
				/>
			</Grid>
			<Grid container alignItems={"center"} mt={2}>
				<Typography
					sx={{
						fontSize: isMobile ? 28 : 32,
						fontWeight: FontWeightValues.BOLD,
					}}
				>
					{title}
				</Typography>
				{link && (
					<IconButton href={link} target="_blank">
						<Link htmlColor="#999" />
					</IconButton>
				)}
			</Grid>
			<Grid container>
				{cateTag && (
					<Chip
						variant="outlined"
						label={cateTag}
						clickable
						size="small"
						color="secondary"
						sx={{ mr: 1, mt: 1 }}
					/>
				)}
				{skills.map(skill => {
					return (
						<Chip
							key={`${title}-${skill}`}
							variant="outlined"
							label={skill}
							clickable
							size="small"
							color="primary"
							sx={{ mr: 1, mt: 1 }}
						/>
					);
				})}
			</Grid>
			<Typography
				sx={{
					mt: 2,
					fontSize: isMobile ? 16 : 20,
					fontWeight: FontWeightValues.REGULAR,
				}}
				color={"text.secondary"}
			>
				{description}
			</Typography>
		</Grid>
	);
};

export default ProjectBlock;
