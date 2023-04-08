import { Box, Grid, SxProps, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import TextTransition, { presets } from "react-text-transition";

const RotatingText = ({
	texts,
	textSx,
}: {
	texts: string[];
	textSx?: SxProps;
}) => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(
			() => setIndex(index => index + 1),
			3000 // every 3 seconds
		);
		return () => clearTimeout(intervalId);
	}, []);

	return (
		<TextTransition
			springConfig={presets.wobbly}
			style={{
				margin: "0 4px",
			}}
			inline
		>
			<Grid
				sx={{
					...textSx,
				}}
			>
				{texts[index % texts.length]}
			</Grid>
		</TextTransition>
	);
};

export default RotatingText;
