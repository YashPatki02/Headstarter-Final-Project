"use client";
import React from "react";
import { useSidebar } from "@/components/sidebarContext";

interface MarginWrapperProps {
    children: React.ReactNode;
}

const MarginWrapper: React.FC<MarginWrapperProps> = ({ children }) => {
    const { isSidebarExpanded } = useSidebar();

    return isSidebarExpanded ? (
        <div className="ml-0 sm:ml-[33.33vw] md:ml-[24vw] lg:ml-[16.66vw]">
            {children}
        </div>
    ) : (
        <div className="sm:w-[calc(100vw-5rem)] sm:ml-20">
            {children}
        </div>
    );
};

export default MarginWrapper;
