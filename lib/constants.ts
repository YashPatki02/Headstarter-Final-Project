import { SideNavItem } from "./types";

// Public Menu
export const PUBLIC_MENU: SideNavItem[] = [
    {
        title: "Home",
        path: "/",
        icon: "home",
    },
    {
        title: "Projects",
        path: "/projects",
        icon: "folder-kanban",
    },
    {
        title: "Pitches",
        path: "/pitches",
        icon: "file-text",
    },
];

// Personal Menu
export const PERSONAL_MENU: SideNavItem[] = [
    {
        title: "Profile",
        path: "/profile",
        icon: "user",
    },
    // {
    //     title: "Projects",
    //     path: "/projects",
    //     icon: "folder-kanban",
    // },
    {
        title: "Messages",
        path: "/messages",
        icon: "mail",
    },
];

export const FOOTER_MENU: SideNavItem[] = [
    {
        title: "Settings",
        path: "/settings",
        icon: "settings",
    },
];

export const STATUS_MAP: Record<string, { text: string; color: string }> = {
    active: {
        text: "Active",
        color: "bg-green-500",
    },
    archived: {
        text: "Archived",
        color: "bg-red-500",
    },
    "open to collaboration": {
        text: "Open to Collaboration",
        color: "bg-cyan-500",
    },
};
