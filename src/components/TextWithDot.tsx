import { Grid, Typography, TypographyProps } from "@mui/material";

const TextWithDot = ({ ...typoProps }: TypographyProps) => {
	return (
		<Grid container>
			<Typography {...typoProps}>•</Typography>
			<Typography
				{...typoProps}
				sx={{ flex: 1, ml: 1, ...typoProps.sx, mixBlendMode: "color-burn" }}
			>
				{typoProps.children}
			</Typography>
		</Grid>
	);
};

export default TextWithDot;
