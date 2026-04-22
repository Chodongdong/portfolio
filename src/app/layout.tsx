import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "조동현 | Frontend Engineer",
  description:
    "인터랙션 엔지니어 조동현의 포트폴리오. 움직임과 반응성으로 사용자 경험을 설계합니다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
