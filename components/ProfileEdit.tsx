"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetFooter,
    SheetClose,
} from "@/components/ui/sheet";

const ProfileEdit = () => {
    const [user, setUser] = useState({
        imageUrl: "https://randomuser",
        firstName: "Jane",
        lastName: "Doe",
        username: "janedoe",
        bio: "Passionate web developer with a focus on front-end technologies. I love creating interactive and user-friendly web applications.",
        linkedin: "janedoe-linkedin",
        github: "janedoe-github",
        portfolio: "janedoe-portfolio.com",
        skills: ["React", "Node", "GraphQL", "Next.js"],
        interests: [
            "Web Development",
            "Open Source",
            "AI & ML",
            "UI/UX Design",
        ],
    });

    const handleInputChange = (key: string, value: string) => {
        setUser({ ...user, [key]: value });
    };

    return (
        <div className="relative flex flex-col gap-2 w-full mb-20">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">Open</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle className="text-md">
                            Edit Profile
                        </SheetTitle>
                        <SheetDescription className="text-xs text-muted-foreground">
                            Make changes to your profile here. Click save when
                            you're done.
                        </SheetDescription>
                    </SheetHeader>

                    <div className="flex flex-col gap-4 py-4">
                        {/* First Name */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name" className="text-xs">
                                Name
                            </Label>
                            <div className="flex gap-2">
                                <Input
                                    id="firstName"
                                    value={user.firstName}
                                    placeholder="First Name"
                                    onChange={(e) =>
                                        handleInputChange(
                                            "firstName",
                                            e.target.value
                                        )
                                    }
                                />
                                <Input
                                    id="lastName"
                                    value={user.lastName}
                                    placeholder="Last Name"
                                    onChange={(e) =>
                                        handleInputChange(
                                            "lastName",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>

                        {/* Username */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="username" className="text-xs">
                                Username
                            </Label>
                            <Input
                                id="username"
                                value={user.username}
                                placeholder="Username"
                                onChange={(e) =>
                                    handleInputChange(
                                        "username",
                                        e.target.value
                                    )
                                }
                            />
                        </div>

                        {/* LinkedIn */}
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="socials" className="text-xs">
                                Socials
                            </Label>
                            <div className="flex">
                                <div className="flex items-center justify-center p-2 border-[1px] border-r-0 rounded-l-md bg-gray-200">
                                    <p className="text-xs">linkedin.com/in/</p>
                                </div>
                                <Input
                                    id="linkedin"
                                    value={user.linkedin}
                                    className="rounded-l-none"
                                    placeholder="LinkedIn"
                                    onChange={(e) =>
                                        handleInputChange(
                                            "linkedin",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                            <div className="flex">
                                <div className="flex items-center justify-center p-2 border-[1px] border-r-0 rounded-l-md bg-gray-200">
                                    <p className="text-xs">github.com/</p>
                                </div>
                                <Input
                                    id="linkedin"
                                    value={user.linkedin}
                                    className="rounded-l-none"
                                    placeholder="LinkedIn"
                                    onChange={(e) =>
                                        handleInputChange(
                                            "linkedin",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                            <div className="flex items-center justify-center p-2 border-[1px] border-t-[1px] border-r-[1px] border-b-[1px] rounded-r-md bg-gray-200">
                                <p className="text-xs">github.com/</p>
                                <Input
                                    id="github"
                                    value={user.github}
                                    placeholder="GitHub"
                                    onChange={(e) =>
                                        handleInputChange(
                                            "github",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>

                            <div className="flex items-center justify-center p-2 border-[1px] border-t-[1px] border-r-[1px] rounded-b-md bg-gray-200">
                                <p className="text-xs">https://</p>
                                <Input
                                    id="portfolio"
                                    value={user.portfolio}
                                    placeholder="Portfolio"
                                    onChange={(e) =>
                                        handleInputChange(
                                            "portfolio",
                                            e.target.value
                                        )
                                    }
                                />
                            </div>
                        </div>
                    </div>

                    {/* Footer Buttons */}
                    <SheetFooter className="flex gap-2">
                        <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button variant="ghost">Cancel</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
};

export default ProfileEdit;
