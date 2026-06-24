# 🌍 바이브 지구과학 코딩 연수 웹앱 보일러플레이트

수굥 선생님의 지구과학 교육용 웹 서비스를 빠르게 개발하기 위한 깔끔하고 가벼운 **Next.js 15 + Tailwind CSS v3** 보일러플레이트 템플릿입니다.

이 템플릿은 Vercel 빌드 에러 요소를 완벽히 제거하여 **GitHub 연동 후 즉시 Vercel 배포**가 가능하도록 설계되었습니다.

---

## 📂 폴더 구조 (Folder Structure)

```text
coding/
├── .gitignore             # Git 제외 파일 목록
├── next-env.d.ts          # Next.js 전역 타입 정의
├── next.config.ts         # Next.js 설정 파일
├── package.json           # 프로젝트 의존성 설정
├── postcss.config.js      # PostCSS 스타일 설정
├── tailwind.config.ts     # Tailwind CSS 테마 커스터마이징
├── tsconfig.json          # TypeScript 설정
├── app/
│   ├── globals.css        # Tailwind 전역 스타일 및 미크로 애니메이션
│   ├── layout.tsx         # 전역 레이아웃 및 SEO 메타데이터
│   └── page.tsx           # 메인 페이지 (헤더, 히어로, 예시 카드, 푸터)
└── README.md              # 가이드 문서
```

---

## ⚙️ 로컬 개발 환경 실행 방법

이 템플릿을 개발 환경에서 로컬로 수정하고 테스트하려면 아래 단계를 따르세요. (Node.js와 npm이 컴퓨터에 설치되어 있어야 합니다.)

### 1. 의존성 패키지 설치
터미널에서 프로젝트 디렉토리로 이동한 후 패키지를 설치합니다.
```bash
npm install
# 또는 pnpm install / yarn install
```

### 2. 개발 서버 실행
```bash
npm run dev
# 또는 pnpm dev / yarn dev
```
로컬 호스트 [http://localhost:3000](http://localhost:3000)에서 실시간으로 렌더링된 화면을 확인할 수 있습니다.

### 3. 빌드 및 테스트 (Vercel 배포 전 체크)
```bash
npm run build
```
Vercel에 푸시하기 전 오류가 없는지 미리 확인할 때 유용합니다.

---

## 🚀 Vercel 배포 방법

본 보일러플레이트는 복잡한 데이터베이스나 백엔드 서버가 없어 10초 만에 배포가 완료됩니다.

1. 이 프로젝트 폴더를 본인의 **GitHub 저장소(Repository)**에 푸시합니다.
2. [Vercel](https://vercel.com)에 로그인 후 **"Add New" -> "Project"**를 클릭합니다.
3. 해당 GitHub 저장소를 가져와(Import) 설정 기본값을 유지한 채 **"Deploy"** 버튼을 누릅니다.
4. 빌드가 완료되면 Vercel이 무료로 생성해 주는 라이브 URL을 통해 누구나 접속할 수 있습니다!

---

## 💡 코드 수정 및 기능 추가 가이드

본 코드는 직관적으로 컴포넌트를 이식할 수 있도록 영역이 잘 구분되어 있습니다.

### 네비게이션 메뉴 추가
* `app/page.tsx` 내의 `{/* 네비게이션 메뉴 공간 */}` 아래 주석 부분을 참조해 새로운 링크나 서브 페이지 메뉴를 추가하세요.

### 새로운 지구과학 시각화 교구 삽입
* `app/page.tsx` 내부 `//기에 컴포넌트 추가`라고 표시된 부분을 찾으세요.
* 기존 예시 카드 내부의 해당 부분에 직접 HTML/React 코드를 작성하시거나, 별도의 컴포넌트 파일(예: `components/EarthStructure.tsx`)을 만들어 임포트(Import)한 후 렌더링하시면 구조가 매우 깔끔해집니다.
