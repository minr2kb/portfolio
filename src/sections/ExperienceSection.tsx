import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import ExperienceItem, {
	ExperienceItemType,
} from "../components/ExperienceItem";

const experiences: ExperienceItemType[] = [
	{
		title: "제로클래스랩",
		subtitle: "ZeroClassLab, 2021.07 - 2022.07",
		logoSrc: "/images/logo/zeroclasslab.png",
		descs: [
			"Computer vision 기반 물류 관리 시스템 관리자 대시보드 풀스텍 제작",
			'무인 계산 솔루션 "버키" 앱 개발 및 유지보수',
		],
	},
	{
		title: "티엠알파운더스",
		subtitle: "TMR Founders, 2022.07 - 2023.07",
		logoSrc: "/images/logo/tmrfounders.png",
		descs: [
			"원스톱 창업 플랫폼 “내일의창업” 웹 개발 및 런칭",
			"NFC 기반 스마트 오더 솔루션 “태그히어” 서비스 제작",
			"창업가 데이터 수집을 위한 폼 사이트 제작",
			"아이템 태거 등 주요 컴포넌트 패키지 제작",
		],
	},
	{
		title: "퍼블리",
		subtitle: "PUBLY, 2023.07 - 현재",
		logoSrc: "/images/logo/publy.png",
		descs: [
			'개발자 커리어 플랫폼 "커리어리" 서비스 웹 및 앱 프론트 개발',
			"지표 단위 조직(Squad)으로 스프린트 업무 경험",
			"엔지니어 챕터 내의 정기적 스터디와 코드리뷰 경험",
			"디자인팀과의 협업을 통한 사내 디자인 시스템 작업 참여",
			"아틀라시안 제품 등의 Saas 활용 협업",
		],
	},
];

const ExperienceSection = ({ open = true }: { open?: boolean }) => {
	return (
		<Grid>
			<Typography variant='h2'>Experiences</Typography>
			<Divider sx={{ mb: 2 }} />
			{experiences.map((experience, idx) => (
				<ExperienceItem key={`experience-${idx}`} open={open} {...experience} />
			))}
		</Grid>
	);
};

export default ExperienceSection;
