import { Box, Typography } from "@mui/material";

export type Props = {
	fontSize: number;
	lineHeight?: number;
	text: string;
	alt?: string | React.ReactNode;
};

const HoverChangingText = (props: Props) => {
	const { fontSize, lineHeight = 1.3, text, alt } = props;

	return (
		<Box sx={{ height: fontSize * lineHeight, overflow: "hidden" }}>
			<Box
				sx={{
					transition: "all ease-in-out 150ms",
					":hover": {
						transform: "translateY(-50%)",
					},
				}}
			>
				<Typography
					variant='h1'
					sx={{
						fontSize: fontSize,
						mixBlendMode: "color-burn",
						whiteSpace: "pre-wrap",
					}}
				>
					{text}
				</Typography>
				<Typography
					variant='h1'
					sx={{
						fontSize: fontSize,
						mixBlendMode: "color-burn",
						whiteSpace: "pre-wrap",
					}}
				>
					{alt ?? text}
				</Typography>
			</Box>
		</Box>
	);
};

export default HoverChangingText;
