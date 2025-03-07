import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BarraContacto from "@/components/BarraContacto/RedesSociales";
import NavbarMovil from "@/components/Navbar/NavbarMovil";
import BarraContactoMovil from "@/components/BarraContacto/RedesSocialesMovil";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "UPet",
  description: "Creación personalizada de retratos de mascotas y diseños propios.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        <NavbarMovil/>
        <BarraContacto/>
        <BarraContactoMovil/>
          {children}
        <Footer/>
      </body>
    </html>
  );
}
