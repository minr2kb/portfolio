import { Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Trail from "../components/Trail";
import { SectionProps } from "../interface/interfaces";
import TextWithDot from "../components/TextWithDot";

const ExperienceSection: React.FC<SectionProps> = ({ open = true }) => {
	return (
		<Grid>
			<Typography variant="h2">Experiences</Typography>
			<Divider />
			<Grid
				sx={{
					mt: 2,
				}}
			>
				<Grid
					container
					sx={{
						alignItems: "center",
					}}
				>
					<img
						src="/images/logo/zeroclasslab.png"
						alt="SBU"
						style={{
							transition: "all 0.3s ease-in-out",
							width: open ? "30px" : 0,

							marginRight: open ? "8px" : 0,
						}}
					/>
					<Typography
						variant="h3"
						sx={{
							flex: 1,
						}}
					>
						제로클래스랩
					</Typography>
				</Grid>
				<Typography color={"text.secondary"} variant="body1">
					ZeroClassLab, 2021.07 - 2022.07
				</Typography>
				<Grid mt={2}>
					<Trail open={open} spacing={16}>
						<TextWithDot variant="body1">
							Computer vision 기반 물류 관리 시스템 관리자
							대시보드 풀스텍 제작
						</TextWithDot>
						<TextWithDot variant="body1">
							무인 계산 솔루션 "버키" 앱 개발 및 유지보수
						</TextWithDot>
					</Trail>
				</Grid>
			</Grid>
			<Grid
				sx={{
					mt: 5,
				}}
			>
				<Grid
					container
					sx={{
						alignItems: "center",
					}}
				>
					<img
						src="/images/logo/tmrfounders.png"
						alt="SBU"
						style={{
							transition: "all 0.3s ease-in-out",
							width: open ? "30px" : 0,

							marginRight: open ? "8px" : 0,
						}}
					/>
					<Typography
						variant="h3"
						sx={{
							flex: 1,
						}}
					>
						티엠알파운더스
					</Typography>
				</Grid>

				<Typography color={"text.secondary"} variant="body1">
					TMR Founders, 2022.07 - 현재
				</Typography>
				<Grid mt={2}>
					<Trail open={open} spacing={16}>
						<TextWithDot variant="body1">
							원스톱 창업 플랫폼 “내일의창업” 웹 개발 및 런칭
						</TextWithDot>
						<TextWithDot variant="body1">
							NFC 기반 스마트 오더 솔루션 “태그히어” 서비스 제작
						</TextWithDot>
						<TextWithDot variant="body1">
							창업가 데이터 수집을 위한 폼 사이트 제작
						</TextWithDot>
						<TextWithDot variant="body1">
							아이템 태거 등 주요 컴포넌트 패키지 제작
						</TextWithDot>
					</Trail>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default ExperienceSection;
