import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],

  variable: "--font-ibm-plex-serif",
  weight: ["100", "400"],
});

export const metadata: Metadata = {
  title: "YourBank",
  description: "YourBank is a modern Banking plateform for everyone.",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
