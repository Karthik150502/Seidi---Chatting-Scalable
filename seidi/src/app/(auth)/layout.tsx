import type { Metadata } from "next";
import { montserrat300 } from "../fonts/montserrat";

export const metadata: Metadata = {
    title: "Seidi | Auth",
    description: "Realtime Chatting Simplified",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main
            className={`min-h-screen overflow-hidden relative ${montserrat300.className} antialiased`}
        >
            {children}
        </main>
    );
}
