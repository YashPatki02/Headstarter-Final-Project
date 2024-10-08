"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SideNavItem } from "@/lib/types";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import {
    Home,
    FileText,
    User,
    Folder,
    Mail,
    FolderKanban,
    Settings,
} from "lucide-react";

const MenuItem = ({
    item,
    isSidebarExpanded,
}: {
    item: SideNavItem;
    isSidebarExpanded: boolean;
}) => {
    const pathname = usePathname();
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    const iconMap: Record<string, JSX.Element> = {
        home: <Home strokeWidth={2} />,
        "folder-kanban": <FolderKanban strokeWidth={2} />,
        "file-text": <FileText strokeWidth={2} />,
        user: <User strokeWidth={2} />,
        folder: <Folder strokeWidth={2} />,
        mail: <Mail strokeWidth={2} />,
        settings: <Settings strokeWidth={2} />,
    };

    return (
        <div>
            {isSidebarExpanded ? (
                <Link
                    href={item.path}
                    className={`flex flex-row gap-4 items-center justify-start p-2 px-4 rounded-lg`}
                >
                    <div
                        className={`flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 ${
                            pathname.split("/")[1] === item.path.split("/")[1]
                                ? "text-primary"
                                : ""
                        }`}
                    >
                        {iconMap[item.icon as string]}
                    </div>
                    <p
                        className={`text-sm ${
                            pathname.split("/")[1] === item.path.split("/")[1]
                                ? "text-primary font-semibold"
                                : ""
                        }`}
                    >
                        {item.title.toLowerCase()}
                    </p>
                </Link>
            ) : (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Link
                                href={item.path}
                                className={`flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5  ${
                                    pathname.split("/")[1] ===
                                    item.path.split("/")[1]
                                        ? "text-primary"
                                        : ""
                                }`}
                            >
                                {iconMap[item.icon as string]}
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent className="z-[100]" side="bottom" sideOffset={12}>
                            <span>{item.title.toLowerCase()}</span>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            )}
        </div>
    );
};

export default MenuItem;
