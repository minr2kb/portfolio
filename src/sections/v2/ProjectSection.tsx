import RatioBox from '@components/RatioBox';
import { FontWeightValues } from '@interface/enums';
import { Link } from '@mui/icons-material';
import {
  Chip,
  Collapse,
  Divider,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import { mobileMaxWidthMediaQuery } from '~/theme';

const projects: ProjectBlockProps[] = [
  {
    title: '커리어리',
    description: `개발자 채용-커뮤니티 플랫폼, "커리어리"의 웹과 앱의 프론트엔드를 담당했습니다.`,
    details: [
      `목적 조직 단위로 이루어지는 스프린트에 참여하여 솔루션 회의 참석 및 유저 실험을 구현했습니다.`,
      `서브모듈로 구성되어있는 Tailwind 기반 디자인 시스템 제작에 참여하여 tokenization 작업 등을 하였습니다.`,
      `MSA와 게이트웨이로 구성된 백엔드 환경 작업을 진행했습니다.`,
      `앱 성능향상을 위해 lazy load와 virtualizer, 컴포넌트 라이프 사이클 개선 등을 진행했고, 안드로이드 플랫폼에서 블로킹 타임을 최대 4초 가량 개선시켰습니다.`,
      `obj-c, java기반의 네이티브 모듈 관리를 위해 FE챕터 내부 Swift, Kotlin 스터디를 진행하여 점진적으로 문서화 및 대체작업을 진행했습니다.`,
      `아틀라시안 프로덕트를 비롯한 다양한 Saas를 통해 태스크 관리, 디자인/pm과의 협업을 진행했습니다.`,
    ],
    image: '/images/careerly.png',
    link: 'https://careerly.co.kr',
    skills: [
      'ReactJS',
      'NextJS',
      'ReactNative',
      'TypeScript',
      'TailwindCSS',
      'Recoil',
      'React-Query',
      'Redux',
    ],
    cateTag: 'PUBLY',
  },
  {
    title: '내일의창업',
    description: `개인 자영업자 원스톱 창업 플랫폼, "내일의 창업" 개발의 프론트엔드를 담당하였습니다.`,
    details: [
      '모의창업, 스토리, 뉴스피드 등의 페이지 개발을 주도하였고, 인증 프로세스 및 주요 UI 라이브러리 제작을 맡았습니다.',
      '전반적인 프로젝트 환경 구축 및 셋팅에 참여하였으며, 패키지 환경 통합을 위해 yarn3 모노레포 환경을 구축하여 작업하였습니다.',
      'NextJS의 SSR환경을 살리기 위해 EC2와 Vercel에 배포 테스트를 진행하기도 했으며, Github Action을 이용하여 CI/CD 파이프라인을 구축하였습니다.',
      '모듈 디펜던시를 모니터링하며 컴포넌트 아키텍쳐로 아토믹 디자인을 채택하여 활용하였고, 모듈의 갯수를 200여개에서 87개로 감소시켜 재사용성을 증가시킬 수 있었습니다.',
      'MUI의 MediaQuery 훅과 커스텀 breakpoint를 활용하여 반응형 웹을 구현했습니다.',
    ],
    image: '/images/tmr-founders.png',
    link: 'https://tmr-founders.com/virtual-store',
    skills: [
      'ReactJS',
      'TypeScript',
      'Vite',
      'MUI',
      'Recoil',
      'NextJS',
      'Yarn Berry',
      'EC2',
      'Vercel',
      'Github Action',
    ],
    cateTag: 'TMR Founders',
  },
  {
    title: '태그히어',
    description: `NFC를 활용한 스마트 테이블 오더 서비스, "태그히어" 개발의 프론트엔드를 담당하였습니다.`,
    details: [
      '메뉴, 주문하기, 수정하기, 어드민 대시보드 등의 전반적 페이지 및 기능 개발을 주도하였습니다.',
      '브라우져 지원범위를 정하여 일부 코드를 polyfill로 구현하였으며, 테이블과 포스기간의 실시간 통신을 위하여 소켓 통신을 사용했습니다.',
      'NFC보안을 위하여 위치 검증 및 상태 관리를 통한 접근 제어 방식을 고안하였습니다.',
      'JWT를 활용한 인증과 권한 관리를 구현하였으며, PG연동 결제 시스템을 구축했습니다.',
      'NX 모노레포로 함께 구성된 Node 기반 백엔드와 TypeScript를 활용하여 인터페이스를 공유하고 타이핑을 진행했습니다.',
      '성능 향상을 위해 내부 로직 개선, 코드 스플리팅과 이미지 로더 개선 작업 등을 진행하였으며, TBT를 400ms 대에서 40ms대까지 감소시켰습니다.',
    ],
    image: '/images/taghere.png',
    link: 'https://tag-here.com',
    skills: ['ReactJS', 'TypeScript', 'MUI', 'Jotai', 'NX', 'Jira', 'SocketIO'],
    cateTag: 'TMR Founders',
  },
  {
    title: '트레이드포스',
    description: `수출입 전문가 매칭 플랫폼, "트레이드포스" 웹사이트 외주 개발의 프론트엔드를 담당하였습니다.`,
    details: [
      '서비스 의뢰 페이지부터 회원가입, 전문가 인증, 매칭 및 어드민 페이지 등의 서비스 주요 기능 개발을 전담하였습니다.',
      '소수의 인원과 초기 프로젝트 구축부터 단기간의 빠른 개발을 위한 효율적인 스택 디자인을 구상하고 백엔드와의 긴밀한 협업을 통해 작업했습니다.',
      '디자이너와 Figma로 협력하여 MUI를 활용한 타이포 위계 및 컴포넌트 디자인 시스템을 구축했습니다.',
    ],
    image: '/images/tradeforce.png',
    link: 'https://tradeforce.co.kr',
    skills: ['ReactJS', 'TypeScript', 'Recoil', 'MUI'],
    cateTag: '외주',
  },
  {
    title: '3D 모의창업',
    description: `ThreeJS를 활용하여 3D 셀프 인테리어 시안 제작 서비스를 개발하였습니다.`,
    details: [
      '⚠️ 현재 기존 서비스 integration 기획으로 단독 모듈로 시범 배포 되어있습니다.',
      'ThreeJS를 활용하였고, 서비스가 리액트 환경으로 제작되어 포팅된 라이브러리들을 활용했습니다.',
      '그리드 시스템을 직접 구현하여 인터랙션 환경을 구축하였고, 사용자가 쉽고 빠르게 시안을 제작할 수 있도록 최소화된 UI로 제작하였습니다.',
      'Polygon으로 구성된 평면에 대한 충돌시스템을 구현했으며, Suspense를 사용한 렌더링 로드 화면과 유저 액션 history를 구현하여 UX를 향상시켰습니다.',
    ],
    image: '/images/3d-virtual-store.png',
    link: 'https://virtual-store-3d.web.app/',
    skills: ['ReactJS', 'TypeScript', 'ThreeJS', 'Recoil', 'MUI'],
    cateTag: 'TMR Founders',
  },
  {
    title: '찬양팀 라이브',
    description: `악기 연주자가 연주 도중 최소한의 인터랙션으로 소통할 수 있도록 도와주는 대시보드 서비스를 구상하고 개발했습니다.`,
    details: [
      '직접 Figma를 활용하여 UI를 기획 및 디자인했습니다.',
      '미리 저장해둔 단축어를 활용하여 소통하는 방식으로, 접근성에 중점을 둔 UI로 제작하였고, 최소한의 인증과 범용성을 위해 구글 OAuth를 활용했습니다.',
      'Firebase Realtime DB를 활용하여 실시간 요청 데이터를 관리하였습니다.',
    ],
    image: '/images/worship-team-live.png',
    skills: ['ReactJS', 'TypeScript', 'MUI', 'Firebase'],
    link: 'https://worship-team-live.web.app',
    cateTag: '개인',
  },
  {
    title: 'Playground',
    description: `MacOS의 데스크탑 화면을 모티브로 하여 제작한 디자인 프로젝트입니다.`,
    details: [
      'Webpack을 활용하여 개발환경의 컴포넌트 디렉토리 구조가 그대로 브라우져에 렌더링 되도록 환경을 구축하였습니다.',
      '아키텍쳐에 대한 고민을 통해 컴포넌트를 재사용성을 높이고 유지보수성을 높이기 위해 노력하였습니다.',
      '각 앱들은 소형 사이드 프로젝트들로 구성되어있습니다.',
    ],
    image: '/images/playground.png',
    skills: ['ReactJS', 'TypeScript', 'Webpack', 'MUI', 'Firebase'],
    link: 'https://playground-adade.web.app',
    cateTag: '개인',
  },
  {
    title: 'ZCL 어드민 대시보드',
    description: `컴퓨터 비젼을 기반으로 한 자동 물류 관리 시스템의 관리자 대시보드를 풀스택으로 제작했습니다.`,
    details: [
      'ReactJS와 CoreUI를 활용하여 프론트를 기획 및 개발하였고, Flask와 MySQL을 활용하여 백엔드를 구축하였습니다.',
      '실시간으로 DB에 들어오는 물류 현황과 수요 예측 모델 데이터를 차트를 활용하여 시각화하는 기능에 중점을 두었습니다.',
    ],
    image: '/images/zcl-admin-dashboard.png',
    skills: ['ReactJS', 'JavaScript', 'Redux', 'CoreUI', 'Flask', 'MySQL', 'Heroku'],
    cateTag: 'ZeroClassLab',
  },
  {
    title: 'Plog-In',
    description: `Plog-In은 플로깅을 통해 환경을 보호하고, 기록을 관리하는 플랫폼입니다.`,
    details: [
      '72시간 동안 진행된 해커톤에서 개발한 프로젝트입니다. 빠른 개발을 위해 JavaScript로 프로젝트를 구성하였으며 구글맵 API를 활용하여 위치를 트래킹 할 수 있도록 구현하였습니다.',
      '플로깅을 시작하면 실시간으로 시간과 위치를 기록하고, 자바스크립트로 구현한 거리 계산 알고리즘을 기반으로 거리와 경로를 기록합니다.',
      'Cleanest UI/UX분야에서 수상을 하였습니다.',
    ],
    image: '/images/plog-in.png',
    skills: ['ReactJS', 'JavaScript', 'FastAPI', 'GCP', 'MongoDB'],
    link: 'https://github.com/minr2kb/2022-sbu-hackathon',
    cateTag: 'Hackathon',
  },

  {
    title: 'E4E - Email for Earth',
    description: `삭제되지 않은 이메일들이 서버에 쌓이며 큰 전력을 소비하고 있다는 환경적 이슈에 착안하여 기획한 웹 캠페인으로, 유저가 쉽게 이메일을 삭제할 수 있도록 도와주는 서비스입니다.`,
    details: [
      '24시간 동안 진행된 해커톤에서 개발한 프로젝트입니다.',
      'Gmail API를 활용하여 사용자의 이메일에 접근했으며, 자체적으로 제공한 UI를 통해 유저가 부여한 조건에 맞추어 이메일을 삭제합니다.',
      '캠페인적인 요소를 위해 감소된 CO2 배출량 계산등의 UI가 추가되었습니다.',
      '최우수상을 수상하였습니다.',
    ],
    image: '/images/e4e.png',
    skills: ['ReactJS', 'JavaScript', 'GitHub Pages', 'FastAPI'],
    link: 'https://github.com/minr2kb/22S-hackathon-team5',
    cateTag: 'Hackathon',
  },
  {
    title: '버키',
    description: `무인 쇼핑 결제 플랫폼 앱, "버키" 개발에 참여했습니다.`,
    details: [
      'ReactNative를 활용하여 크로스 플랫폼 환경에서 개발하였으며, Figma를 활용하여 UI를 직접 리팩토링하여 상품 구매내역 관리페이지를 크게 개선할 수 있었습니다.',
    ],
    image: '/images/buckey.png',
    skills: ['ReactNative', 'JavaScript', 'Figma'],
    cateTag: 'ZeroClassLab',
  },
  {
    title: '종강 카운터',
    description: `학기 중 사이드 프로젝트로 제작한 종강까지 남은 일수를 알려주는 웹 앱입니다.`,
    details: [
      '날짜를 직접 지정할 수 있으며, 실시간 채팅과 좋아요 기능을 통해 익명의 대학생들이 소통할 수 있는 오픈된 공간을 제공했습니다.',
      'ReactJS와 Firebase를 활용하여 개발하였으며, Firebase의 Realtime DB를 활용하여 실시간 채팅 데이터를 관리하였습니다.',
    ],
    image: '/images/jongang-counter.png',
    skills: ['ReactJS', 'JavaScript', 'Firebase'],
    link: 'https://jongang-counter.web.app',
    cateTag: '개인',
  },
  {
    title: 'RC 이벤트 - Mental Health',
    description: `대학교 교내 이벤트를 위하여 제작한 고민 게시판 프로젝트입니다.`,
    details: [
      '학교 구글 계정 로그인을 통하여 개인의 고민을 게시글로 업로드, 수정 및 댓글을 달 수 있도록 구성되어있습니다.',
      'ReactJS와 Firebase를 활용하여 개발하였으며, Firebase의 Firestore를 활용하여 게시글 데이터를 관리하였습니다.',
    ],
    image: '/images/mental-health.png',
    skills: ['ReactJS', 'JavaScript', 'Firebase'],
    link: 'https://mental-health-rc2021f.web.app',
    cateTag: '개인',
  },
  {
    title: 'RC 이벤트 - Entertainment Recommendation',
    description: `대학교 교내 이벤트를 위하여 제작한 폼 프로젝트입니다. 음악, 영화 등의 엔터테인먼트를 학생들로부터 추천받기 위해 제작되었습니다.`,
    details: [
      '받아야하는 정보 특성상 구글폼 활용시 데이터 입력 및 취합이 번거로워 질 것을 고려하여 자체적으로 폼을 제작했습니다.',
      'Youtube API를 활용하여 폼 추가시에 자동으로 영상을 쿼리하여 링크를 연결시키도록 구현했습니다.',
      '추천 결과를 장르별, 사람별 구분하여 볼 수 있도록 뷰를 구성하였으며, 관리자를 위한 랜덤 추첨 기능도 구현하였습니다.',
    ],
    image: '/images/entertainment-recommend.png',
    skills: ['ReactJS', 'JavaScript', 'Firebase'],
    link: 'https://entertainment-recommend-form.web.app',
    cateTag: '개인',
  },
  {
    title: '청남교회 앱',
    description: `출석하고 있는 교회를 위한 공지 앱을 제작하였습니다.`,
    details: [
      '교인 인증과 관리자 등의 권한을 분리하여 공지 게시판 및 대시보드를 제공하도록 구현하였습니다.',
      '주 사용층의 연령대가 높을 것을 고려하여 직관성에 중점을 두어 기능 및 UI를 기획했습니다.',
      'Flutter와 Dart를 활용하여 개발하였으며, Firebase의 FCM을 통해 푸시알림을 구현하였습니다.',
    ],
    image: '/images/cheongnam.png',
    skills: ['Flutter', 'Dart', 'Firebase', 'FCM'],
    cateTag: '개인',
  },
];

export interface ProjectBlockProps {
  title: string;
  description: string;
  details: string[];
  image: string;
  link?: string;
  skills: string[];
  cateTag?: string;
  isMobile?: boolean;
}

function ProjectBlock({
  title,
  description,
  details,
  image,
  link = '',
  skills,
  cateTag = '',
  isMobile = false,
}: ProjectBlockProps) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Grid
      item
      md={expanded ? 12 : 6}
      sx={{ position: 'relative', transition: 'all 0.2s ease-in-out' }}
    >
      <RatioBox
        ratio={12 / 5}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <Grid
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            cursor: 'pointer',

            '&:hover img': {
              transform: 'scale(1.005)',
              boxShadow: '0 0 10px 4px rgba(0,0,0,0.1)',
            },
          }}
          onClick={() => {
            setExpanded(prev => !prev);
          }}
        >
          <img
            src={image}
            alt="project"
            loading="lazy"
            style={{
              transition: 'all 0.2s ease-in-out',
              width: '100%',
              height: '100%',
              borderRadius: '10px',
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
        </Grid>
      </RatioBox>
      <Collapse in={expanded}>
        <Grid mt={2}>
          <Typography variant="h3">
            {title}

            {link !== '' && (
              <Tooltip arrow title={link}>
                <Grid
                  sx={{
                    display: 'inline-flex',
                    ml: 0.5,
                  }}
                >
                  <IconButton size="small" href={link} target="_blank">
                    <Link htmlColor="#999" fontSize={isMobile ? 'small' : 'medium'} />
                  </IconButton>
                </Grid>
              </Tooltip>
            )}
          </Typography>
        </Grid>
        <Grid container>
          {cateTag !== '' && (
            <Chip
              variant="outlined"
              label={cateTag}
              clickable
              size="small"
              color="secondary"
              sx={{ mr: 1, mt: 1 }}
            />
          )}
          {skills.map(skill => {
            return (
              <Chip
                key={`${title}-${skill}`}
                variant="outlined"
                label={skill}
                clickable
                size="small"
                color="primary"
                sx={{ mr: 1, mt: 1 }}
              />
            );
          })}
        </Grid>
        <Typography
          variant="body2"
          sx={{
            my: 2,
            fontWeight: FontWeightValues.SEMI_BOLD,
          }}
          color="text.secondary"
        >
          {description}
        </Typography>
        {details.map((detail, idx) => (
          <Grid container key={`${title}-detail-${idx}`}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mx: 1, fontWeight: FontWeightValues.BLACK }}
            >
              ·
            </Typography>
            <Typography variant="body2" sx={{ flex: 1, my: 0.3 }} color="text.secondary">
              {detail}
            </Typography>
          </Grid>
        ))}
      </Collapse>
    </Grid>
  );
}

function ProjectSection() {
  const isMobile = useMediaQuery(mobileMaxWidthMediaQuery);

  return (
    <Grid>
      <Typography variant="h2">Projects</Typography>
      <Divider />
      {/* TODO: 필터 / 검색기능 */}
      <Grid container spacing={2} mt={2}>
        {projects.map(project => (
          <ProjectBlock
            key={project.title}
            title={project.title}
            description={project.description}
            details={project.details}
            image={project.image}
            skills={project.skills}
            link={project.link}
            cateTag={project.cateTag}
            isMobile={isMobile}
          />
        ))}
      </Grid>
    </Grid>
  );
}

export default ProjectSection;
