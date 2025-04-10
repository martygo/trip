import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CookiesProvider } from "next-client-cookies/server";

import Header from "./_components/header";

import "./globals.css";
import Footer from "./_components/footer";
import { ThemeProvider } from "@/context/theme-provider";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "SmartTrip",
	description: "Plan your trip smartly",
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
				<CookiesProvider>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Header />
						{children}
						<Footer />
					</ThemeProvider>
				</CookiesProvider>
			</body>
		</html>
	);
}
