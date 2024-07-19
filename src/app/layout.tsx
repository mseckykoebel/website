import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

import { MainLayout } from "@/layouts";
import { ParentProvider } from "@/providers";

export const metadata: Metadata = {
  title: "Mason Secky-Koebel - Website",
  description: "Personal website of Mason Secky-Koebel",
  applicationName: "Mason Secky-Koebel's website",
  authors: {
    name: "Mason Secky-Koebel",
  },
  icons: "/favicon.ico",
  openGraph: {
    title: "Mason Secky-Koebel - Website",
    description: "Personal website of Mason Secky-Koebel",
    url: "https://masonseckykoebel.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>
        <ParentProvider>
          <Analytics />
          <MainLayout>{children}</MainLayout>
        </ParentProvider>
      </body>
    </html>
  );
}
