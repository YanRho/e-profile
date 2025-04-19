import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation/navigation-bar";
import { ThemeProvider } from "@/components/theme-provider";
import { redirect } from "next/navigation";
import UnderConstruction from "@/components/under-construction";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bryan Bergenholtz",
  description: "Online Portfolio",
};

const MAINTENANCE_MODE = false; // Set to true to enable maintenance mode

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {MAINTENANCE_MODE ? (
          <UnderConstruction />
        ) : (
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <NavigationBar />
            {children}
          </ThemeProvider>
        )}
      </body>
    </html>
  );
}
