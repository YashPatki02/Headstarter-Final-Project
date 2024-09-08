import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/nextjs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import { SidebarProvider } from "@/components/sidebarContext";
import MarginWrapper from "@/components/MarginWrapper";

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
                        {children}
                        <Footer />
                    </SignedOut>

                    <SignedIn>
                        <SidebarProvider>
                            <div className="flex justify-start items-start overflow-y-hidden">
                                <Sidebar />
                                <div className="flex-1">
                                    <MarginWrapper>
                                        <div className="sticky top-0 z-20">
                                            <DashboardHeader />
                                        </div>
                                        <main className="flex flex-col flex-grow">
                                            <div className="w-full overflow-x-auto">
                                                <div className="sm:h-[calc(98vh-50px)] overflow-auto">
                                                    <div className="w-full flex justify-center mx-auto overflow-auto h-[calc(99vh - 120px)] overflow-y-hidden relative">
                                                        <div className="w-full pt-3 px-4 sm:px-6 bg-[#F5F6FA]">
                                                            {children}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </main>
                                    </MarginWrapper>
                                </div>
                            </div>
                        </SidebarProvider>
                    </SignedIn>
                </body>
            </html>
        </ClerkProvider>
    );
}
