"use client";
import { Button } from "@/components/ui/button";
import { useUser, useAuth, SignedIn, SignedOut } from "@clerk/nextjs";
import { ArrowRight, Bell } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import StatusBadge from "@/components/StatusBadge";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
    const { getToken } = useAuth();
    const { user } = useUser();

    console.log(user);

    useEffect(() => {
        const checkUserInSupabase = async () => {
            const token = await getToken({ template: "supabase" });
            try {
                const response = await fetch("/api/checkUser", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        imageUrl: user?.imageUrl,
                        token,
                    }),
                });

                const data = await response.json();
                console.log(data.message);
            } catch (error) {
                console.error("Error checking user in Supabase:", error);
            }
        };

        if (user) {
            checkUserInSupabase();
        }
    }, [user]);

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
        //     status: "open to feature requests",
        //     progress: {
        //         timeline: "Initial Release Completed",
        //         upcoming_features: "Integration with Bank APIs",
        //     },
        //     created_at: "2024-03-22T12:15:00Z",
        //     category: "Web Development",
        // },
    ];

    return (
        <>
            <SignedIn>
                <div className="flex flex-col gap-4 items-start mt-4">
                    <div className="flex justify-between items-center w-full mb-2">
                        <div className="flex flex-col gap-0">
                            <h1 className="text-2xl font-semibold">Home</h1>
                            <p className="text-sm text-muted-foreground">
                                Welcome back, {user?.firstName}!
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <Link href="/messages">
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    className="relative shadow-md rounded-full"
                                >
                                    <p className="absolute -top-2 -right-2 text-xs font-semibold text-white bg-primary rounded-full w-5 h-5 flex items-center justify-center">
                                        30
                                    </p>
                                    <Bell />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-2 w-full">
                        <div className="flex flex-col gap-2 bg-background rounded-lg p-4 w-full">
                            <h2 className="text-md md:text-lg font-semibold">
                                Active Projects
                            </h2>
                            <h3 className="text-5xl md:text-6xl text-center text-primary mt-4">
                                3
                            </h3>
                            <Link
                                href="/projects"
                                className="flex justify-end w-full"
                            >
                                <Button
                                    className="text-xs text-muted-foreground"
                                    variant="ghost"
                                >
                                    View All
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-2  bg-background rounded-lg p-4">
                            <h2 className="text-md md:text-lg font-semibold">
                                Collab Requests
                            </h2>
                            <h3 className="text-5xl md:text-6xl text-center text-primary mt-4">
                                7
                            </h3>
                            <Link
                                href="/messages"
                                className="flex justify-end w-full"
                            >
                                <Button
                                    className="text-xs text-muted-foreground"
                                    variant="ghost"
                                >
                                    View All
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-2 bg-background rounded-lg p-4">
                            <h2 className="text-md md:text-lg font-semibold">
                                Feature Requests
                            </h2>
                            <h3 className="text-5xl md:text-6xl text-center text-primary mt-4">
                                23
                            </h3>
                            <Link
                                href="/messages"
                                className="flex justify-end w-full"
                            >
                                <Button
                                    className="text-xs text-muted-foreground"
                                    variant="ghost"
                                >
                                    View All
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full bg-background rounded-lg p-4">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">
                                Projects For You
                            </h2>

                            <Link href="/projects">
                                <Button
                                    className="text-xs text-muted-foreground"
                                    variant="ghost"
                                >
                                    View All
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </Link>
                        </div>
                        <StatusBadge />
                        <div className="flex flex-wrap gap-4 justify-start">
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 w-full bg-background rounded-lg p-4 mb-8">
                        <div className="flex justify-between items-center">
                            <h2 className="text-lg font-semibold">
                                My Projects
                            </h2>

                            <Link href="/projects">
                                <Button
                                    className="text-xs text-muted-foreground"
                                    variant="ghost"
                                >
                                    View All
                                    <ArrowRight className="w-4 h-4 ml-1" />
                                </Button>
                            </Link>
                        </div>
                        <StatusBadge />
                        <div className="flex flex-wrap gap-4 justify-start">
                            {projects.map((project) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </SignedIn>
            <SignedOut>
                <Hero />
                <Features />
            </SignedOut>
        </>
    );
}
