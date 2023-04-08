import React from "react";
import { a, useTrail } from "@react-spring/web";
import { FontWeightValues } from "../interface/types";

export interface TrailProps {
	open: boolean;
	fontStyle?: {
		fontSize: number;
		fontWeight: FontWeightValues;
		color?: string;
	};
	spacing?: number;
	children: React.ReactNode;
}

const Trail: React.FC<TrailProps> = ({
	open,
	fontStyle = { fontSize: 60, fontWeight: FontWeightValues.BOLD },
	spacing = 0,
	children,
}) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 5, tension: 2500, friction: 200 },
		opacity: open ? 1 : 0,
		x: open ? 0 : 20,
		height: open ? fontStyle.fontSize * 1.2 + spacing : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});
	return (
		<div>
			{trail.map(({ height, ...style }, index) => (
				<a.div
					key={index}
					style={{
						position: "relative",
						width: "100%",
						height: `${fontStyle.fontSize * 1.2}px`,
						lineHeight: `${fontStyle.fontSize * 1.2}px`,
						color: "#333",
						// letterSpacing: "-0.05em",
						willChange: "transform, opacity",
						overflow: "hidden",
						...fontStyle,
						...style,
						marginBottom: spacing,
					}}
				>
					<a.div style={{ height }}>{items[index]}</a.div>
				</a.div>
			))}
		</div>
	);
};

export default Trail;
