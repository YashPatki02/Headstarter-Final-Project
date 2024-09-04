"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { PERSONAL_MENU, PUBLIC_MENU } from "@/lib/constants";
import MenuItem from "./MenuItem";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import { Separator } from "./ui/separator";

const Sidebar = () => {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);
    //     if (typeof window !== "undefined") {
    //         const saved = window.localStorage.getItem("sidebarExpanded");
    //         return saved === null ? true : JSON.parse(saved);
    //     }
    //     return true; // default state if window is not defined
    // });

    // useEffect(() => {
    //     if (typeof window !== "undefined") {
    //         window.localStorage.setItem(
    //             "sidebarExpanded",
    //             JSON.stringify(isSidebarExpanded)
    //         );
    //     }
    // }, [isSidebarExpanded]);

    const toggleSidebar = () => {
        setIsSidebarExpanded(!isSidebarExpanded);
    };

    return isSidebarExpanded ? (
        <aside className="w-1/2 z-50 fixed inset-x-0 h-screen bg-white border-r-[1px] sm:relative sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
            <div className="flex flex-col gap-2 h-full justify-start mt-5 px-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <ChevronLeft
                                strokeWidth={2}
                                onClick={toggleSidebar}
                                className="w-5 h-5 sm:w-6 sm:h-6 mb-4 ml-2 cursor-pointer"
                            />
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>Close Sidebar</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <div className="flex flex-col gap-3 px-2 mt-4 mb-2 overflow-y-auto">
                    {PUBLIC_MENU.map((item, idx) => (
                        <MenuItem
                            key={idx}
                            item={item}
                            isSidebarExpanded={isSidebarExpanded}
                        />
                    ))}
                </div>
                <Separator orientation="horizontal" />
                <div className="flex flex-col gap-3 mt-2 px-2 overflow-y-auto">
                    {PERSONAL_MENU.map((item, idx) => (
                        <MenuItem
                            key={idx}
                            item={item}
                            isSidebarExpanded={isSidebarExpanded}
                        />
                    ))}
                </div>
            </div>
        </aside>
    ) : (
        <aside className="w-18 h-screen border-r-[1px]">
            <div className="flex flex-col gap-2 h-full items-center justify-start mt-5 px-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <ChevronRight
                                strokeWidth={2}
                                onClick={toggleSidebar}
                                className="w-5 h-5 sm:w-6 sm:h-6 mb-4 cursor-pointer"
                            />
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>Open Sidebar</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <div className="flex flex-col gap-4 px-2 md:px-6 mt-8 mb-4 overflow-y-auto ">
                    {PUBLIC_MENU.map((item, idx) => (
                        <MenuItem
                            key={idx}
                            item={item}
                            isSidebarExpanded={isSidebarExpanded}
                        />
                    ))}
                </div>
                <Separator orientation="horizontal" />
                <div className="flex flex-col mt-4 gap-4 md:px-6 overflow-y-auto">
                    {PERSONAL_MENU.map((item, idx) => (
                        <MenuItem
                            key={idx}
                            item={item}
                            isSidebarExpanded={isSidebarExpanded}
                        />
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
