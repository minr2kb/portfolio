import React, { useEffect, useRef } from "react";
import { Box, Grid, useMediaQuery } from "@mui/material";
import TagCloud, { TagCloudOptions } from "TagCloud";
import { mobileMaxWidthMediaQuery } from "../theme";

const TagSphere = () => {
	const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);
	const tagCloudRef = useRef<HTMLDivElement>(null!);
	useEffect(() => {
		const container = "#tagcloud";
		document.getElementById("tagcloud")!.innerHTML = "";
		const texts = [
			// "HTML",
			// "CSS",
			// "JavaScript",
			"ReactJS",
			"TypeScript",
			"MUI",
			"NodeJS",
			"Yarn",
			"NX",
			"NextJS",
			"ThreeJS",
			"Recoil",
			"Firebase",
			"Github",
			"VSCode",
			"Flutter",
			"NPM",
			"Webpack",
			"Nginx",
			"Vite",
			"ReactQuery",
			"Redux",
			"BitBucket",
			"Tailwind",
			"EC2",
		];

		const options: TagCloudOptions = {
			radius: isMobile ? 200 : 300,
			maxSpeed: "fast",
			initSpeed: "normal",
			keep: true,
		};

		TagCloud(container, texts, options);
	}, [isMobile]);

	useEffect(() => {
		let items = document.getElementsByClassName("tagcloud--item");
		if (items.length > 0) {
			for (let i = 0; i < items.length; i++) {
				if (!items[i].innerHTML.includes("img")) {
					items[i].innerHTML = `<img src='/images/stackIcon/${
						items[i].innerHTML
					}.png' style="width: ${isMobile ? "40px" : "50px"};"/>`;
				}
			}
		}
	}, [tagCloudRef.current, isMobile]);
	return (
		<Grid
			container
			justifyContent={"center"}
			width={"100%"}
			sx={{ overflow: "hidden" }}
		>
			<Box
				id="tagcloud"
				ref={tagCloudRef}
				sx={{
					fontSize: isMobile ? 28 : 32,
					zIndex: -1,
				}}
			/>
		</Grid>
	);
};

export default TagSphere;
