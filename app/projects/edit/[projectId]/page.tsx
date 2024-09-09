"use client";
import React, { useEffect, useState } from "react";
import ProjectEdit from "@/components/ProjectEdit";
import { ProjectType } from "@/lib/types";
import { useParams } from "next/navigation";

const EditProjectPage = () => {
    const { projectId } = useParams();

    console.log("Project ID:", projectId);

    // const [project, setProject] = useState<ProjectType | null>(null);
    const project = {
        id: 1,
        user_id: "101",
        name: "AI-Powered Chatbot",
        tech_stack: ["Python", "TensorFlow", "Flask"],
        description: `A chatbot that leverages NLP and machine learning to assist users with common tasks. A chatbot that leverages NLP and machine learning to assist users with common tasks. A chatbot that leverages NLP and machine learning to assist users with common tasks. A chatbot that leverages NLP and machine learning to assist users with common tasks. A chatbot that leverages NLP and machine learning to assist users with common tasks.`,
        github_link: "https://github.com/user/ai-chatbot",
        demo_link: "https://demo.ai-chatbot.com",
        image: null,
            // "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
            // "https://digitalnotebook.in/up/2023/06/Website-design.jpg",
        
        videos: [
            "https://www.youtube.com/watch?v=IENArFXpQD8",
            "https://www.youtube.com/watch?v=IENArFXpQD8",
        ],
        status: "open to collaboration",
        progress: {
            timeline: "Completed Phase 1: Basic NLP Model",
            upcoming_features: "Phase 2: Integrate Voice Recognition",
        },
        created_at: "2024-01-15T08:30:00Z",
        category: "AI/ML",
    };
    // useEffect(() => {
    //     if (id) {
    //         // Fetch project data from your API based on the project id
    //         // For demonstration, let's assume you have an API call to fetch the project by ID:
    //         fetch(`/api/projects/${id}`)
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 setProject(data); // Set the fetched project data
    //             });
    //     }
    // }, [id]);

    const handleUpdate = (updatedProject: ProjectType) => {
        // Logic for updating the project
        console.log("Project updated", updatedProject);
        // API call to update the project
    };

    return (
        <div>
            {/* {project ? ( */}
                <ProjectEdit project={project} onSubmit={handleUpdate} />
            {/* // ) : (
            //     <p>Loading...</p>
            // )} */}
        </div>
    );
};

export default EditProjectPage;
