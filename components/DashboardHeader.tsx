"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";
import { UserButton } from "@clerk/nextjs";
import { Merge, ChevronRight } from "lucide-react";
import { useSidebar } from "@/components/sidebarContext";

const DashboardHeader = () => {
    const selectedLayout = useSelectedLayoutSegment();
    const { scrollYProgress } = useScroll();
    // const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(
    //     window.localStorage.getItem("sidebarExpanded") === "true" || false
    // );

    // useEffect(() => {
    //     window.localStorage.setItem(
    //         "sidebarExpanded",
    //         isSidebarExpanded.toString()
    //     );
    // }, [isSidebarExpanded]);

    // const toggleSidebar = () => {
    //     setIsSidebarExpanded(!isSidebarExpanded);
    // };

    const { isSidebarExpanded, toggleSidebar } = useSidebar();

    return (
        <div className="flex items-center justify-between p-3 px-3 sm:px-6 w-full">
            <div className="flex gap-2 items-center">
                <ChevronRight
                    strokeWidth={2}
                    onClick={toggleSidebar}
                    className="sm:hidden w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-0 sm:mb-4 cursor-pointer"
                />
                <Link href="/">
                    <div className="flex flex-row gap-1 sm:gap-2 items-center justify-center">
                        <Merge
                            strokeWidth={3}
                            className="text-primary w-3 h-3 sm:w-4 sm:h-4"
                        />
                        <h1 className="text-md sm:text-lg font-bold">
                            contribu.
                        </h1>
                    </div>
                </Link>
            </div>

            <UserButton />
        </div>
    );
};

export default DashboardHeader;
