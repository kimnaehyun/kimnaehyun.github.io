export const profile = {
  name: "김내현",
  role: "Frontend Developer",
  email: "rlasogus1@gmail.com",
  github: "https://github.com/kimnaehyun",

  intro:
    "React, TypeScript, React Native 기반 프로젝트에서 실시간 협업, 커뮤니티, 모바일 서비스의 데이터 흐름과 UI 안정성을 다뤄왔습니다.",
  focus: ["React", "TypeScript"],
};

export const experiences = [
  {
    org: "MHGKOREA",
    type: "정규직",
    role: "Software Engineer",
    place: "서울",
    period: "2023.10 - 2024.06",
    description:
      "PHP와 MySQL 기반 웹 페이지를 개발하고, Java Android Studio WebView 앱 형태로 운영한 초기 실무 경험입니다.",
    achievements: [
      "웹 페이지 개발부터 Android WebView 앱 운영까지 서비스 흐름 전반 경험",
      "PHP, MySQL, Java Android Studio를 사용해 작은 규모의 운영 기능 구현",
      "초기 실무 경험을 통해 인증 정보 관리, DB 접근 구조, 유지보수 가능한 코드 구조의 중요성을 체감",
    ],
    stack: ["PHP", "MySQL", "Java", "Android Studio", "WebView"],
  },
];

export const projects = [
  {
    title: "ENCO",
    summary:
      "모임원 투표 및 위치 기반 인증을 통해 공동 자금 사용을 승인하는 스마트 모임통장 서비스",
    description: "위치 인증, 채팅, 정산 흐름 안정적 연결",
    period: "2026.02 - 2026.03",
    team: "FE 3 BE 2 AI/INFRA 1",
    role: "Mobile Frontend",
    stack: ["React Native", "TypeScript", "Socket.io", "Polling"],
    highlights: [
      "React Native 환경의 Socket.io 통신 이슈 분석 및 수정",
      "StyleSheet.create 전환으로 스타일 재생성 비용 완화",
      "결제 인증 흐름에 맞춘 polling 방식 설계",
    ],
    github: "https://github.com/kimnaehyun/ENCO",
    live: "[수정 필요] 시연 영상 URL",
  },
  {
    title: "Codin'nator",
    summary: "실시간 공동 코드 편집을 위한 협업 에디터 서비스",
    description: "CRDT 기반 충돌 방지와 Slate.js 기반 커스텀 에디터 UI를 구현",
    period: "2026.01 - 2026.02",
    team: "FE 3 BE 2 AI 1",
    role: "Frontend",
    stack: ["React", "TypeScript", "Y.js", "Slate.js", "WebSocket"],
    highlights: [
      "Y.js 기반 동시 편집 데이터 구조 설계",
      "React.lazy와 Suspense로 페이지 단위 로딩 최적화",
      "any 타입 제거 및 도메인 중심 폴더 구조 정리",
    ],
    github: "https://github.com/kimnaehyun/Codin-nator",
    live: "[수정 필요] 배포 URL",
  },

  {
    slug: "flickclick",
    title: "FlickClick",
    summary: "영화와 TV 콘텐츠 탐색, 리뷰, 토론을 연결한 커뮤니티 서비스",
    description: "Supabase Realtime 기반 알림 구현",

    period: "2025.01 - 2025.03",
    team: "FE 4",
    role: "Frontend",
    stack: ["React", "TypeScript", "TMDB API", "Supabase"],
    highlights: [
      "TMDB API 기반 콘텐츠 섹션과 상세 필터 구현",
      "PostgreSQL Trigger로 댓글/토론 알림 자동 생성",
      "Supabase Realtime 구독으로 polling 없는 알림 수신",
    ],
    github: "https://github.com/kimnaehyun/FlickClick",
    live: "[수정 필요] 배포 URL",
  },
  {
    slug: "plaist",

    title: "Plaist",

    summary: "여행/모임 코스를 만들고 공유하는 커뮤니티 서비스",

    description:
      "지도 기반 장소 탐색과 인증 만료 UX를 구현한 React 기반 커뮤니티 플랫폼",

    period: "2024.12",
    team: "FE 5",
    role: "Frontend",

    stack: [
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "Kakao Map API",
      "Netlify",
    ],

    thumbnail: "/images/projects/plaist.png",

    highlights: [
      "Kakao Map SDK React 통합",
      "토큰 만료 UX 구현",
      "Netlify 자동 배포",
    ],

    problems: [
      {
        title: "지도 인스턴스 중복 생성",
        issue:
          "리렌더링 시 new kakao.maps.Map()이 반복 실행되어 지도가 겹쳐 생성됨",
        solution: "useRef로 인스턴스를 저장하고 이미 존재하면 초기화를 방지",
      },

      {
        title: "토큰 만료 UX 부재",
        issue: "외부 API에서 refreshToken을 제공하지 않아 세션 만료 처리 필요",
        solution: "쿠키 만료시간 + setTimeout 기반 감지 로직 구현",
      },
    ],

    github: "https://github.com/kimnaehyun/Plaist",
    live: "",
  },
];

export const skills = [
  {
    category: "프론트엔드",
    items: [
      {
        name: "React",
        icon: "https://skillicons.dev/icons?i=react",
        level: 3,
        description: "컴포넌트 기반 SPA 개발",
      },
      {
        name: "JavaScript",
        icon: "https://skillicons.dev/icons?i=javascript",
        level: 3,
        description: "프론트엔드 개발",
      },
      {
        name: "TypeScript",
        icon: "https://skillicons.dev/icons?i=typescript",
        level: 3,
        description: "타입 안정성 기반 개발",
      },
      {
        name: "React Native",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        level: 2,
        description: "모바일 앱 개발",
      },
      {
        name: "Vue",
        icon: "https://skillicons.dev/icons?i=vue",
        level: 2,
        description: "SPA 개발",
      },
      {
        name: "Flutter",
        icon: "https://skillicons.dev/icons?i=flutter",
        level: 2,
        description: "크로스 플랫폼 모바일 앱 개발",
      },
    ],
  },

  {
    category: "백엔드",
    items: [
      {
        name: "Python",
        icon: "https://skillicons.dev/icons?i=python",
        level: 2,
        description: "간단한 알고리즘 구현 데이터 처리",
      },
      {
        name: "Django",
        icon: "https://skillicons.dev/icons?i=django",
        level: 2,
        description: "Python 기반 웹 백엔드 개발",
      },
      {
        name: "PHP",
        icon: "https://skillicons.dev/icons?i=php",
        level: 1,
        description: "서버 사이드 웹 개발",
      },
      {
        name: "Java",
        icon: "https://skillicons.dev/icons?i=java",
        level: 1,
        description: "객체지향 프로그래밍 및 모바일 앱 개발",
      },
      {
        name: "Supabase",
        icon: "https://skillicons.dev/icons?i=supabase",
        level: 2,
        description: "백엔드 서비스와 실시간 기능",
      },
      {
        name: "Socket.io",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/socketio/socketio-original.svg",
        level: 2,
        description: "실시간 양방향 통신",
      },
    ],
  },

  {
    category: "라이브러리",
    items: [
      {
        name: "Zustand",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/zustand/zustand-original.svg",
        level: 3,
        description: "상태 공유를 효율적으로 처리",
      },
      {
        name: "Y.js",
        icon: "/skills/yjs.svg",
        level: 2,
        description: "CRDT 기반 동시 편집 데이터 구조",
      },
      {
        name: "Slate.js",
        icon: "",
        level: 2,
        description: "커스텀 리치 텍스트 에디터 UI 구현",
      },
      {
        name: "Tailwind CSS",
        icon: "https://skillicons.dev/icons?i=tailwind",
        level: 3,
        description: "유틸리티 클래스 기반 스타일링",
      },
      {
        name: "Tanstack Query",
        icon: "/skills/tanstack.svg",
        level: 2,
        description: "React를 위한 데이터 fetching 및 상태 관리",
      },
    ],
  },

  {
    category: "환경 및 배포",
    items: [
      {
        name: "Vite",
        icon: "https://skillicons.dev/icons?i=vite",
        level: 2,
        description: "빠른 개발 환경과 빌드 최적화",
      },
      {
        name: "Netlify",
        icon: "https://skillicons.dev/icons?i=netlify",
        level: 2,
        description: "프론트엔드 배포와 호스팅",
      },
      {
        name: "Git",
        icon: "https://skillicons.dev/icons?i=git",
        level: 2,
        description: "버전 관리와 협업",
      },
    ],
  },

  {
    category: "디자인",
    items: [
      {
        name: "Figma",
        icon: "https://skillicons.dev/icons?i=figma",
        level: 2,
        description: "UI/UX 디자인과 프로토타이핑",
      },
    ],
  },
];

export const education = [
  {
    name: "SSAFY(SAMSUNG SW AI ACADEMY FOR YOUTH)",
    status: "진행중",
    course: "SW·AI 역량 향상 교육",
    location: "부산",
    period: "2025.07 ~",
    activities: [
      "Python을 활용해 기본 알고리즘과 문제 해결 과정을 학습하고, AI 기초 개념을 함께 익히며 SW·AI 기반 사고력을 강화하고 있습니다.",
      "기업 연계 프로젝트에서 1인 프론트엔드로 참여해 서비스 화면 설계, UI 디자인, 컴포넌트 구현까지 프론트엔드 영역 전반을 주도했습니다.",
      "웹과 앱 개발을 모두 경험하기 위해 Vue, Django, Flutter, React, React Native 등 다양한 프레임워크를 학습하고 프로젝트에 적용했습니다.",
    ],
    skills: [
      "Python",
      "Vue",
      "JavaScript",
      "HTML",
      "CSS",
      "Django",
      "Flutter",
      "React",
      "React Native",
    ],
  },
  {
    name: "프로그래머스",
    status: "수료",
    course: "[2기] 클라우드 기반 프론트엔드 엔지니어링 데브코스",
    location: "온라인",
    period: "2024.10.11 - 2025.03.14",
    activities: [
      "HTML, CSS, JavaScript, React, TypeScript, Vue를 이용한 웹 프로그래밍 교육 과정을 이수하며 프론트엔드 기본기와 컴포넌트 기반 개발 흐름을 학습했습니다.",
      "기술 블로그(Velog)를 작성하며 학습 내용, 프로젝트 진행 과정, 문제 해결 경험을 기록하고 정리하는 습관을 만들었습니다.",
      "Git을 별도로 학습해 브랜치 관리, 충돌 해결, 협업 흐름을 익히고 팀 프로젝트에서 원활하게 협업할 수 있는 기반을 마련했습니다.",
      "커리큘럼 외에 Supabase 인증, Database, RPC, Realtime을 추가 학습해 백엔드처럼 활용했으며, Netlify를 통한 프론트엔드 배포까지 경험했습니다.",
    ],
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "TypeScript",
      "Vue",
      "Git",
      "Supabase",
      "Netlify",
      "프로젝트 관리",
    ],
  },
  {
    name: "우송대학교",
    status: "졸업",
    course: "스포츠건강관리학과 졸업",
    location: "대전",
    period: "2014.03 - 2020.02",
    activities: [
      "학과 대표를 맡아 구성원 의견을 조율하고 학과 행사와 일정 운영을 지원하며 책임감과 커뮤니케이션 역량을 키웠습니다.",
      "다양한 학과 활동에 참여하며 여러 사람과 목표를 맞춰 움직이는 협업 경험을 쌓았습니다.",
      "졸업 시 공로상을 수상하며 학과 활동과 공동체 기여를 인정받았습니다.",
    ],
    skills: [
      "협업",
      "커뮤니케이션",
      "일정 관리",
      "문제 해결",
      "책임감",
      "리더십",
    ],
  },
];
