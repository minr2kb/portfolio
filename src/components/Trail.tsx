import React from "react";
import { a, useTrail } from "@react-spring/web";
import { FontWeightValues } from "../interface/types";

export interface TrailProps {
	open: boolean;
	spacing?: number;
	children: React.ReactNode;
}

const Trail: React.FC<TrailProps> = ({
	open,

	spacing = 0,
	children,
}) => {
	const items = React.Children.toArray(children);
	const trail = useTrail(items.length, {
		config: { mass: 5, tension: 2500, friction: 200 },
		opacity: open ? 1 : 0,
		x: open ? 0 : 20,
		from: { opacity: 0, x: 20 },
	});
	return (
		<div>
			{trail.map(({ ...style }, index) => (
				<a.div
					key={index}
					style={{
						position: "relative",
						width: "100%",
						// height: "auto",
						// lineHeight: `${fontStyle.fontSize * 1.2}px`,
						color: "#333",
						// letterSpacing: "-0.05em",
						willChange: "transform, opacity",
						overflow: "hidden",
						overflowWrap: "break-word",
						marginBottom: spacing,
						...style,
					}}
				>
					<div>{items[index]}</div>
				</a.div>
			))}
		</div>
	);
};

export default Trail;
