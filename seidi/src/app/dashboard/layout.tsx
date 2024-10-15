import type { Metadata } from "next";

import { montserrat300 } from "../fonts/montserrat";
export const metadata: Metadata = {
    title: "Seidi | Dahsboard",
    description: "Realtime Chatting Simplified",
};
import { Toaster } from "sonner";
import { RecoilRoot } from "recoil";

import DashboardNav from "@/components/app/dashboard/dashboardNav";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <main
            className={`min-h-screen overflow-hidden relative ${montserrat300.className} antialiased`}
        >
            {/* <DashboardNonFancy /> */}
            <DashboardNav />
            {children}
            <Toaster richColors invert duration={5000} />
        </main>
    );
}
