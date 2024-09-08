import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import StatusBadge from "./StatusBadge";
import ProjectCard from "./ProjectCard";

type Project = {
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

type ProjectTabTypes = "active" | "collaborations" | "archived";

type ProjectCardProps = {
    collapsible?: boolean;
    tab?: ProjectTabTypes;
    title?: string;
    tabCollapsed?: boolean;
    toggleTabCollapse?: (tab: ProjectTabTypes) => void;
    projects: Project[];
};

const ProfileProjectsCard = ({
    collapsible,
    tab,
    title,
    tabCollapsed,
    toggleTabCollapse,
    projects,
}: ProjectCardProps) => {
    return collapsible ? (
        <div className="flex flex-col gap-2 bg-background rounded-lg p-4">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => {
                    if (toggleTabCollapse) {
                        toggleTabCollapse(tab || "active");
                    }
                }}
            >
                <h2 className="text-lg font-semibold">{title}</h2>

                {tabCollapsed ? (
                    <ChevronUp className="w-4 h-4  mr-8" />
                ) : (
                    <ChevronDown className="w-4 h-4  mr-8" />
                )}
            </div>
            {tabCollapsed && (
                <>
                    <StatusBadge />

                    <div className="flex gap-2 justify-start flex-wrap pb-4">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </>
            )}
        </div>
    ) : (
        <div className="flex flex-col gap-2 bg-background rounded-lg p-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <StatusBadge />

            <div className="flex gap-2 justify-start flex-wrap pb-4">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default ProfileProjectsCard;
