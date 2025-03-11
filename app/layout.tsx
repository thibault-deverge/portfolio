/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import { Inter, Bebas_Neue, Manrope } from "next/font/google";

import { Navbar } from "@/components/navbar/navbar";
import "./globals.css";

/*
 ***** Font Import *****
 */
const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
	display: "swap",
});

const bebasNeue = Bebas_Neue({
	subsets: ["latin"],
	weight: "400",
	variable: "--font-bebas",
	display: "swap",
});

const manrope = Manrope({
	subsets: ["latin"],
	weight: "500",
	variable: "--font-manrope",
	display: "swap",
});

/*
 ***** MetaData *****
 */
export const metadata: Metadata = {
	title: "Thibault Deverge | Portfolio",
	description: "",
};

/*
 ***** RootLayout *****
 */
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${inter.className} ${bebasNeue.className}`}>
			<body className="bg-neutral-900">
				<Navbar />
				{children}
			</body>
		</html>
	);
}
