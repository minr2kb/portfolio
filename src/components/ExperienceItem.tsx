import TextWithDot from "@components/TextWithDot";
import Trail from "@components/Trail";
import { Grid, Typography } from "@mui/material";

export type ExperienceItemType = {
	title: string;
	subtitle: string;
	logoSrc: string;
	descs: string[];
};

const ExperienceItem = (
	props: ExperienceItemType & {
		open: boolean;
	}
) => {
	const { open, title, subtitle, logoSrc, descs } = props;
	return (
		<Grid
			sx={{
				mb: 5,
			}}
		>
			<Grid
				container
				sx={{
					alignItems: "center",
				}}
			>
				<img
					src={logoSrc}
					alt={title}
					style={{
						transition: "all 0.3s ease-in-out",
						width: open ? "30px" : 0,

						marginRight: open ? "8px" : 0,
					}}
				/>
				<Typography
					variant='h3'
					sx={{
						flex: 1,
					}}
				>
					{title}
				</Typography>
			</Grid>
			<Typography color={"text.secondary"} variant='body1'>
				{subtitle}
			</Typography>
			<Grid mt={2}>
				<Trail open={open} spacing={16}>
					{descs.map((desc, idx) => (
						<TextWithDot key={`${title}-desc-${idx}`} variant='body1'>
							{desc}
						</TextWithDot>
					))}
				</Trail>
			</Grid>
		</Grid>
	);
};

export default ExperienceItem;
