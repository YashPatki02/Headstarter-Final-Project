import React, { useState } from "react";
import { ProjectType } from "@/lib/types";
import ProjectCard from "./ProjectCard";

interface CardsContainerProps {
    projects: ProjectType[];
    showAll?: boolean;
    horizontalScroll?: boolean;
    showMoreButton?: boolean;
}

const CardsContainer: React.FC<CardsContainerProps> = ({
    projects,
    showAll = false,
    horizontalScroll = false,
    showMoreButton = false,
}) => {
    const [visibleProjects, setVisibleProjects] = useState<number>(
        showAll ? projects.length : 4
    );

    const handleShowMore = () => {
        setVisibleProjects((prev) =>
            prev + 4 > projects.length ? projects.length : prev + 4
        );
    };

    return (
        <div>
            {showMoreButton && (
                <button
                    className="mb-4 text-blue-500 underline"
                    onClick={handleShowMore}
                    disabled={visibleProjects >= projects.length}
                >
                    Show More
                </button>
            )}
            <div
                className={`flex ${
                    horizontalScroll ? "overflow-x-auto" : "flex-wrap"
                } gap-4 justify-start`}
            >
                {projects.slice(0, visibleProjects).map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default CardsContainer;
