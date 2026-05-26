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
    period: "2026.02 - 2026.03",
    team: "FE 3 BE 2 AI/INFRA 1",
    role: "Mobile Frontend",
    goal: "관리자는 편리하고 모임원은 안전하게 사용하는 모임 통장 서비스",
    background:
      "현장 결제 시 위치 기반 인증 및 투표 시스템을 통한 투명한 자금 집행",
    features: [
      "RN 기반 모바일 앱",
      " 위치 기반 결제 인증",
      "실시간 모임 채팅 ",
      " 결제/정산 프로세스 설계",
    ],
    stack: ["React Native", "TypeScript", "Socket.io", "Polling"],
    highlights: [
      "React Native 환경의 Socket.io 통신 이슈 분석 및 수정",
      "StyleSheet.create 전환으로 스타일 재생성 비용 완화",
      "결제 인증 흐름에 맞춘 polling 방식 설계",
      "any 타입을 인터페이스 기반 구조로 리팩토링",
    ],
    techReasons: [
      {
        tech: "Polling",
        reason:
          "채팅과 달리 결제 순간에만 위치 확인이 필요 — 상시 연결 비용을 줄이고 모바일 환경의 네트워크 단절에도 재연결 로직 없이 안정적 복구 가능",
      },
      {
        tech: "StyleSheet.create",
        reason:
          "인라인 스타일 대비 리렌더링 시 메모리 재할당을 방지하여 렌더링 성능 개선",
      },
    ],
    problems: [
      {
        title: "React Native 환경의 Socket.io 통신 장애",
        issue:
          "RN과 백엔드 라이브러리 간 호환성 문제로 채팅 기능이 마비된 상황 발생",
        solution:
          "BE 코드를 직접 분석·수정·제안하여 통신 옵션을 조정, 실시간 채팅 정상화",
      },
      {
        title: "위치 기반 결제 인증 방식 선택 (Polling 채택)",
        issue:
          "채팅과 달리 결제 순간에만 위치 확인이 필요해 WebSocket 상시 연결이 과도한 상황",
        solution:
          "모바일 환경의 잦은 네트워크 단절을 고려해 Polling 채택 — 재연결 로직 없이 안정적 상태 복구 가능하고, 한 번의 응답으로 여러 결제 상태를 통합 수신하여 로직 단순화",
      },
    ],
    outcomes: [],
    github: "https://github.com/kimnaehyun/ENCO",
    live: "",
  },
  {
    title: "Codin'nator",
    summary: "실시간 공동 코드 편집을 위한 협업 에디터 서비스",
    period: "2026.01 - 2026.02",
    team: "FE 3 BE 2 AI 1",
    role: "Frontend",
    goal: "팀원과 실시간으로 코드를 공동 편집할 수 있는 안정적인 협업 에디터 구축",
    background:
      "동시 편집 시 발생하는 데이터 충돌을 방지하고 유연한 에디터 UI 환경 제공 필요",
    features: [
      "WebSocket 기반 실시간 협업",
      "CRDT 활용 충돌 방지",
      "Slate.js 기반 코드 에디터",
      "Jenkins/Docker CI/CD 배포",
    ],
    stack: ["React", "TypeScript", "Y.js", "Slate.js", "WebSocket"],
    highlights: [
      "Y.js 기반 동시 편집 데이터 구조 설계",
      "React.lazy와 Suspense로 페이지 단위 로딩 최적화",
      "any 타입 제거 및 도메인 중심 폴더 구조 정리",
    ],
    techReasons: [],
    problems: [
      {
        title: "동시 편집 시 텍스트 순서 뒤바뀜 및 충돌",
        issue: "네트워크 지연에 따라 사용자 간 편집 순서가 꼬이는 문제 발생",
        solution:
          "Y.js(CRDT) 도입으로 중앙 서버 없이도 최종 일관성 확보, 동시 편집 충돌 원천 차단",
      },
      {
        title: "복잡한 코드 에디터의 상태 관리 및 렌더링 제어",
        issue:
          "일반 input/textarea로는 커서 위치·선택 범위 등 세밀한 에디터 상태 제어 불가",
        solution:
          "Slate.js로 에디터 데이터 모델을 구조화하여 정밀한 커서 및 텍스트 상태 동기화 구현",
      },
    ],
    outcomes: [],
    github: "https://github.com/kimnaehyun/Codin-nator",
    live: "",
  },
  {
    title: "FlickClick",
    summary: "영화와 TV 콘텐츠 탐색, 리뷰, 토론을 연결한 커뮤니티 서비스",

    period: "2025.01 - 2025.03",
    team: "FE 4",
    role: "Frontend",
    goal: "영화·TV 콘텐츠 탐색, 스크랩, 리뷰 및 토론이 가능한 커뮤니티 플랫폼 구축",
    background:
      "콘텐츠 정보 탐색과 감상 공유가 분리된 환경에서 통합 경험 제공 필요",
    features: [
      "TMDB API 기반 콘텐츠 탐색(인기·신규·예정)",
      " 장르/날짜 필터 상세 페이지 ",
      " 스크랩·리뷰·토론 ",
      " Supabase Trigger 기반 실시간 알림 ",
    ],
    stack: [
      "React",
      "TypeScript",
      "TMDB API",
      "Supabase",
      "PostgreSQL Trigger",
    ],
    highlights: [
      "TMDB API 기반 콘텐츠 섹션과 상세 필터 구현",
      "PostgreSQL Trigger로 댓글/토론 알림 자동 생성",
      "Supabase Realtime 구독으로 polling 없는 알림 수신",
      "댓글·토론·알림 ERD 설계 및 Supabase 테이블 구성",
    ],
    techReasons: [
      {
        tech: "PostgreSQL Trigger",
        reason:
          "댓글 삽입 이벤트에 자동 반응하여 알림 생성 — 프론트 추가 호출 없이 서버 주도 알림 처리",
      },
      {
        tech: "Supabase Realtime",
        reason:
          "DB 변경을 클라이언트가 구독 방식으로 수신하여 polling 없는 실시간 알림 구현",
      },
    ],
    problems: [
      {
        title: "PostgreSQL Trigger 알림 중복 및 대상 필터링",
        issue:
          "댓글 작성자 본인·토론 작성자·기존 참여자 등 알림 대상을 정확히 분리해야 했고, Supabase 환경에서 트리거 디버깅이 어려웠음",
        solution:
          "DISTINCT·EXISTS·!= 조건을 조합하여 쿼리 최적화, 테스트 케이스를 테이블에 수동 삽입하며 로직 검증 → 중복 없는 알림 자동 생성 완성",
      },
    ],
    outcomes: [
      "PostgreSQL Trigger 설계·디버깅 경험 — 서버 주도 이벤트 처리 패턴 체득",
      "Supabase Realtime 구독으로 polling 없는 실시간 알림 아키텍처 구현",
      "ERD 설계부터 UI 연동까지 풀스택 데이터 흐름 전체 경험",
    ],
    github: "https://github.com/kimnaehyun/FlickClick",
    live: "",
  },
  {
    title: "Plaist",
    summary: "여행/모임 코스를 만들고 공유하는 커뮤니티 서비스",

    period: "2024.12",
    team: "FE 5",
    role: "Frontend",
    goal: "누구나 쉽게 데이트·모임 코스를 기획하고 공유할 수 있는 커뮤니티 플랫폼 구축",
    background:
      "장소 탐색과 코스 공유가 분산되어 있어 한 곳에서 기획·공유·소통이 가능한 서비스 필요",
    features: [
      "Kakao Map 기반 장소 검색 및 코스 생성",
      "코스·장소 커뮤니티 공유",
      "회원가입/로그인(토큰 만료 UX)",
      "Netlify CI/CD 자동 배포",
    ],
    stack: [
      "React",
      "TypeScript",
      "React Query",
      "Zustand",
      "Kakao Map API",
      "Netlify",
    ],
    highlights: [
      "Kakao Map SDK React 통합",
      "토큰 만료 UX 구현",
      "Netlify 자동 배포",
    ],
    techReasons: [
      {
        tech: "React Query",
        reason: "서버 상태와 캐시를 분리하여 불필요한 리페치 최소화",
      },
      {
        tech: "Zustand",
        reason: "가벼운 전역 상태 관리로 불필요한 Context 중첩 제거",
      },
      {
        tech: "Netlify",
        reason: "별도 서버 없이 GitHub 푸시만으로 자동 배포",
      },
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
        issue:
          "외부 API에서 refreshToken을 제공하지 않아 세션 만료 처리를 자체 설계 필요",
        solution:
          "쿠키에 1시간 만료 설정 + setTimeout 1분 주기 체크 → 만료 5분 전 모달 표시 → 연장 또는 자동 로그아웃 처리",
      },
    ],
    outcomes: [
      "외부 API 제약 상황에서 자체 토큰 만료 UX 설계·구현 경험 확보",
      "지도 라이브러리 사이드 이펙트 제어 패턴(useRef) 실전 적용",
      "Netlify 자동 배포 파이프라인 구성으로 팀 개발 생산성 향상",
    ],
    github: "https://github.com/kimnaehyun/Plaist",
    live: "",
  },
  {
    title: "Pulgo",
    summary:
      "문제를 제작·관리하고 친구들과 함께 시험을 볼 수 있는 문제은행 커뮤니티 플랫폼",

    period: "2025.01 - 2025.02",
    team: "FE 5",
    role: "Frontend",
    goal: "문제를 제작·관리하고 친구들과 함께 시험을 볼 수 있는 문제은행 커뮤니티 플랫폼 구축",
    background:
      "학습 콘텐츠를 직접 만들고 공유하며 함께 시험 볼 수 있는 협업형 학습 서비스 필요",
    features: [
      "문제 제작 및 문제집 관리",
      "시험장 생성 및 결과 확인",
      "북마크/좋아요/댓글",
      "Supabase RPC 기반 API 설계",
    ],
    stack: ["Vue", "JavaScript", "Tailwind CSS", "Supabase", "Prime Vue"],
    highlights: [
      "문제집 상세 페이지 전체 구현 — 리스트, 북마크·좋아요, 댓글",
      "Supabase 테이블 구조 및 ERD 직접 설계",
      "RPC 함수로 복잡한 JOIN 쿼리 추상화 — 팀원 생산성 향상",
    ],
    techReasons: [
      {
        tech: "Supabase",
        reason:
          "별도 백엔드 없이 인증·DB·실시간 기능을 통합 제공, 소규모 팀에 최적",
      },
      {
        tech: "RPC 함수",
        reason: "복잡한 JOIN 쿼리를 서버 함수로 캡슐화하여 프론트 코드 단순화",
      },
      {
        tech: "Prime Vue",
        reason: "Vue 생태계에서 검증된 컴포넌트 라이브러리로 빠른 UI 구성",
      },
    ],
    problems: [
      {
        title: "복잡한 관계형 쿼리 관리",
        issue:
          "문제·문제집·시험장·사용자 간 복잡한 JOIN 쿼리가 프론트 코드에 분산되어 유지보수 어려움",
        solution:
          "PostgreSQL RPC 함수로 DISTINCT·JOIN 등 복잡 쿼리를 캡슐화 → 프론트는 단순 함수 호출만으로 데이터 활용 가능",
      },
    ],
    outcomes: [
      "백엔드 없이 Supabase만으로 완전한 CRUD 서비스 설계·구현 경험",
      "RPC 추상화로 팀원들이 복잡한 쿼리 없이 데이터 활용 가능한 구조 실현",
      "Vue + JavaScript 스택으로 React 외 프레임워크 실전 경험 확보",
    ],
    github: "https://github.com/kimnaehyun/devcourse-Teemo",
    live: "https://pullgo.netlify.app/",
  },
  {
    title: "Earth Talk",
    summary:
      "자동 수집 뉴스 기반으로 팀 디베이트와 실시간 참관이 가능한 커뮤니티 플랫폼",

    period: "2025.02 - 2025.03",
    team: "FE 3 BE 5",
    role: "Frontend",
    goal: "자동 수집 뉴스 기반으로 구조화된 팀 디베이트와 참관이 가능한 커뮤니티 플랫폼",
    background:
      "단순 뉴스 소비를 넘어 비판적 사고와 다양한 시각 교류를 촉진하는 서비스 필요",
    features: [
      "뉴스 자동 수집·필터링",
      "1vs1/3vs3 팀 디베이트",
      "참관 모드(실시간 시청·투표)",
      "실시간 알림",
      "관리자 도구",
    ],
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Zustand",
      "Firebase Cloud Messaging",
      "WebSocket",
    ],
    highlights: [
      "메인·관리자·마이페이지·뉴스 페이지 구현",
      "페이지네이션 공통 컴포넌트화로 팀 재사용성 확보",
      "FCM 우회 알림 구현 후 WebSocket으로 통합",
    ],
    techReasons: [
      {
        tech: "FCM",
        reason:
          "백엔드 WebSocket 구조 충돌 우려 상황에서 알림 기능을 빠르게 우회 구현",
      },
      {
        tech: "페이지네이션 공통 컴포넌트",
        reason: "팀 전체 목록 성능 개선 및 재사용성 확보",
      },
    ],
    problems: [
      {
        title: "WebSocket 충돌로 인한 실시간 알림 구현 제약",
        issue:
          "다른 페이지에서 WebSocket을 이미 사용 중이어서 알림용 추가 연결 시 충돌 우려",
        solution:
          "단기: FCM으로 알림 기능 우회 구현 → 장기: WebSocket 구조 재정비 후 실시간 알림 통합",
      },
      {
        title: "좋아요/북마크 API 반전 버그",
        issue: "백엔드 API에서 좋아요와 북마크 기능이 서로 뒤바뀌어 동작",
        solution:
          "BE와 테스트 케이스를 함께 정의하고 디버깅 반복 → 양측 코드 수정으로 정상화",
      },
    ],
    outcomes: [
      "FE·BE 협업 디버깅 경험 — API 계약 오류를 소통으로 해결하는 프로세스 체득",
      "기술 제약 상황에서 우회 방안 설계 후 단계적 고도화 경험",
      "공통 컴포넌트화로 팀 전체 코드 재사용성·일관성 향상",
    ],
    github: "https://github.com/kimnaehyun/WEB2_3_BlockB_FE",
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
