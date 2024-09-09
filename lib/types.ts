import React from "react";

export type SideNavItem = {
    title: string;
    path: string;
    icon?: React.ReactNode;
};

export type ProjectType = {
    id?: number;
    user_id?: string;
    name: string;
    tech_stack: string[];
    description: string;
    github_link: string;
    demo_link: string;
    image: File | null;
    videos: string[];
    status: string;
    collaboration_skills?: string[];
    created_at?: string;
    progress?: Record<string, any>;
};
