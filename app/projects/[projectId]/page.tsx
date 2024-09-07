"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Code, Ellipsis } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AvatarCircles from "@/components/magicui/avatar-circles";
import Link from "next/link";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

const IndividualProject = () => {
    const { projectId: projectId } = useParams();    

    const avatarUrls = [
        {
            username: "user1",
            url: "https://avatars.githubusercontent.com/u/16860528",
            profileLink: "https://avatars.githubusercontent.com/u/16860528",
        },
        {
            username: "user1",
            url: "https://avatars.githubusercontent.com/u/20110627",
            profileLink: "https://avatars.githubusercontent.com/u/20110627",
        },
        {
            username: "user1",
            url: "https://avatars.githubusercontent.com/u/106103625",
            profileLink: "https://avatars.githubusercontent.com/u/106103625",
        },
        {
            username: "user1",
            url: "https://avatars.githubusercontent.com/u/59228569",
            profileLink: "https://avatars.githubusercontent.com/u/59228569",
        },
    ];

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
                <div className="flex flex-col w-full gap-2">
                    <div className="flex sm:mr-6 items-center justify-between">
                        <h1 className="text-2xl font-semibold">
                            {project.name} - #{projectId}
                        </h1>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Ellipsis size={24} />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="bottom" align="end">
                                <DropdownMenuLabel>options</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>edit.</DropdownMenuItem>
                                <DropdownMenuItem>
                                    <div className="flex flex-col items-start">
                                        change status.
                                        <div className="flex flex-col -space-y-2 items-start ml-2">
                                            <Button
                                                variant="ghost"
                                                className="hover:text-primary"
                                            >
                                                <div className="h-2 w-2 mr-1 rounded-full bg-green-500"></div>
                                                open to collaboration
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                className="hover:text-primary"
                                            >
                                                <div className="h-2 w-2 mr-1 rounded-full bg-cyan-500"></div>
                                                open to feature requests
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                className="hover:text-primary"
                                            >
                                                <div className="h-2 w-2 mr-1 rounded-full bg-red-500"></div>
                                                archived
                                            </Button>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />

                                <DropdownMenuItem className="text-destructive">
                                    delete.
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {project.description}
                    </p>
                    <div className="flex gap-12 items-center text-xs mt-2">
                        <div className="flex gap-2 items-center">
                            Created by
                            <AvatarCircles avatarUrls={[avatarUrls[0]]} />
                        </div>
                        <div className="flex gap-2 items-center">
                            Contributions by
                            <AvatarCircles avatarUrls={avatarUrls.slice(1)} />
                        </div>
                    </div>

                    <div className="flex gap-4 items-center mt-4">
                        <Button asChild variant="outline">
                            <Link href={project.github_link}>
                                code
                                <Code size={16} className="ml-2" />
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href={project.demo_link}>
                                demo
                                <ArrowUpRight size={16} className="ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-1/2">
                <HeroVideoDialog
                    className="dark:hidden block"
                    animationStyle="from-center"
                    videoSrc={project.videos[0]}
                    thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                    thumbnailAlt="Hero Video"
                />
            </div>
        </div>
    );
};

export default IndividualProject;
