"use client";

import React, { useState } from "react";
import { 
  Globe, 
  Plus, 
  Compass, 
  Layers, 
  Wind, 
  Map, 
  Sparkles,
  ArrowRight,
  Code2
} from "lucide-react";

export default function Home() {
  const [demoMessage, setDemoMessage] = useState<string | null>(null);

  const handlePlaceholderClick = () => {
    setDemoMessage("🎉 보일러플레이트가 정상적으로 작동 중입니다! 아래 코드를 참고하여 새 기능을 추가해 보세요.");
    setTimeout(() => setDemoMessage(null), 5000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-grid-pattern">
      {/* 1. 상단 헤더 (Header Section) */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-900/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* 서비스 로고 */}
          <div className="flex items-center gap-2.5 group">
            <div className="p-2 bg-brand-500 rounded-xl text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
              <Globe className="w-5 h-5 animate-pulse" />
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-brand-600 to-indigo-600 dark:from-brand-400 dark:to-indigo-400 bg-clip-text text-transparent">
              바이브 지구과학 코딩 연수
            </span>
          </div>

          {/* 네비게이션 메뉴 공간 */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#hero" className="text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 transition-colors">
              소개
            </a>
            <a href="#features" className="text-sm font-medium text-slate-600 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400 transition-colors">
              기능 예시
            </a>
            
            {/* [TIP] 여기에 새로운 네비게이션 메뉴 아이템 컴포넌트를 추가하세요 */}
            {/* 예: <NavLink href="/simulator">시뮬레이터</NavLink> */}
            
            <span className="h-4 w-px bg-slate-200 dark:bg-slate-800"></span>
            
            <a 
              href="https://vercel.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 rounded-lg hover:opacity-90 transition-opacity"
            >
              Vercel 배포
            </a>
          </nav>

          {/* 모바일 메뉴 버튼 자리 */}
          <div className="md:hidden">
            <button 
              onClick={handlePlaceholderClick}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              <Sparkles className="w-5 h-5 text-brand-500" />
            </button>
          </div>

        </div>
      </header>

      {/* 메인 화면 영역 */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-16">
        
        {/* 2. 메인 화면 (Hero Section) */}
        <section id="hero" className="relative overflow-hidden rounded-3xl border border-slate-200/50 dark:border-slate-800/50 bg-gradient-to-br from-brand-50/50 via-white to-indigo-50/30 dark:from-slate-900/60 dark:via-slate-900 dark:to-brand-950/20 px-6 py-16 sm:px-12 sm:py-24 text-center shadow-sm">
          
          {/* 장식용 우주/지구 느낌의 배경 블러 서클 */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-400/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative max-w-3xl mx-auto flex flex-col items-center">
            
            {/* 배지 */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-brand-100 text-brand-800 dark:bg-brand-950/50 dark:text-brand-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>지구과학 연수 웹앱 보일러플레이트</span>
            </div>

            {/* 환영 문구 (Title) */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="block text-slate-900 dark:text-white">수굥의</span>
              <span className="block mt-2 bg-gradient-to-r from-brand-500 via-sky-500 to-indigo-500 bg-clip-text text-transparent">
                교육용 웹앱 만들기
              </span>
            </h1>

            {/* 간단한 설명 (Description) */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-10 leading-relaxed">
              본 프로젝트는 Vercel 배포에 완벽히 최적화된 가장 단순하고 깔끔한 웹앱의 뼈대입니다. 
              다양한 지구과학 교육용 컴포넌트와 코딩 시뮬레이션을 쉽게 확장해 나갈 수 있습니다.
            </p>

            {/* 기능 추가를 위한 가짜(Placeholder) 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <button
                onClick={handlePlaceholderClick}
                className="group relative inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-white bg-gradient-to-r from-brand-500 to-indigo-600 hover:from-brand-600 hover:to-indigo-700 rounded-xl shadow-lg shadow-brand-500/20 hover:shadow-brand-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                <span>여기에 새로운 기능 추가하기</span>
              </button>
              
              <a 
                href="#features"
                className="inline-flex items-center gap-1.5 px-6 py-3.5 font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
              >
                <span>컴포넌트 구조 보기</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* 데모 반응 메시지 출력부 */}
            {demoMessage && (
              <div className="mt-6 p-3.5 bg-brand-50 dark:bg-slate-800 border border-brand-200 dark:border-brand-900/50 text-brand-800 dark:text-brand-300 rounded-xl text-sm font-medium animate-bounce">
                {demoMessage}
              </div>
            )}

          </div>
        </section>

        {/* 3. 확장성을 고려한 컴포넌트 영역 (Placeholder Features Grid) */}
        <section id="features" className="flex flex-col gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">학습 컴포넌트 예시 & 가이드</h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1.5">
              아래 레이아웃을 수정하여 실습용 지구과학 교구를 추가해 보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 카드 1: 지구 내부 구조 (예시) */}
            <div className="flex flex-col p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm hover:border-brand-500/50 transition-colors group">
              <div className="p-3 bg-rose-50 dark:bg-rose-950/30 text-rose-500 rounded-xl w-fit mb-5">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">지구 내부 구조</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                지각, 맨틀, 외핵, 내핵의 상태와 두께를 직관적으로 시각화하는 모듈입니다.
              </p>
              
              {/* [NEW COMPONENT SLOT 1] */}
              {/* 여기에 새로운 컴포넌트(예: 지구 내부 구조 시각화 컴포넌트)를 추가하세요 */}
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Code2 className="w-4 h-4" />
                <span>//기에 컴포넌트 추가</span>
              </div>
            </div>

            {/* 카드 2: 대기 대순환 시뮬레이터 (예시) */}
            <div className="flex flex-col p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm hover:border-brand-500/50 transition-colors group">
              <div className="p-3 bg-sky-50 dark:bg-sky-950/30 text-sky-500 rounded-xl w-fit mb-5">
                <Wind className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">대기 대순환 모형</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                위도별 기압대 배치와 바람(무역풍, 편서풍, 극동풍)의 흐름을 애니메이션으로 관찰합니다.
              </p>
              
              {/* [NEW COMPONENT SLOT 2] */}
              {/* 여기에 새로운 컴포넌트(예: 대기 순환 애니메이션 컴포넌트)를 추가하세요 */}
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Code2 className="w-4 h-4" />
                <span>//기에 컴포넌트 추가</span>
              </div>
            </div>

            {/* 카드 3: 해양 지각 및 판의 경계 (예시) */}
            <div className="flex flex-col p-6 rounded-2xl border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-900 shadow-sm hover:border-brand-500/50 transition-colors group">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-500 rounded-xl w-fit mb-5">
                <Map className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-2">판의 경계 시뮬레이터</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
                수렴형, 발산형, 보존형 경계에서의 지각 변동(지진, 화산 활동)을 시뮬레이션합니다.
              </p>
              
              {/* [NEW COMPONENT SLOT 3] */}
              {/* 여기에 새로운 컴포넌트(예: 판의 구조 판독 컴포넌트)를 추가하세요 */}
              <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Code2 className="w-4 h-4" />
                <span>//기에 컴포넌트 추가</span>
              </div>
            </div>

          </div>

          {/* 대형 빈 영역 가이드보드 */}
          <div className="p-8 rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/20 text-center flex flex-col items-center justify-center py-12">
            <Compass className="w-10 h-10 text-slate-300 dark:text-slate-700 mb-3" />
            <h4 className="font-bold text-slate-700 dark:text-slate-300">새로운 학습 단원 섹션 추가 공간</h4>
            <p className="text-xs text-slate-400 dark:text-slate-500 max-w-sm mt-1 mb-4">
              새로운 실습 주제나 퀴즈 게임 등의 컴포넌트를 이 자리에 자유롭게 렌더링하세요.
            </p>
            {/* [NEW COMPONENT SLOT 4] */}
            {/* 여기에 새로운 독립형 대형 교육 모듈 컴포넌트를 추가하세요 */}
            <div className="text-[11px] font-mono bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-lg text-slate-500 dark:text-slate-400">
              {"{/* 여기에 새로운 독립 컴포넌트를 렌더링하세요 */}"}
            </div>
          </div>
        </section>

      </main>

      {/* 4. 하단 푸터 (Footer Section) */}
      <footer className="w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-500 rounded-md flex items-center justify-center text-white text-xs font-bold">
              지
            </div>
            <span className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-widest">
              VIBE EarthScience Coding
            </span>
          </div>
          
          {/* 카피라이트 공간 */}
          <p className="text-xs text-slate-400 dark:text-slate-500 text-center sm:text-right">
            &copy; {new Date().getFullYear()} 바이브 지구과학 코딩 연수. All rights reserved. 
            <span className="block sm:inline sm:ml-1 text-slate-300 dark:text-slate-700">| Designed for 수굥</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
