export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  techStack: string[];
  highlights: { label: string; detail: string }[];
  links: { label: string; url: string }[];
  status: "live" | "wip";
  color: string;
};

export const projects: Project[] = [
  {
    slug: "roami",
    title: "Roami",
    subtitle: "로컬 체험 예약 플랫폼",
    description:
      "GlobalNomad 부트캠프 팀 프로젝트를 리브랜딩·리디자인한 개인 포크. 판매자와 체험자 역할을 동시에 지원하는 예약 플랫폼.",
    longDescription:
      "BFF 레이어를 통한 인증 아키텍처, 커스텀 캘린더, Kakao OAuth를 직접 구현했습니다. httpOnly 쿠키 기반 토큰 관리와 자동 갱신 로직으로 보안과 UX를 동시에 설계했습니다.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "Zustand 5",
      "date-fns",
    ],
    highlights: [
      {
        label: "BFF 인증",
        detail:
          "Route Handler를 프록시로 활용해 토큰과 외부 API 엔드포인트를 클라이언트 번들에서 격리",
      },
      {
        label: "커스텀 캘린더",
        detail:
          "date-fns만으로 직접 구현. 예약 현황 배지와 팝오버를 날짜 셀에 통합",
      },
      {
        label: "Kakao OAuth",
        detail: "state 파라미터로 로그인/회원가입 플로우 분기 처리",
      },
    ],
    links: [
      { label: "Live", url: "https://roami-eight.vercel.app/" },
      { label: "GitHub", url: "https://github.com/Chodongdong/Roami" },
    ],
    status: "live",
    color: "#6366f1",
  },
  {
    slug: "the-julge",
    title: "The Julge",
    subtitle: "알바 공고 매칭 플랫폼",
    description:
      "사장님과 알바생을 연결하는 공고 매칭 서비스. 역할 기반 조건부 렌더링과 Server Component 최적화에 집중했습니다.",
    longDescription:
      "BFF 레이어로 보안 아키텍처를 설계하고, 전체 컴포넌트 75개 중 24개만 클라이언트 컴포넌트로 유지해 SSR 비율을 높였습니다.",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    highlights: [
      {
        label: "Server Component",
        detail:
          "전체 75개 컴포넌트 중 24개만 use client — SSR 최대화로 초기 로드 성능 개선",
      },
      {
        label: "역할 기반 렌더링",
        detail: "사장님/알바생 역할에 따른 조건부 UI 분기를 컴포넌트 레벨에서 처리",
      },
      {
        label: "CI/CD",
        detail: "PR 단위 타입·린트 오류 머지 전 사전 차단",
      },
    ],
    links: [
      { label: "Live", url: "https://the-julge-ekxw.vercel.app/" },
      { label: "GitHub", url: "https://github.com/Chodongdong/the-julge" },
    ],
    status: "live",
    color: "#10b981",
  },
  {
    slug: "dev-mbti",
    title: "Dev MBTI",
    subtitle: "GitHub 기반 개발자 유형 분석기",
    description:
      "GitHub 유저명을 입력하면 커밋 패턴·언어·활동 데이터를 Gemini AI로 분석해 개발자 유형을 진단합니다.",
    longDescription:
      "Gemini API를 활용한 AI 분석과 Framer Motion 기반의 결과 애니메이션을 구현했습니다. Storybook으로 컴포넌트를 문서화하고 Vitest + Playwright로 테스트를 작성했습니다.",
    techStack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Gemini API",
      "Framer Motion",
      "Storybook",
      "Vitest",
    ],
    highlights: [
      {
        label: "AI 분석",
        detail:
          "GitHub API 데이터를 Gemini에 전달해 커밋 패턴·기여 스타일 기반 유형 진단",
      },
      {
        label: "인터랙션",
        detail: "Framer Motion으로 결과 카드 등장·전환 애니메이션 설계",
      },
      {
        label: "테스트",
        detail: "Storybook + Vitest + Playwright로 컴포넌트 단위 테스트 구성",
      },
    ],
    links: [
      { label: "Live", url: "https://dev-mbti-v3x9.vercel.app/" },
      { label: "GitHub", url: "https://github.com/Chodongdong/dev-mbti" },
    ],
    status: "live",
    color: "#f59e0b",
  },
];
