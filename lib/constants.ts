import { SideNavItem } from "./types";

// Public Menu
export const PUBLIC_MENU: SideNavItem[] = [
    {
        title: "Dashboard",
        path: "/",
        icon: "home",
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
    {
        title: "Projects",
        path: "/projects",
        icon: "folder",
    },
    {
        title: "Messages",
        path: "/messages",
        icon: "mail",
    },
];
