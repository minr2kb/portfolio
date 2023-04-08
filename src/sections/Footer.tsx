import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import { FontWeightValues } from "../interface/types";

const Footer = () => {
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
					Developed by. @minr2_kb
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Footer;
