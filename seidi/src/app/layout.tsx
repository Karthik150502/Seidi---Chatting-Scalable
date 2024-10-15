import type { Metadata } from "next";

import "./globals.css";
import { montserrat300 } from "./fonts/montserrat";
import SessionProvider from "@/providers/sessionProvider";
export const metadata: Metadata = {
  title: "Seidi",
  description: "Realtime Chatting Simplified",
};
import { Toaster } from "sonner";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider>
        <body
          className={`min-h-screen overflow-hidden relative ${montserrat300.className} antialiased`}
        >
          {children}
          <Toaster richColors duration={5000}/>
        </body>
      </SessionProvider>
    </html>
  );
}
