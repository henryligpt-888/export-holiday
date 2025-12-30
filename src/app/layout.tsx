import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppSidebar from "@/components/layout/AppSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "外贸工具箱 - Trade Toolbox",
  description: "外贸人必备的多功能工具平台：节假日查询、时区转换、海运周期",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-slate-50 min-h-screen`}>
        <div className="flex min-h-screen">
          {/* Fixed Sidebar */}
          <AppSidebar />

          {/* Main Content Area */}
          <main className="flex-1 ml-64">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
