import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { FontWeightValues } from "../interface/types";
import { SectionProps } from "../interface/interfaces";

const Footer: React.FC<SectionProps> = ({ isMobile }) => {
	return (
		<Grid>
			<Divider flexItem />
			<Grid
				container
				sx={{
					mt: 0.5,
					width: "100%",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				<Typography
					sx={{
						fontSize: 14,
						fontWeight: FontWeightValues.REGULAR,
					}}
				>
					© 2023 All rights reserved.
				</Typography>

				<Typography
					sx={{
						fontSize: 14,
						fontWeight: FontWeightValues.REGULAR,
					}}
				>
					{!isMobile && "Developed by. "} @minr2_kb
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Footer;
