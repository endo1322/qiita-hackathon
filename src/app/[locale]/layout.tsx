import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import TrpcProvider from "@/lib/context/trpc";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { twMerge } from "tailwind-merge";

// const inter = Inter({ subsets: ["latin"] });
const NotoSans = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html className="w-full h-full" lang={locale}>
      <body
        className={twMerge(NotoSans.className, "w-full h-full bg-background")}
      >
        <TrpcProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </TrpcProvider>
      </body>
    </html>
  );
}
