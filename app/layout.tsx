import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/ui/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test-Valantis",
  description: "Продукты для Valantis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
