
import type { Metadata } from "next";


import "./globals.css";
import {  Poppins, } from "next/font/google"
import TopBar from "./components/topBar";
import Header from './components/header';
import Footer from "./components/footer";
// import script from "next/script";

const poppins= Poppins({
  subsets: ['latin'],
  weight: ['400' , '700'],
});





export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className }  `}
      >
      <TopBar/>
      <Header/>

        {children}
      <Footer/>
      </body>
    </html>
  );
}
