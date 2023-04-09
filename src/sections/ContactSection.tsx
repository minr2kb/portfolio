import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { SectionProps } from "../interface/interfaces";

import { Call, Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";

const ContactSection: React.FC<SectionProps> = ({ isMobile }) => {
	return (
		<Grid>
			<Typography variant="h2">Contacts</Typography>
			<Divider />
			<Grid
				sx={{
					my: 2,
					width: "100%",
				}}
			>
				<Grid
					container
					alignItems={"center"}
					mt={2}
					component={"a"}
					target="_blank"
					href={"tel:01045541664"}
					sx={{ textDecoration: "none", color: "inherit" }}
				>
					<Call />
					<Typography
						variant={"body2"}
						sx={{
							ml: 2,
						}}
					>
						010-4554-1664
					</Typography>
				</Grid>
				<Grid
					container
					alignItems={"center"}
					mt={2}
					component={"a"}
					target="_blanc"
					href={"mailto:kbmin1129@gmail.com"}
					sx={{ textDecoration: "none", color: "inherit" }}
				>
					<Email />
					<Typography
						variant={"body2"}
						sx={{
							ml: 2,
						}}
					>
						kbmin1129@gmail.com
					</Typography>
				</Grid>
				<Grid
					container
					alignItems={"center"}
					mt={2}
					component={"a"}
					target="_blanc"
					href={"https://github.com/minr2kb"}
					sx={{ textDecoration: "none", color: "inherit" }}
				>
					<GitHub />
					<Typography
						variant={"body2"}
						sx={{
							ml: 2,
						}}
					>
						minr2kb
					</Typography>
				</Grid>
				<Grid
					container
					alignItems={"center"}
					mt={2}
					component={"a"}
					target="_blanc"
					href={"https://www.instagram.com/minr2_kb"}
					sx={{ textDecoration: "none", color: "inherit" }}
				>
					<Instagram />
					<Typography
						variant={"body2"}
						sx={{
							ml: 2,
						}}
					>
						@minr2_kb
					</Typography>
				</Grid>
				<Grid
					container
					alignItems={"center"}
					mt={2}
					component={"a"}
					target="_blanc"
					href={"https://www.linkedin.com/in/kyungbae-min-5963a921b"}
					sx={{ textDecoration: "none", color: "inherit" }}
				>
					<LinkedIn />
					<Typography
						variant={"body2"}
						sx={{
							ml: 2,
						}}
					>
						kyungbae-min-5963a921b
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ContactSection;
