"use client";
import React from "react";
import { useParams } from "next/navigation";

const IndividualProject = () => {
    const { projectId: projectId } = useParams();

    const project = {
        id: 1,
        user_id: 101,
        name: "AI-Powered Chatbot",
        tech_stack: "Python, TensorFlow, Flask",
        description:
            "A chatbot that leverages NLP and machine learning to assist users with common tasks.",
        github_link: "https://github.com/user/ai-chatbot",
        demo_link: "https://demo.ai-chatbot.com",
        images: ["https://linktoimage1.com", "https://linktoimage2.com"],
        videos: ["https://www.youtube.com/watch?v=IENArFXpQD8"],
        status: "open to collaboration",
        progress: {
            timeline: "Completed Phase 1: Basic NLP Model",
            upcoming_features: "Phase 2: Integrate Voice Recognition",
        },
        created_at: "2024-01-15T08:30:00Z",
        category: "AI/ML",
    };

    return (
        <div className="flex flex-col gap-4 items-start mt-4">
            <div className="flex justify-between items-center w-full mb-2">
                <div className="flex flex-col gap-2">
                    <h1 className="text-2xl font-semibold">
                        {project.name} - #{projectId}
                    </h1>
                    <p className="text-sm text-muted-foreground">
                        {project.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default IndividualProject;
