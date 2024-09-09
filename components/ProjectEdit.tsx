"use client";
import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Tags } from "./ui/tags";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { STATUS_MAP } from "@/lib/constants";
import { ProjectType } from "@/lib/types";
import { Link2, UploadIcon, X } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

type ProjectEditProps = {
    project?: ProjectType; // Optional project prop for editing
    onSubmit: (project: ProjectType) => void; // Submit handler
};

const ProjectEdit: React.FC<ProjectEditProps> = ({ project, onSubmit }) => {
    const [projectData, setProjectData] = useState<ProjectType>({
        name: "",
        tech_stack: [],
        description: "",
        github_link: "",
        demo_link: "",
        image: null,
        videos: [],
        status: "open to collaboration",
        collaboration_skills: [],
    });

    // Local state for storing selected files and image errors
    const [imageError, setImageError] = useState<{
        type: string;
        error: boolean;
    }>({
        type: "",
        error: false,
    });
    const [videoError, setVideoError] = useState<boolean>(false);
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [selectedVideos, setSelectedVideos] = useState<string[]>([]); // Store video URLs locally

    // If a project is passed, prefill the form
    useEffect(() => {
        if (project) {
            setProjectData(project);
        }
    }, [project]);

    useEffect(() => {
        if (selectedImages.length < 3) {
            setImageError({ type: "", error: false });
        }
    }, [selectedImages]);

    // Handle input change for regular fields
    const handleInputChange = (field: string, value: string | string[]) => {
        setProjectData({ ...projectData, [field]: value });
    };

    // Handle tech stack or skills tags change
    const handleTagsChange = (field: string, tags: string[]) => {
        setProjectData({ ...projectData, [field]: tags });
    };

    const handleAddImage = (event: any) => {
        console.log("IMAGE ", event.target.files[0]);

        if (event.target.files[0].size > 1024 * 1024) {
            setImageError({ type: "size", error: true });
            return;
        }

        setProjectData({
            ...projectData,
            image: event.target.files[0],
        });
    };

    const handleAddVideo = (url: string) => {
        setVideoError(false);
        if (url.trim() === "" || !url.includes("youtube.com")) {
            setVideoError(true);
            return;
        }
        setSelectedVideos((prevVideos) => [...prevVideos, url]);
    };

    // Handle the form submission: upload images and update project data
    const handleSubmit = async () => {
        try {
            const uploadedImages: string[] = [];

            // Upload selected images to Supabase (or any storage service) during form submission
            for (const file of selectedImages) {
                const fileName = `${Date.now()}_${file.name}`; // Generate unique file name

                // Upload image to Supabase bucket
                // const { data, error } = await supabase.storage
                //     .from("your-bucket-name")
                //     .upload(`public/${fileName}`, file);

                // if (error) {
                //     console.error("Error uploading image:", error);
                //     return;
                // }

                // Get the public URL of the uploaded image
                const publicURL = `https://your-supabase-url.com/storage/v1/object/public/${fileName}`;
                uploadedImages.push(publicURL); // Add the public URL to the array
            }

            // Update projectData with the uploaded image URLs and selected video URLs
            const updatedProjectData = {
                ...projectData,
                images: uploadedImages,
                videos: selectedVideos, // Use local state for videos
            };

            // Call the onSubmit function passed as a prop with the updated data
            onSubmit(updatedProjectData);
        } catch (err) {
            console.error("Error submitting project data:", err);
        }
    };

    return (
        <div className="flex flex-col gap-4 items-start mt-4 mb-20">
            <div className="flex justify-between items-center w-full mb-2">
                <div className="flex flex-col w-full gap-4">
                    <div className="flex sm:mr-6 items-center justify-between">
                        <h1 className="text-2xl font-semibold">
                            {project ? "Edit Project" : "Create a Project"}
                        </h1>
                    </div>

                    <div className="flex flex-col gap-2 w-full mb-20">
                        <div className="relative flex flex-col mt-4 sm:mt-0 justify-between items-start sm:items-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4 w-full">
                                <div className="flex flex-col gap-4 w-full bg-background rounded-lg p-4">
                                    <h3 className="text-sm text-muted-foreground">
                                        Project Details
                                    </h3>
                                    {/* Project Name */}
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="name"
                                            className="text-xs"
                                        >
                                            Give your project a name
                                        </Label>
                                        <Input
                                            id="name"
                                            value={projectData.name}
                                            placeholder="Enter project name"
                                            className="text-xs"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </div>

                                    {/* Description */}
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="description"
                                            className="text-xs"
                                        >
                                            Describe your project
                                        </Label>
                                        <Textarea
                                            id="description"
                                            value={projectData.description}
                                            placeholder="Describe the project"
                                            className="text-xs h-12 max-h-40"
                                            onChange={(e) =>
                                                handleInputChange(
                                                    "description",
                                                    e.target.value
                                                )
                                            }
                                            maxLength={300}
                                        />
                                        <p className="text-xs text-right text-gray-400 mr-2">
                                            {300 -
                                                projectData.description.length}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="tech_stack"
                                            className="text-xs"
                                        >
                                            What tech stack are you using?
                                        </Label>

                                        <Tags
                                            id="tech_stack"
                                            tags={projectData.tech_stack}
                                            maxTags={10}
                                            onTagsChange={(tags) =>
                                                handleTagsChange(
                                                    "tech_stack",
                                                    tags
                                                )
                                            }
                                            className="text-xs"
                                            placeholder="Add tech stack"
                                        />
                                    </div>

                                    <div className="flex flex-col w-full gap-2">
                                        <Label
                                            htmlFor="links"
                                            className="text-xs mt-2"
                                        >
                                            Add links to show your project off
                                        </Label>
                                        <div className="flex flex-col sm:flex-row gap-2 w-full">
                                            <div className="flex w-full">
                                                <div className="flex items-center justify-center p-2 border-[1px] border-r-0 rounded-l-md bg-gray-200">
                                                    <p className="text-xs">
                                                        github.com/
                                                    </p>
                                                </div>
                                                <Input
                                                    id="github_link"
                                                    value={
                                                        projectData.github_link
                                                    }
                                                    className="rounded-l-none text-xs"
                                                    placeholder="GitHub"
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            "github_link",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>

                                            <div className="flex w-full">
                                                <div className="flex items-center justify-center p-2 border-[1px] border-r-0 rounded-l-md bg-gray-200">
                                                    <p className="text-xs">
                                                        https://
                                                    </p>
                                                </div>
                                                <Input
                                                    id="demo_link"
                                                    value={
                                                        projectData.demo_link
                                                    }
                                                    className="rounded-l-none text-xs"
                                                    placeholder="Demo Link"
                                                    onChange={(e) =>
                                                        handleInputChange(
                                                            "demo_link",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 w-full bg-background rounded-lg p-4">
                                    <h3 className="text-sm text-muted-foreground">
                                        Gallery
                                    </h3>

                                    {/* Image */}
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="image"
                                            className="text-xs"
                                        >
                                            Add project thumbnail
                                        </Label>
                                        <Input
                                            id="image"
                                            type="file"
                                            placeholder="Add image URL"
                                            className="text-xs"
                                            accept="image/*"
                                            // onKeyDown={(e) => {
                                            //     if (e.key === "Enter") {
                                            //         handleAddImage(e);
                                            //         (
                                            //             e.target as HTMLInputElement
                                            //         ).value = "";
                                            //     }
                                            // }}
                                            onChange={(e) => {
                                                handleAddImage(e);
                                            }}
                                        />
                                        
                                    </div>

                                    {/* Videos */}
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="videos"
                                            className="text-xs"
                                        >
                                            Add project demos (youtube link &gt;
                                            share &gt; embed &gt; url)
                                        </Label>
                                        <Input
                                            id="videos"
                                            placeholder="Add video URL"
                                            className="text-xs"
                                            onKeyDown={(e) => {
                                                if (e.key === "Enter") {
                                                    handleAddVideo(
                                                        (
                                                            e.target as HTMLInputElement
                                                        ).value
                                                    );
                                                    (
                                                        e.target as HTMLInputElement
                                                    ).value = "";
                                                }
                                            }}
                                        />
                                        {videoError && (
                                            <p className="text-red-500 text-sm ml-auto mr-2">
                                                Provide a valid YouTube video
                                                ember URL.
                                            </p>
                                        )}
                                        <div className="flex flex-wrap gap-2">
                                            {selectedVideos.map(
                                                (vid, index) => (
                                                    <Button
                                                        asChild
                                                        key={index}
                                                        variant="outline"
                                                        className="border-primary"
                                                    >
                                                        <div className="flex items-center justify-center">
                                                            {/* Link to the video URL */}
                                                            <Link
                                                                href={vid}
                                                                target="_blank"
                                                                className="text-xs"
                                                            >
                                                                {vid}
                                                            </Link>

                                                            {/* Button to remove the video */}
                                                            <Button
                                                                className="hover:bg-transparent ml-2"
                                                                variant="ghost"
                                                                onClick={() => {
                                                                    // Update state by removing the selected video
                                                                    setSelectedVideos(
                                                                        selectedVideos.filter(
                                                                            (
                                                                                _,
                                                                                i
                                                                            ) =>
                                                                                i !==
                                                                                index
                                                                        )
                                                                    );
                                                                }}
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </Button>
                                                        </div>
                                                    </Button>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 w-full bg-background rounded-lg p-4">
                                    <h3 className="text-sm text-muted-foreground">
                                        Status
                                    </h3>

                                    {/* Collaboration Status */}
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="status"
                                            className="text-xs"
                                        >
                                            Set status for project
                                        </Label>
                                        {/* <select
                                        id="status"
                                        value={projectData.status}
                                        onChange={(e) =>
                                            handleInputChange(
                                                "status",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="open to collaboration">
                                            Open to Collaboration
                                        </option>
                                        <option value="closed">Closed</option>
                                    </select> */}
                                        <Select
                                            value={projectData.status}
                                            onValueChange={(value) =>
                                                handleInputChange(
                                                    "status",
                                                    value
                                                )
                                            }
                                        >
                                            <SelectTrigger className="w-1/2 text-xs">
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    <SelectLabel className="text-xs">
                                                        Status
                                                    </SelectLabel>
                                                    <SelectItem
                                                        className="text-xs "
                                                        value="active"
                                                    >
                                                        <div className="flex gap-2 items-center">
                                                            <div
                                                                className={`h-2 w-2 mr-1 rounded-full ${STATUS_MAP["active"].color}`}
                                                            ></div>
                                                            {
                                                                STATUS_MAP[
                                                                    "active"
                                                                ].text
                                                            }
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem
                                                        className="text-xs "
                                                        value="open to collaboration"
                                                    >
                                                        <div className="flex gap-2 items-center">
                                                            <div
                                                                className={`h-2 w-2 mr-1 rounded-full ${STATUS_MAP["open to collaboration"].color}`}
                                                            ></div>
                                                            {
                                                                STATUS_MAP[
                                                                    "open to collaboration"
                                                                ].text
                                                            }
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem
                                                        className="text-xs "
                                                        value="archived"
                                                    >
                                                        <div className="flex gap-2 items-center">
                                                            <div
                                                                className={`h-2 w-2 mr-1 rounded-full ${STATUS_MAP["archived"].color}`}
                                                            ></div>
                                                            {
                                                                STATUS_MAP[
                                                                    "archived"
                                                                ].text
                                                            }
                                                        </div>
                                                    </SelectItem>
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    {projectData.status ===
                                        "open to collaboration" && (
                                        <div className="flex flex-col gap-2">
                                            <Label
                                                htmlFor="collaboration_skills"
                                                className="text-xs"
                                            >
                                                What skills are you looking for
                                                in collaborators?
                                            </Label>
                                            <Tags
                                                tags={
                                                    projectData.collaboration_skills
                                                }
                                                onTagsChange={(tags) =>
                                                    handleTagsChange(
                                                        "collaboration_skills",
                                                        tags
                                                    )
                                                }
                                                placeholder="Add collaboration skills"
                                                className="text-xs"
                                                maxTags={5}
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Submit Button */}
                            <button
                                onClick={handleSubmit}
                                className="px-4 py-2 bg-primary text-white rounded-lg"
                            >
                                {project ? "Update Project" : "Create Project"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectEdit;
