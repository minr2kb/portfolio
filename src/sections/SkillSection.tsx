import { FontWeightValues } from "@interface/enums";
import { SkillItemType } from "@interface/types";
import {
  Collapse,
  Divider,
  Grid,
  LinearProgress,
  Typography,
  Zoom,
} from "@mui/material";
import CodeEditor from "@uiw/react-textarea-code-editor";
import React, { useRef, useState } from "react";

const devSkills: SkillItemType[] = [
	{
		name: "ReactJS",
		rating: 5,
		image: "/images/stackIcon/ReactJS.png",
		description:
			"현재까지의 커리어의 메인 기술 스택입니다. 라이프사이클을 잘 이해하고 있으며, 이와 적절한 memoization을 활용하여 렌더링 최적화를 할 수 있습니다. 좋은 유지보수성을 가지는 컴포넌트 설계를 위해 깊게 고민합니다.",
	},
	{
		name: "ReactNative",
		rating: 3,
		image: "/images/stackIcon/ReactNative.png",
		description:
			"메인으로 다루는 기술은 아니지만, 리액트 지식을 기반으로 개발 가능합니다. 사내에서 진행한 Kotlin, Swift 스터디를 통해 네이티브 모듈 커스터마이징에 대한 리서치를 하고 있습니다.",
	},
	{
		name: "NextJS",
		rating: 4,
		image: "/images/stackIcon/NextJS.png",
		description:
			"리액트와 더불어 메인으로 다루는 기술스택입니다. SSR과 더불어 SSG, ISR 등의 특성을 알고 적절히 사용 가능합니다. 또한 dynamic import를 통한 성능개선과 SSR상황에서의 다양한 트러블 슈팅 경험이 있습니다.",
	},
	{
		name: "TypeScript",
		rating: 4,
		image: "/images/stackIcon/TypeScript.png",
		description:
			"처음에는 울며 겨자먹기로 사용했지만, 이제는 없으면 안되는 존재가 되었습니다. 프롭과 api에 적절한 타이핑이 가능하며, 타입 건전성을 위해 꼼꼼히 사용합니다.",
	},
	{
		name: "JavaScript",
		rating: 5,
		image: "/images/stackIcon/JavaScript.png",
		description:
			"한국어, 영어 다음으로 자신있는 언어입니다. 비동기 핸들링에 능숙하며, esm과 cjs의 차이를 알고 사용 가능합니다.",
	},
	{
		name: "React-Query",
		rating: 4,
		image: "/images/stackIcon/ReactQuery.png",
		description:
			"커스텀 훅을 활용하여 컨벤션을 지정하여 사용했습니다. API호출 최적화에 대한 고민을 바탕으로 사용했습니다.",
	},
	{
		name: "Material UI",
		rating: 5,
		image: "/images/stackIcon/MUI.png",
		description:
			"빠른 개발을 위해 도입했지만 익숙해지기에 꽤 많은 시간이 들었습니다. 오래 사용한 만큼, 내부 스타일과 인터페이스를 오버라이드 하는 수준의 커스터마이징이 가능합니다. 이를 통해 UI시스템에 대한 이해도를 키웠습니다.",
	},
	{
		name: "Tailwind CSS",
		rating: 4,
		image: "/images/stackIcon/Tailwind.png",
		description:
			"테일윈드에 디자인 토큰을 적용시켜 커스터마이징하여 사내 디자인시스템으로 사용했습니다. config와 플러그인을 통한 적절한 커스터마이징이 가능합니다.",
	},
	{
		name: "ThreeJS",
		rating: 3,
		image: "/images/stackIcon/ThreeJS.png",
		description:
			"R3F를 활용하여 리액트 3D 프로젝트를 구성해보았습니다. 연산을 통해 다각형 오브젝트의 충돌, 스택, 그리드 시스템 알고리즘을 구현했습니다.",
	},
	{
		name: "Yarn Berry",
		rating: 3,
		image: "/images/stackIcon/Yarn.png",
		description:
			"'내일의 창업' 모노레포 구성을 위해 처음 도입해본 툴입니다. 웹, 라이브러리 워크스페이스를 분리해 사용했으며, 추후 Nextjs 배포시 pnp방식의 한계로 nodeLinker를 수정하여 사용했습니다.",
	},
	{
		name: "Nx",
		rating: 3,
		image: "/images/stackIcon/NX.png",
		description:
			"'태그히어'서비스의 프론트와 node로 구성된 백엔드를 묶어 모노레포 환경을 구성했습니다. 각 프로젝트에 개별 배포 파이프라인을 붙여 사용했습니다.",
	},
	{
		name: "Recoil",
		rating: 4,
		image: "/images/stackIcon/Recoil.png",
		description:
			"전역상태관리를 위해 애용한 라이브러리입니다. atomFamily, selectorFamily 등을 활용한 적절한 상태관리를 할 수 있습니다.",
	},
	{
		name: "Jotai",
		rating: 5,
		image: "/images/stackIcon/Jotai.png",
		description:
			"Recoil의 사용 경험을 바탕으로 더 간소화된 사용을 위해 도입했습니다.",
	},
	{
		name: "Redux",
		rating: 3,
		image: "/images/stackIcon/Redux.png",
		description:
			"redux-thunk를 통해 비동기 작업을 컨트롤했으며, 추후 React-Query로의 마이그레이션 작업을 하기도 했습니다.",
	},
	{
		name: "Github Action",
		rating: 3,
		image: "/images/stackIcon/Github.png",
		description:
			"'내일의창업', '태그히어' 서비스의 배포 파이프라인을 구축하기 위해 사용했습니다.",
	},
	{
		name: "Vite",
		rating: 3,
		image: "/images/stackIcon/Vite.png",
		description: "esbuild의 빠른 번들링의 이점을 활용하기 위해",
	},
	{
		name: "Webpack",
		rating: 3,
		image: "/images/stackIcon/Webpack.png",
	},
	{
		name: "EC2",
		rating: 2,
		image: "/images/stackIcon/EC2.png",
	},
];

// const toolSkills = [
// 	{
// 		name: "Jira",
// 		rating: 4,
// 	},
// 	{ name: "Bitbucket", rating: 3 },
// 	{ name: "Github", rating: 4 },
// 	{ name: "Confluence", rating: 3 },
// 	{
// 		name: "Notion",
// 		rating: 4,
// 	},
// 	{
// 		name: "Slack",
// 		rating: 4.5,
// 	},
// 	{
// 		name: "Figma",
// 		rating: 3,
// 	},
// ];

const SkillItem = ({
	skill,
	onClick,
	isSelected,
	open,
}: {
	skill: SkillItemType;
	onClick: React.MouseEventHandler<HTMLDivElement>;
	isSelected: boolean;
	open: boolean;
}) => {
	const itemRef = useRef<HTMLDivElement>(null);

	return (
		<Grid
			ref={itemRef}
			item
			sm={2}
			xs={3}
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				aspectRatio: "1 / 1",
				transition: `all ease-in-out 0.1s, transform ease-in-out ${
					isSelected ? "0.3s 0.1s" : "0.2s"
				}`,
				cursor: "pointer",
				filter: isSelected ? "grayscale(0)" : "grayscale(0.7)",
				transform: isSelected
					? `translate(-${itemRef.current?.offsetLeft ?? 0}px, -${
							itemRef.current?.offsetTop ?? 0
					  }px);`
					: "none",
				opacity: isSelected ? 1 : 0.5,
				":hover": {
					filter: "grayscale(0)",
					opacity: 1,
				},
			}}
			onClick={onClick}
		>
			<Zoom in={isSelected || !open}>
				<img src={skill.image} alt={skill.name} width={60} />
			</Zoom>

			<Grid sx={{ position: "absolute", left: "100%", pl: 2 }}>
				<Collapse in={isSelected && open} orientation='horizontal'>
					<Typography sx={{ fontWeight: FontWeightValues.BOLD }}>
						{skill.name}
					</Typography>
					<Grid container width={"100%"} spacing={0.5} flexWrap={"nowrap"}>
						{[...Array(5)].map((_, i) => (
							<Grid item width={"40px"}>
								<LinearProgress
									variant='determinate'
									value={
										skill.rating > i ? (skill.rating < i + 1 ? 50 : 100) : 0
									}
									color={skill.rating > 3 ? "primary" : "warning"}
									sx={{ mt: 1, height: 10, borderRadius: 0 }}
								/>
							</Grid>
						))}
					</Grid>
				</Collapse>
			</Grid>
		</Grid>
	);
};

const SkillList = ({ skills }: { skills: SkillItemType[] }) => {
	const [selectedSkill, setSelectedSkill] = useState<SkillItemType>();
	const [open, setOpen] = useState(false);

	const handleSelectSkill = (skill: SkillItemType) => {
		setSelectedSkill(skill);
		setTimeout(() => setOpen(true), 200);
	};

	const handleCloseSkill = () => {
		setOpen(false);
		setTimeout(() => setSelectedSkill(undefined), 200);
	};

	return (
		<Grid position={"relative"}>
			<Grid
				container
				spacing={2}
				sx={{ mt: 2, width: "100%", position: "relative" }}
			>
				{skills.map(skill => {
					const isSelected = selectedSkill?.name === skill.name;
					return (
						<SkillItem
							key={skill.name}
							skill={skill}
							isSelected={isSelected}
							open={open}
							onClick={() =>
								open ? handleCloseSkill() : handleSelectSkill(skill)
							}
						/>
					);
				})}
			</Grid>
			<Collapse
				in={open}
				sx={{ position: "absolute", top: 120, width: "100%" }}
			>
				<CodeEditor
					value={`{\n  name: "${selectedSkill?.name}",\n  level: ${selectedSkill?.rating}, // out of 5\n  description: "${selectedSkill?.description}"\n}`}
					language={"json"}
					disabled
					padding={15}
					style={{
						fontSize: 12,
						borderRadius: 10,
						fontFamily:
							"ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
					}}
				/>
			</Collapse>
		</Grid>
	);
};

const SkillSection = () => {
	return (
		<Grid>
			<Typography variant='h2'>Skills</Typography>
			<Divider />
			<Grid container>
				<Grid mb={5} item>
					<SkillList skills={devSkills} />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default SkillSection;
