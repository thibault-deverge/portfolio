/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextIntlClientProvider, Locale, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { Inter, Bebas_Neue, Manrope } from "next/font/google";

import { Navbar } from "@/components/navbar/navbar";
import { Footer } from "@/components/footer/footer";
import { ScrollToTopBtn } from "@/components/ui/scrollToTopBtn";
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
	description: "Web Fullstack Developper Portfolio of Thibault Deverge",
};

/*
 ***** RootLayout *****
 */
export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}>) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}

	return (
		<html lang="en" className={`${inter.className} ${bebasNeue.className}`}>
			<body className="bg-neutral-900">
				<NextIntlClientProvider>
					<Navbar />
					{children}
					<Footer />
					<ScrollToTopBtn />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
