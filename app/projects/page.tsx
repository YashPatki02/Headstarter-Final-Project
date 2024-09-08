"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProfileProjectsCard from "@/components/ProfileProjectsCard";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const ProjectsPage = () => {
    const [filter, setFilter] = useState<string | null>(null);

    const handleFilter = (filterOption: string) => {
        setFilter(filterOption);
        // Add your filter logic here
        console.log(`Selected filter: ${filterOption}`);
    };

    const projects = [
        {
            id: 1,
            user_id: 101,
            name: "AI-Powered Chatbot",
            tech_stack: "Python, TensorFlow, Flask",
            description:
                "A chatbot that leverages NLP and machine learning to assist users with common tasks.",
            github_link: "https://github.com/user/ai-chatbot",
            demo_link: "https://demo.ai-chatbot.com",
            images: ["https://linktoimage1.com", "https://linktoimage2.com"],
            videos: ["https://linktovideo1.com"],
            status: "open to collaboration",
            progress: {
                timeline: "Completed Phase 1: Basic NLP Model",
                upcoming_features: "Phase 2: Integrate Voice Recognition",
            },
            created_at: "2024-01-15T08:30:00Z",
            category: "AI/ML",
        },
        {
            id: 2,
            user_id: 102,
            name: "Mobile Workout Tracker",
            tech_stack: "React Native, Node.js, MongoDB",
            description:
                "A cross-platform app for tracking workouts, setting goals, and monitoring progress.",
            github_link: "https://github.com/user/workout-tracker",
            demo_link: "https://demo.workout-tracker.com",
            images: ["https://linktoimage1.com"],
            videos: [],
            status: "active",
            progress: {
                timeline: "Completed MVP",
                upcoming_features: "Add Social Sharing Feature",
            },
            created_at: "2024-02-20T14:20:00Z",
            category: "Mobile Development",
        },
        {
            id: 3,
            user_id: 103,
            name: "E-Commerce Platform",
            tech_stack: "Next.js, PostgreSQL, AWS",
            description:
                "A scalable e-commerce platform with a focus on performance and security.",
            github_link: "https://github.com/user/ecommerce-platform",
            demo_link: "https://demo.ecommerce-platform.com",
            images: ["https://linktoimage1.com", "https://linktoimage2.com"],
            videos: ["https://linktovideo1.com"],
            status: "archived",
            progress: {
                timeline: "Completed Full Deployment",
                upcoming_features: "N/A",
            },
            created_at: "2023-11-10T09:45:00Z",
            category: "Full-Stack Development",
        },
        // {
        //     id: 4,
        //     user_id: 104,
        //     name: "IoT Home Automation",
        //     tech_stack: "Python, Raspberry Pi, MQTT",
        //     description:
        //         "A smart home system that allows users to control devices via a mobile app.",
        //     github_link: "https://github.com/user/home-automation",
        //     demo_link: "https://demo.home-automation.com",
        //     images: ["https://linktoimage1.com"],
        //     videos: ["https://linktovideo1.com"],
        //     status: "open to collaboration",
        //     progress: {
        //         timeline: "Phase 1: Basic Device Control",
        //         upcoming_features: "Phase 2: Voice Integration",
        //     },
        //     created_at: "2024-05-01T10:00:00Z",
        //     category: "IoT",
        // },
        // {
        //     id: 5,
        //     user_id: 105,
        //     name: "Personal Finance Manager",
        //     tech_stack: "Angular, Node.js, MySQL",
        //     description:
        //         "A web app to help users manage their personal finances, track expenses, and plan budgets.",
        //     github_link: "https://github.com/user/finance-manager",
        //     demo_link: "https://demo.finance-manager.com",
        //     images: ["https://linktoimage1.com"],
        //     videos: [],
        //     status: "active",
        //     progress: {
        //         timeline: "Initial Release Completed",
        //         upcoming_features: "Integration with Bank APIs",
        //     },
        //     created_at: "2024-03-22T12:15:00Z",
        //     category: "Web Development",
        // },
    ];

    return (
        <div className="flex flex-col gap-4 items-start mt-4">
            <div className="flex justify-between items-center w-full mb-2">
                <div className="flex flex-col gap-4 w-full">
                    <h1 className="text-2xl font-semibold">Projects</h1>

                    <div className="flex flex-col gap-2 w-full mb-20">
                        <div className="flex gap-6 bg-background rounded-lg p-4">
                            <div className="flex w-full">
                                <Input
                                    type="text"
                                    placeholder="Search Projects"
                                    className="w-full text-sm rounded-r-none"
                                />
                                <Button
                                    className="text-sm border-[1px] w-32 rounded-l-none"
                                >
                                    Search
                                </Button>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            className="text-sm border-[1px] ml-4 w-32"
                                            variant="outline"
                                        >
                                            {filter
                                                ? `Filter: ${filter}`
                                                : "Filter"}
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel className="text-xs">
                                            Filter by
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem
                                            className="text-xs"
                                            onClick={() => handleFilter("Date")}
                                        >
                                            Date
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            className="text-xs"
                                            onClick={() => handleFilter("Name")}
                                        >
                                            Name
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            className="text-xs"
                                            onClick={() =>
                                                handleFilter("Category")
                                            }
                                        >
                                            Category
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            className="text-xs"
                                            onClick={() =>
                                                handleFilter("Status")
                                            }
                                        >
                                            Status
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>

                        <ProfileProjectsCard
                            collapsible={false}
                            projects={projects}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
