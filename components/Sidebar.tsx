"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { PERSONAL_MENU, PUBLIC_MENU, FOOTER_MENU } from "@/lib/constants";
import MenuItem from "./MenuItem";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import { Separator } from "./ui/separator";
import { useSidebar } from "@/components/sidebarContext";

const Sidebar = () => {
    // const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(
    //     window.localStorage.getItem("sidebarExpanded") === "true" || false
    // );

    // useEffect(() => {
    //     window.localStorage.setItem("sidebarExpanded", isSidebarExpanded.toString());
    // }, [isSidebarExpanded]);

    // const toggleSidebar = () => {
    //     setIsSidebarExpanded(!isSidebarExpanded);
    // };

    const { isSidebarExpanded, toggleSidebar } = useSidebar();

    return isSidebarExpanded ? (
        <aside className="w-1/2 z-40 fixed inset-x-0 h-screen bg-white border-r-[1px] sm:relative sm:w-1/3 md:w-1/4 lg:w-1/6">
            <div className="flex flex-col gap-2 h-full justify-start mt-5 px-2">
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <ChevronLeft
                                strokeWidth={2}
                                onClick={toggleSidebar}
                                className="w-4 h-4 sm:w-5 sm:h-5 mb-4 ml-4 cursor-pointer"
                            />
                        </TooltipTrigger>
                        <TooltipContent side="right">
                            <p>Close Sidebar</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>

                <div className="flex flex-col gap-3 px-2 mt-1 mb-2 overflow-y-auto">
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
                <Separator orientation="horizontal" />
                <div className="fixed bottom-4 flex flex-col gap-3 mt-2 px-2 overflow-y-auto">
                    {FOOTER_MENU.map((item, idx) => (
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
        <>
            <aside className="hidden sm:flex w-18 h-screen border-r-[1px]">
                <div className="flex flex-col gap-2 h-full items-center justify-start mt-5 px-2">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ChevronRight
                                    strokeWidth={2}
                                    onClick={toggleSidebar}
                                    className="w-4 h-4 sm:w-5 sm:h-5 mb-4 cursor-pointer"
                                />
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Open Sidebar</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>

                    <div className="flex flex-col gap-3 px-2 md:px-6 mt-4 mb-4 overflow-y-auto ">
                        {PUBLIC_MENU.map((item, idx) => (
                            <MenuItem
                                key={idx}
                                item={item}
                                isSidebarExpanded={isSidebarExpanded}
                            />
                        ))}
                    </div>
                    <Separator orientation="horizontal" />
                    <div className="flex flex-col mt-4 gap-3 md:px-6 overflow-y-auto">
                        {PERSONAL_MENU.map((item, idx) => (
                            <MenuItem
                                key={idx}
                                item={item}
                                isSidebarExpanded={isSidebarExpanded}
                            />
                        ))}
                    </div>
                    <Separator orientation="horizontal" />
                    <div className="fixed bottom-4 flex flex-col gap-3 mt-4 px-2 overflow-y-auto">
                        {FOOTER_MENU.map((item, idx) => (
                            <MenuItem
                                key={idx}
                                item={item}
                                isSidebarExpanded={isSidebarExpanded}
                            />
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
