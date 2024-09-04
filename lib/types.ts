import React from "react";

export type SideNavItem = {
    title: string;
    path: string;
    icon?: React.ReactNode;
};

export type ProjectType = {
    id: number;
    user_id: number;
    name: string;
    tech_stack: string;
    description: string;
    github_link: string;
    demo_link: string;
    images: string[];
    videos: string[];
    status: string;
    progress: {
        timeline: string;
        upcoming_features: string;
    };
    created_at: string;
    category: string;
};