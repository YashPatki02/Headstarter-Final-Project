"use client";
import React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { cn } from "@/lib/utils";
import { useScroll } from "framer-motion";
import { UserButton } from "@clerk/nextjs";
import { Merge } from "lucide-react";

const DashboardHeader = () => {
    const selectedLayout = useSelectedLayoutSegment();
    const { scrollYProgress } = useScroll();

    return (
        <div className="flex items-center justify-between p-3 px-3 sm:px-6 w-full">
            <Link href="/">
                <div className="flex flex-row gap-1 sm:gap-2 items-center justify-center">
                    <Merge strokeWidth={3} className="text-primary w-3 h-3 sm:w-4 sm:h-4" />
                    <h1 className="text-md sm:text-lg font-bold">contribu.</h1>
                </div>
            </Link>
            <UserButton />
        </div>
    );
};

export default DashboardHeader;
