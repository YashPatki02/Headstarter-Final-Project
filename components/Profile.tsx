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
} from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
                <div className="relative flex flex-col gap-2 w-full bg-background rounded-lg p-4 mb-20">
                    <div className="flex justify-between items-center">
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
                        <div className="flex flex-col gap-1 items-start mr-8">
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
                    {/* <div className="flex flex-wrap gap-4 justify-start">
                        {projects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div> */}
                </div>
            )}
        </div>
    );
};

export default Profile;
