"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
    ArrowUpRight,
    Check,
    Code,
    Ellipsis,
    GitPullRequest,
} from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

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
        tech_stack: ["Python", "TensorFlow", "Flask"],
        description: `A chatbot that leverages NLP and machine learning to assist users with common tasks. A chatbot that leverages NLP and machine learning to assist users with common tasks. A chatbot that leverages NLP and machine learning to assist users with common tasks. A chatbot that leverages NLP and machine learning to assist users with common tasks. A chatbot that leverages NLP and machine learning to assist users with common tasks.`,
        github_link: "https://github.com/user/ai-chatbot",
        demo_link: "https://demo.ai-chatbot.com",
        images: [
            // "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg",
            // "https://digitalnotebook.in/up/2023/06/Website-design.jpg",
        ],
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

    return (
        <div className="flex flex-col gap-4 items-start mt-4 mb-20">
            <div className="flex justify-between items-center w-full mb-2">
                <div className="flex flex-col w-full gap-4">
                    <div className="flex sm:mr-6 items-center justify-between">
                        <h1 className="text-2xl font-semibold">
                            {project.name}
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
                                        change status:
                                        <div className="flex flex-col -space-y-2 items-start ml-2">
                                            <div className="relative flex items-center">
                                                {project.status ===
                                                    "active" && (
                                                    <Check className="absolute -left-2 w-4 h-4" />
                                                )}
                                                <Button
                                                    variant="ghost"
                                                    className="hover:text-primary"
                                                >
                                                    <div className="h-2 w-2 mr-1 rounded-full bg-green-500"></div>
                                                    active
                                                </Button>
                                            </div>
                                            <div className="relative flex items-center">
                                                {project.status ===
                                                    "open to collaboration" && (
                                                    <Check className="absolute -left-2 w-4 h-4" />
                                                )}
                                                <Button
                                                    variant="ghost"
                                                    className="hover:text-primary"
                                                >
                                                    <div className="h-2 w-2 mr-1 rounded-full bg-cyan-500"></div>
                                                    open to collaboration
                                                </Button>
                                            </div>
                                            <div className="relative flex items-center">
                                                {project.status ===
                                                    "archived" && (
                                                    <Check className="absolute -left-2 w-4 h-4" />
                                                )}
                                                <Button
                                                    variant="ghost"
                                                    className="hover:text-primary"
                                                >
                                                    <div className="h-2 w-2 mr-1 rounded-full bg-red-500"></div>
                                                    archived
                                                </Button>
                                            </div>
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
                    <div className="flex gap-4 items-center justify-between">
                        <div className="flex gap-12 items-center text-xs">
                            <div className="flex gap-4 items-center text-muted-foreground">
                                Created by
                                <AvatarCircles avatarUrls={[avatarUrls[0]]} />
                            </div>
                            <div className="flex gap-4 items-center text-muted-foreground">
                                Contributions by
                                <AvatarCircles
                                    avatarUrls={avatarUrls.slice(1)}
                                />
                            </div>
                        </div>

                        <Button asChild variant="outline">
                            <Link href="/projects">
                                send collab request
                                <GitPullRequest size={16} className="ml-2" />
                            </Link>
                        </Button>
                    </div>
                    <div className="flex items-center gap-8">
                        <p className="text-xs text-muted-foreground">
                            Tech Stack
                        </p>
                        <div className="flex gap-2">
                            {project.tech_stack?.map((tech, idx) => (
                                <Badge
                                    variant="outline"
                                    className="font-normal border-primary text-sm"
                                    key={idx}
                                >
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 items-center">
                        <Button asChild variant="outline">
                            <Link href={project?.github_link}>
                                code
                                <Code size={16} className="ml-2" />
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href={project?.demo_link}>
                                demo
                                <ArrowUpRight size={16} className="ml-2" />
                            </Link>
                        </Button>
                    </div>
                    <div className="flex gap-8 mt-8 items-center">
                        <p className="text-xs text-muted-foreground">
                            Description
                        </p>
                        <p className="text-sm text-wrap">
                            {project.description}
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 w-full">
                <p className="text-xs text-muted-foreground">Gallery</p>
                <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* <HeroVideoDialog
                        className="dark:hidden block"
                        animationStyle="from-center"
                        videoSrc="https://www.youtube.com/embed/xrdT2mm-dio?si=BaHAZmegi_d85Q1o"
                        thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                        thumbnailAlt="Project Video"
                    /> */}
                    {project.images?.map((image, idx) => (
                        <Image
                            key={idx}
                            src={image}
                            width={1196}
                            height={674}
                            alt="project image"
                            className="rounded-lg h-72 self-center object-cover"
                        />
                    ))}
                    {project.videos?.map((video, idx) => (
                        <HeroVideoDialog
                            key={idx}
                            animationStyle="from-center"
                            videoSrc={video}
                            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
                            thumbnailAlt="Project Video"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndividualProject;
