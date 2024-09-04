import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
    title: "contribu.",
    description:
        "one-stop shop for finding projects, collaborators, and ideas.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${poppins.className}`}>
                    <SignedOut>
                        <Header />
                        <Hero />
                        <Features />
                        <Footer />
                    </SignedOut>
                    <SignedIn>
                        <div className="flex justify-start items-start overflow-hidden">
                            <Sidebar />
                            <div className="flex-1">
                                <div className="sticky top-0 z-10">
                                    <DashboardHeader />
                                </div>
                                <main className="flex flex-col pt-4 flex-grow">
                                    <div className="w-full overflow-x-auto">
                                        <div className="sm:h-[calc(99vh-80px)] overflow-auto ">
                                            <div className="w-full flex justify-center mx-auto overflow-auto h-[calc(100vh - 120px)] overflow-y-auto relative">
                                                <div className="w-full px-3 sm:px-10 ">
                                                    {children}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </main>
                            </div>
                        </div>
                    </SignedIn>
                </body>
            </html>
        </ClerkProvider>
    );
}
