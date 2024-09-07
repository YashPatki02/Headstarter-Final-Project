"use client";
import React, { useState } from "react";
import Link from "next/link";
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
import {
    CircleUser,
    Github,
    Copy,
    Check,
    Linkedin,
    Edit2,
    Eye,
} from "lucide-react";
import { useUser } from "@clerk/clerk-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { Tags } from "./ui/tags";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import ProfileProjectsCard from "./ProfileProjectsCard";
import { Textarea } from "./ui/textarea";

type ProjectTabTypes = "active" | "collaborations" | "archived";

const Profile = () => {
    const [tab, setTab] = useState("about");
    const { user } = useUser();
    const [copiedPlatform, setCopiedPlatform] = useState("");

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

    const [userProfile, setUserProfile] = useState({
        imageUrl: "https://randomuser",
        firstName: "Jane",
        lastName: "Doe",
        username: "janedoe",
        password: "password",
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

    const [updatedProfile, setUpdatedProfile] = useState({ ...userProfile });

    const handleInputChange = (field: string, value: string) => {
        setUpdatedProfile((prevUser) => {
            
                return {
                    ...prevUser,
                    [field]: value,
                };
            
        });
    };

    const handleTagsChange = (field: string, tags: string[]) => {
        setUpdatedProfile((prevUser) => {
            return {
                ...prevUser,
                [field]: tags,
            };
        });
    };

    const handleSave = () => {
        setUserProfile({ ...updatedProfile });
        setShowPassword(false);
    };

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
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
                <div className="flex flex-col gap-2 w-full mb-20">
                    <div className="relative flex flex-col sm:flex-row justify-between items-start sm:items-center bg-background rounded-lg p-4">
                        <div className="flex gap-4 items-center">
                            <Avatar className="w-20 h-20">
                                <AvatarImage src={userProfile?.imageUrl} />
                                <AvatarFallback>
                                    {userProfile?.firstName?.[0] ?? "U"}
                                    {userProfile?.lastName?.[0] ?? "N"}
                                </AvatarFallback>
                            </Avatar>

                            <div className="flex flex-col ml-2">
                                <h2 className="text-md">
                                    {userProfile?.firstName}{" "}
                                    {userProfile?.lastName}
                                </h2>
                                <p className="text-sm text-muted-foreground">
                                    @{userProfile?.username}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 mt-8 sm:mt-0 items-start mr-8 md:mr-32">
                            <div className="flex gap-2 items-center w-full">
                                <Linkedin className="w-4 h-4" />
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-xs text-muted-foreground">
                                        {userProfile.linkedin}
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
                                        {userProfile.github}
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
                                        {userProfile.portfolio}
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

                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    className="rounded-full self-start absolute top-3 right-3"
                                    variant="outline"
                                    size="icon"
                                    onClick={() => {
                                        setShowPassword(false);
                                        setUpdatedProfile({ ...userProfile });
                                    }}
                                >
                                    <Edit2 className="w-4 h-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle className="text-md">
                                        Edit Profile
                                    </SheetTitle>
                                    <SheetDescription className="text-xs text-muted-foreground">
                                        Make changes and save when you're done.
                                    </SheetDescription>
                                </SheetHeader>

                                <div className="flex flex-col gap-4 py-4">
                                    {/* First Name */}
                                    <div className="flex flex-col gap-1">
                                        <Label
                                            htmlFor="name"
                                            className="text-xs"
                                        >
                                            Name
                                        </Label>
                                        <div className="flex gap-2">
                                            <Input
                                                id="firstName"
                                                value={updatedProfile.firstName}
                                                placeholder="First Name"
                                                className="text-xs"
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "firstName",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            <Input
                                                id="lastName"
                                                value={updatedProfile.lastName}
                                                placeholder="Last Name"
                                                className="text-xs"
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
                                    <div className="flex flex-col gap-1">
                                        <Label
                                            htmlFor="username"
                                            className="text-xs"
                                        >
                                            Username
                                        </Label>
                                        <Input
                                            id="username"
                                            value={updatedProfile.username}
                                            placeholder="Username"
                                            className="text-xs"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "username",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    {/* Password */}
                                    <div className="flex flex-col gap-1">
                                        <Label
                                            htmlFor="password"
                                            className="text-xs"
                                        >
                                            Password
                                        </Label>
                                        <div className="relative">
                                            {/* Step 2: Conditionally change the type of input based on visibility */}
                                            <Input
                                                id="password"
                                                value={updatedProfile.password}
                                                placeholder="Password"
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                } // Toggle between "text" and "password"
                                                className="text-xs relative"
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "password",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                            {/* Step 3: Add a button or icon to toggle visibility */}
                                            <button
                                                type="button"
                                                onClick={
                                                    togglePasswordVisibility
                                                }
                                                className="absolute text-muted-foreground right-4 top-1/2 transform -translate-y-1/2 text-xs"
                                            >
                                                {showPassword ? "Hide" : "Show"}
                                            </button>
                                        </div>
                                    </div>

                                    {/* LinkedIn */}
                                    <div className="flex flex-col gap-1">
                                        <Label
                                            htmlFor="socials"
                                            className="text-xs"
                                        >
                                            Socials
                                        </Label>
                                        <div className="flex">
                                            <div className="flex items-center justify-center p-2 border-[1px] border-r-0 rounded-l-md bg-gray-200">
                                                <p className="text-xs">
                                                    linkedin.com/in/
                                                </p>
                                            </div>
                                            <Input
                                                id="linkedin"
                                                value={updatedProfile.linkedin}
                                                className="rounded-l-none text-xs"
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
                                                <p className="text-xs">
                                                    github.com/
                                                </p>
                                            </div>
                                            <Input
                                                id="github"
                                                value={updatedProfile.github}
                                                className="rounded-l-none text-xs"
                                                placeholder="GitHub"
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "github",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>

                                        <div className="flex">
                                            <div className="flex items-center justify-center p-2 border-[1px] border-r-0 rounded-l-md bg-gray-200">
                                                <p className="text-xs">
                                                    https://
                                                </p>
                                            </div>
                                            <Input
                                                id="portfolio"
                                                value={updatedProfile.portfolio}
                                                className="rounded-l-none text-xs"
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
                                        <Button
                                            type="submit"
                                            onClick={handleSave}
                                        >
                                            save changes
                                        </Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>

                    <div className="relative flex flex-col md:flex-row justify-between md:gap-32 items-start bg-background rounded-lg p-4">
                        <div className="flex flex-col gap-2 md:w-1/2">
                            <h2 className="text-sm">Bio</h2>
                            <p className="text-xs mb-2">{userProfile.bio}</p>
                            <div className="flex flex-col gap-2">
                                <h2 className="text-sm">Interests</h2>
                                <div className="flex flex-wrap gap-2">
                                    {userProfile.interests.map(
                                        (interest, idx) => (
                                            <Badge
                                                key={idx}
                                                variant="outline"
                                                className="font-normal text-xs text-nowrap"
                                            >
                                                {interest}
                                            </Badge>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 md:w-1/2">
                            <div className="flex flex-col gap-2 mt-4 md:mt-0">
                                <h2 className="text-sm">Top Skills</h2>
                                <div className="flex flex-wrap gap-2">
                                    {userProfile.skills.map((skill, idx) => (
                                        <Badge
                                            key={idx}
                                            variant="outline"
                                            className="font-normal text-xs text-nowrap"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
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
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button
                                    className="rounded-full self-start absolute top-3 right-3"
                                    variant="outline"
                                    size="icon"
                                    onClick={() =>
                                        setUpdatedProfile({ ...userProfile })
                                    }
                                >
                                    <Edit2 className="w-4 h-4" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle className="text-md">
                                        Edit Profile
                                    </SheetTitle>
                                    <SheetDescription className="text-xs text-muted-foreground">
                                        Make changes to your profile here. Click
                                        save when you're done.
                                    </SheetDescription>
                                </SheetHeader>

                                <div className="flex flex-col gap-4 py-4">
                                    {/* First Name */}
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="name"
                                            className="text-xs"
                                        >
                                            Bio
                                        </Label>
                                        <div className="flex gap-2">
                                            <Textarea
                                                id="bio"
                                                value={updatedProfile.bio}
                                                maxLength={150}
                                                placeholder="Enter a short bio"
                                                className="text-xs"
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        "bio",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>

                                    {/* Username */}
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="skills"
                                            className="text-xs"
                                        >
                                            Top Skills
                                        </Label>
                                        <Tags
                                            id="skills"
                                            tags={updatedProfile.skills}
                                            maxTags={5}
                                            onTagsChange={(tags) =>
                                                handleTagsChange(
                                                    "skills",
                                                    tags
                                                )
                                            }
                                            className="text-xs"
                                            placeholder="Add skills"
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="interests"
                                            className="text-xs"
                                        >
                                            Interests
                                        </Label>

                                        <Tags
                                            id="interests"
                                            tags={updatedProfile.interests}
                                            maxTags={5}
                                            onTagsChange={(tags) =>
                                                handleTagsChange(
                                                    "interests",
                                                    tags
                                                )
                                            }
                                            className="text-xs"
                                            placeholder="Add interests"
                                        />
                                    </div>
                                </div>

                                {/* Footer Buttons */}
                                <SheetFooter className="flex gap-2">
                                    <SheetClose asChild>
                                        <Button
                                            type="submit"
                                            onClick={handleSave}
                                        >
                                            save changes
                                        </Button>
                                    </SheetClose>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            )}

            {tab === "projects" && (
                <div className="flex flex-col gap-2 w-full mb-20">
                    <div className="flex gap-6 bg-background rounded-lg p-4">
                        <div className="flex w-full">
                            <Input
                                type="text"
                                placeholder="Search Projects"
                                className="w-full text-sm focus:outline-none rounded-r-none"
                            />
                            <Button
                                className="text-sm border-[1px] rounded-l-none border-primary"
                                variant="outline"
                            >
                                Search
                            </Button>
                        </div>
                        <Button className="text-sm">Create</Button>
                    </div>

                    <ProfileProjectsCard
                        tab="active"
                        title="Your Active Projects"
                        tabCollapsed={tabCollapsed.active}
                        toggleTabCollapse={toggleTabCollapse}
                        projects={projects}
                    />

                    <ProfileProjectsCard
                        tab="collaborations"
                        title="Your Active Collaborations"
                        tabCollapsed={tabCollapsed.collaborations}
                        toggleTabCollapse={toggleTabCollapse}
                        projects={projects}
                    />

                    <ProfileProjectsCard
                        tab="archived"
                        title="Your Archived Projects"
                        tabCollapsed={tabCollapsed.archived}
                        toggleTabCollapse={toggleTabCollapse}
                        projects={projects}
                    />
                </div>
            )}

            {tab === "pitches" && (
                <div className="flex flex-col gap-2 w-full mb-20">
                    <div className="flex items-center justify-center h-[50vh] bg-background rounded-lg p-4">
                        <div className="flex flex-col gap-2 items-center  p-6 rounded-md">
                            <h1 className="text-3xl text-primary">
                                pitches coming soon!
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Stay tuned for updates!
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {tab === "blogs" && (
                <div className="flex flex-col gap-2 w-full mb-20">
                    <div className="flex items-center justify-center h-[50vh] bg-background rounded-lg p-4">
                        <div className="flex flex-col gap-2 items-center p-6 rounded-md">
                            <h1 className="text-3xl text-primary">
                                blogs coming soon!
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Stay tuned for updates!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
