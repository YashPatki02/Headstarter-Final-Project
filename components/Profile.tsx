"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    CircleUser,
    Github,
    Copy,
    Check,
    Linkedin,
    UserPen,
    ChevronDown,
    ChevronUp,
} from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import ProjectCard from "./ProjectCard";
import StatusBadge from "./StatusBadge";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { Input } from "./ui/input";

const Profile = () => {
    const [tab, setTab] = useState("about");
    const { user } = useUser();

    const [copiedPlatform, setCopiedPlatform] = useState("");

    const handleCopy = (text: string, platform: string) => {
        let textCopy = text;
        if (platform === "portfolio") {
            textCopy = `https://${text}`;
        } else if (platform === "linkedin") {
            textCopy = `https://linkedin.com/in/${text}`;
        } else if (platform === "github") {
            textCopy = `https://github.com/${text}`;
        }

        navigator.clipboard.writeText(textCopy);
        setCopiedPlatform(platform);
        setTimeout(() => setCopiedPlatform(""), 2000); // Reset after 2 seconds
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
            status: "open to feature requests",
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
        {
            id: 4,
            user_id: 104,
            name: "IoT Home Automation",
            tech_stack: "Python, Raspberry Pi, MQTT",
            description:
                "A smart home system that allows users to control devices via a mobile app.",
            github_link: "https://github.com/user/home-automation",
            demo_link: "https://demo.home-automation.com",
            images: ["https://linktoimage1.com"],
            videos: ["https://linktovideo1.com"],
            status: "open to collaboration",
            progress: {
                timeline: "Phase 1: Basic Device Control",
                upcoming_features: "Phase 2: Voice Integration",
            },
            created_at: "2024-05-01T10:00:00Z",
            category: "IoT",
        },
        {
            id: 5,
            user_id: 105,
            name: "Personal Finance Manager",
            tech_stack: "Angular, Node.js, MySQL",
            description:
                "A web app to help users manage their personal finances, track expenses, and plan budgets.",
            github_link: "https://github.com/user/finance-manager",
            demo_link: "https://demo.finance-manager.com",
            images: ["https://linktoimage1.com"],
            videos: [],
            status: "open to feature requests",
            progress: {
                timeline: "Initial Release Completed",
                upcoming_features: "Integration with Bank APIs",
            },
            created_at: "2024-03-22T12:15:00Z",
            category: "Web Development",
        },
    ];

    type ProjectTabTypes = "active" | "collaborations" | "archived";

    const [tabCollapsed, setTabCollapsed] = useState({
        active: false,
        collaborations: false,
        archived: false,
    });

    const toggleTabCollapse = (tabName: ProjectTabTypes) => {
        setTabCollapsed((prevState) => ({
            ...prevState,
            [tabName]: !prevState[tabName],
        }));
    };

    return (
        <div className="flex flex-col gap-4 items-start mt-4">
            <div className="flex justify-between items-center w-full mb-2">
                <h1 className="text-2xl font-semibold">Profile</h1>
            </div>

            <div className="flex gap-6 md:gap-12 w-full">
                <div
                    onClick={() => setTab("about")}
                    className={`cursor-pointer pb-2 ${
                        tab === "about"
                            ? "text-primary border-b-2 border-primary"
                            : ""
                    }`}
                >
                    <h2 className="text- font-semibold">About</h2>
                </div>
                <div
                    onClick={() => setTab("projects")}
                    className={`cursor-pointer pb-2 ${
                        tab === "projects"
                            ? "text-primary border-b-2 border-primary"
                            : ""
                    }`}
                >
                    <h2 className="text- font-semibold">Projects</h2>
                </div>
                <div
                    onClick={() => setTab("pitches")}
                    className={`cursor-pointer pb-2 ${
                        tab === "pitches"
                            ? "text-primary border-b-2 border-primary"
                            : ""
                    }`}
                >
                    <h2 className="text- font-semibold">Pitches</h2>
                </div>
                <div
                    onClick={() => setTab("blogs")}
                    className={`cursor-pointer pb-2 ${
                        tab === "blogs"
                            ? "text-primary border-b-2 border-primary"
                            : ""
                    }`}
                >
                    <h2 className="text- font-semibold">Blogs</h2>
                </div>
            </div>

            {tab === "about" && (
                <div className="relative flex flex-col gap-2 w-full mb-20">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-background rounded-lg p-4">
                        <div className="flex gap-4 items-center">
                            <Avatar className="w-20 h-20">
                                <AvatarImage src={user?.imageUrl} />
                                <AvatarFallback>
                                    {user?.firstName?.[0] ?? "U"}
                                    {user?.lastName?.[0] ?? "U"}
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col ml-2">
                                <h2 className="text-md">Yash Patki</h2>
                                <p className="text-sm text-muted-foreground">
                                    @{user?.username}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mt-8 sm:mt-0 items-start mr-8 md:mr-16">
                            <div className="flex gap-2 items-center w-full">
                                <Linkedin className="w-4 h-4" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-xs text-muted-foreground">
                                        yourprofile
                                    </p>
                                    {copiedPlatform === "linkedin" ? (
                                        <Check className="w-4 h-4 ml-2 text-primary" />
                                    ) : (
                                        <Copy
                                            className="w-4 h-4 ml-2 text-muted-foreground cursor-pointer"
                                            onClick={() =>
                                                handleCopy(
                                                    "yourprofile",
                                                    "linkedin"
                                                )
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-2 items-center w-full">
                                <Github className="w-4 h-4" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-xs text-muted-foreground">
                                        yourprofile
                                    </p>
                                    {copiedPlatform === "github" ? (
                                        <Check className="w-4 h-4 ml-2 text-primary" />
                                    ) : (
                                        <Copy
                                            className="w-4 h-4 ml-2 text-muted-foreground cursor-pointer"
                                            onClick={() =>
                                                handleCopy(
                                                    "yourprofile",
                                                    "github"
                                                )
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                            <div className="flex gap-2 items-center w-full">
                                <CircleUser className="w-4 h-4" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-xs text-muted-foreground">
                                        yourwebsite.com
                                    </p>
                                    {copiedPlatform === "portfolio" ? (
                                        <Check className="w-4 h-4 ml-2 text-primary" />
                                    ) : (
                                        <Copy
                                            className="w-4 h-4 ml-2 text-muted-foreground cursor-pointer"
                                            onClick={() =>
                                                handleCopy(
                                                    "yourwebsite.com",
                                                    "portfolio"
                                                )
                                            }
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                        <Link
                            href="/projects"
                            className="self-start absolute -top-4 -right-2"
                        >
                            <Button
                                className="rounded-full "
                                // variant="ghost"
                                size="icon"
                            >
                                <UserPen className="w-4 h-4 ml-1" />
                            </Button>
                        </Link>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between md:gap-20 items-start bg-background rounded-lg p-4">
                        <div className="flex flex-col gap-2 md:w-1/2">
                            <h2 className="text-sm">Bio</h2>
                            <p className="text-xs mb-2">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed quis risus in nisl
                                fermentum aliquet. Suspendisse potenti. Nulla
                                facilisi. Nam scelerisque, purus nec ultricies.
                            </p>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-sm">Interests</h2>
                                <div className="flex flex-wrap gap-2">
                                    <Badge
                                        variant="outline"
                                        className="font-normal text-xs text-nowrap"
                                    >
                                        Web Development
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="font-normal text-xs text-nowrap"
                                    >
                                        Open Source
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="font-normal text-xs text-nowrap"
                                    >
                                        AI & ML
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="font-normal text-xs text-nowrap"
                                    >
                                        UI/UX Design
                                    </Badge>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:w-1/2">
                            <div className="flex flex-col gap-2 mt-4 md:mt-0">
                                <h2 className="text-sm">Top Skills</h2>
                                <div className="flex flex-wrap gap-2">
                                    <Badge
                                        variant="outline"
                                        className="font-normal text-xs text-nowrap"
                                    >
                                        React
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="font-normal text-xs text-nowrap"
                                    >
                                        Node
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="font-normal text-xs text-nowrap"
                                    >
                                        GraphQL
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="font-normal text-xs text-nowrap"
                                    >
                                        Next.js
                                    </Badge>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h2 className="text-sm">
                                    Project Collaborations
                                </h2>
                                <p className="text-xs">9</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h2 className="text-sm">Active Projects</h2>
                                <p className="text-xs">3</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {tab === "projects" && (
                <div className="flex flex-col gap-2 w-full mb-20">
                    <div className="flex gap-6 bg-background rounded-lg p-4">
                        <div className="flex gap-2 w-full">
                            <Input
                                type="text"
                                placeholder="Search Projects"
                                className="w-full text-sm focus:outline-none"
                            />
                            <Button className="text-sm" variant="secondary">
                                Search
                            </Button>
                        </div>
                        <Button className="text-sm">Create</Button>
                    </div>

                    <div className="flex flex-col gap-2 bg-background rounded-lg p-4">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleTabCollapse("active")}
                        >
                            <h2 className="text-lg font-semibold">
                                Your Active Projects
                            </h2>

                            {tabCollapsed.active ? (
                                <ChevronUp className="w-4 h-4  mr-8" />
                            ) : (
                                <ChevronDown className="w-4 h-4  mr-8" />
                            )}
                        </div>
                        {tabCollapsed.active && (
                            <>
                                <StatusBadge />
                                {/* <ScrollArea className="max-w-[250px] 460px:max-w-[380px] 540px:max-w-[480px] sm:max-w-lg md:max-w-[36rem] 900px:max-w-[44rem] lg:max-w-[50rem] xl:max-w-[68rem] 2xl:max-w-[85rem]"> */}

                                <div className="flex gap-2 justify-start flex-wrap pb-4">
                                    {projects.map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                        {/* <ScrollBar orientation="horizontal" /> */}
                        {/* </ScrollArea> */}
                    </div>

                    <div className="flex flex-col gap-2 w-full bg-background rounded-lg p-4">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleTabCollapse("collaborations")}
                        >
                            <h2 className="text-lg font-semibold">
                                Your Active Collaborations
                            </h2>
                            {tabCollapsed.collaborations ? (
                                <ChevronUp className="w-4 h-4 mr-8" />
                            ) : (
                                <ChevronDown className="w-4 h-4  mr-8" />
                            )}
                        </div>
                        {tabCollapsed.collaborations && (
                            <>
                                <StatusBadge />
                                {/* <ScrollArea className="max-w-[250px] 460px:max-w-[380px] 540px:max-w-[480px] sm:max-w-lg md:max-w-[36rem] 900px:max-w-[44rem] lg:max-w-[50rem] xl:max-w-[68rem] 2xl:max-w-[85rem]"> */}

                                <div className="flex gap-2 justify-start flex-wrap pb-4">
                                    {projects.map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                        {/* <ScrollBar orientation="horizontal" />
                        </ScrollArea> */}
                    </div>

                    <div className="flex flex-col gap-2 bg-background rounded-lg p-4 w-full">
                        <div
                            className="flex justify-between items-center cursor-pointer"
                            onClick={() => toggleTabCollapse("archived")}
                        >
                            <h2 className="text-lg font-semibold">
                                Your Archived Projects
                            </h2>
                            {tabCollapsed.archived ? (
                                <ChevronUp className="w-4 h-4  mr-8" />
                            ) : (
                                <ChevronDown className="w-4 h-4 mr-8" />
                            )}
                        </div>
                        {tabCollapsed.archived && (
                            <>
                                <StatusBadge />
                                {/* <ScrollArea className="max-w-[250px] 460px:max-w-[380px] 540px:max-w-[480px] sm:max-w-lg md:max-w-[36rem] 900px:max-w-[44rem] lg:max-w-[50rem] xl:max-w-[68rem] 2xl:max-w-[85rem]"> */}

                                <div className="flex gap-2 justify-start flex-wrap pb-4">
                                    {projects.map((project) => (
                                        <ProjectCard
                                            key={project.id}
                                            project={project}
                                        />
                                    ))}
                                </div>
                            </>
                        )}
                        {/* <ScrollBar orientation="horizontal" /> */}
                        {/* </ScrollArea> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
