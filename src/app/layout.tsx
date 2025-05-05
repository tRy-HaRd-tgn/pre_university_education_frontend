"use client";

import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "../../store";
import { Toaster } from "sonner";
import { StoreProvider } from "@/components/storeProvider";

const inter = Inter({
	subsets: ["latin", "cyrillic"],
	variable: "--font-inter",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Provider store={store}>
			<html lang="ru">
				<body
					className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
				>
					<StoreProvider>{children}</StoreProvider>
					<div id="modal-root" />
				</body>
			</html>
			<Toaster />
		</Provider>
	);
}
