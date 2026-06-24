import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "바이브 지구과학 코딩 연수",
  description: "수굥의 교육용 웹앱 만들기 뼈대(Boilerplate) 프로젝트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-background text-foreground flex flex-col">
        {children}
      </body>
    </html>
  );
}
