import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navabr from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className=" h-full relative">
          <div  className=" relative hidden h-full lg:w-80 lg:flex lg:flex-col lg:fixed lg:inset-y-0  bg-[#3C4042]">
              <Navabr/>
          </div>
          <main className=" lg:pl-80 lg:m-8">
            <div className=" flex justify-end items-end">Uaser profile</div>
            <div>{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
