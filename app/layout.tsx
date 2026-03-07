import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./_components/ConvexClientProvider";
import Navbar from "./_components/Navbar";
import { Toaster } from "sonner";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Medcare - Your Trusted Healthcare Partner",
  description: "Medcare is a leading healthcare provider dedicated to delivering exceptional medical services and compassionate care. Our team of expert doctors and state-of-the-art facilities ensure that you receive the best treatment for all your healthcare needs.",
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
          <ConvexClientProvider>
          <Navbar/>
          {children}
          </ConvexClientProvider>
          <Toaster/>
        </body>
      </html>
    
  );
}
