"use client";
import React from "react";
import ProjectEdit from "@/components/ProjectEdit";
import { ProjectType } from "@/lib/types";

const CreateProjects = () => {
    const handleCreate = (project: ProjectType) => {
        // Logic for creating a new project
        console.log("Project created", project);
        // API call to create the project
    };

    return (
        <ProjectEdit
            onSubmit={handleCreate} // Create mode
        />
    );
};

export default CreateProjects;
