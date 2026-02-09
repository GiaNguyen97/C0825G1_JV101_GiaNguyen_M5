import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FormProvider } from "@/src/context/FormContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { StepIndicator } from "@/src/components/StepIndicator";
import { LAYOUT_STYLES } from "@/src/styles/form-styles";

export const metadata: Metadata = {
  title: "Tờ khai y tế",
  description: "Hệ thống khai báo y tế điện tử",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 min-h-screen`}
      >
        <FormProvider>
          <div className="flex flex-col items-center w-full max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-blue-700 mb-2">Tờ khai y tế</h1>
            <p className="text-gray-500 mb-6 text-center">Vui lòng điền thông tin chính xác để góp phần phòng chống dịch COVID-19.</p>
            <StepIndicator />
            <div className={LAYOUT_STYLES.card}>
              {children}
            </div>
          </div>
          <ToastContainer position="top-right" autoClose={3000} />
        </FormProvider>
      </body>
    </html>
  );
}
