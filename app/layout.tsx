import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import nhl from "../public/nhl.png";
import HeaderText from "./components/layout/header/HeaderText";
import NhlLogo from "./components/layout/header/NhlLogo";
import Header from "./components/layout/header/Header";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Center Ice",
  description: "NHL Stats and Standings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <Header />
        <main
          style={{
            height: "90vh",
          }}
          className=" overflow-auto p-2"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
