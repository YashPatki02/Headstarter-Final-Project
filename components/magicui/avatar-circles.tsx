"use client";

import React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../ui/tooltip";

interface AvatarCirclesProps {
    className?: string;
    numPeople?: number;
    avatarUrls: { username: string; url: string; profileLink: string }[];
}

const AvatarCircles = ({
    numPeople,
    className,
    avatarUrls,
}: AvatarCirclesProps) => {
    return (
        <div
            className={cn(
                "z-10 flex -space-x-3 rtl:space-x-reverse",
                className
            )}
        >
            {avatarUrls.map(({ username, url, profileLink }, index) => (
                <TooltipProvider key={index}>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link href={profileLink}>
                                <img
                                    className="h-10 w-10 rounded-full border-2 border-white dark:border-gray-800"
                                    src={url}
                                    width={40}
                                    height={40}
                                    alt={`Avatar ${index + 1}`}
                                />
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className="z-50">
                            <p className="text-xs text-muted-foreground">
                                @{username}
                            </p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ))}
            {numPeople && (
                <p className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-black text-center text-xs font-medium text-white hover:bg-gray-600 dark:border-gray-800 dark:bg-white dark:text-black">
                    +{numPeople}
                </p>
            )}
        </div>
    );
};

export default AvatarCircles;
