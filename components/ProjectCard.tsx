"use client";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { ProjectType } from "@/lib/types";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { useState, useEffect } from "react";

export default function ProjectCard({
    project,
}: Readonly<{ project: ProjectType }>) {
    const avatarUrls = [
        "https://avatars.githubusercontent.com/u/16860528",
        "https://avatars.githubusercontent.com/u/20110627",
        "https://avatars.githubusercontent.com/u/106103625",
        "https://avatars.githubusercontent.com/u/59228569",
    ];

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return (
        <Link href={`/projects/${project.id}`} passHref>
            <Card className="relative w-[230px] cursor-pointer rounded-lg border-0 p-2 hover:bg-gray-100">
                {/* Thumbnail image at the top */}
                {project.images && project.images.length > 0 && (
                    <div className="w-full h-[115px] bg-red-500 rounded-lg">
                        {/* <Image
                            src={project.images[0]} // Use the first image as thumbnail
                            alt={`${project.name} thumbnail`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-t-lg"
                        /> */}
                    </div>
                )}

                <CardHeader>
                    <CardTitle className="flex justify-between items-center text-md font-semibold pt-2">
                        {project.name}
                        {project.status === "open to collaboration" ? (
                            <div className="h-2 w-2 mr-1 rounded-full bg-green-500"></div>
                        ) : project.status === "open to feature requests" ? (
                            <div className="h-2 w-2 mr-1 rounded-full bg-cyan-500"></div>
                        ) : (
                            <div className="h-2 w-2 mr-1 rounded-full bg-red-500"></div>
                        )}
                    </CardTitle>
                    <CardDescription className="text-xs text-muted-foreground line-clamp-2">
                        {project.description}
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-xs mt-2">
                    <p className="font-semibold">{project.category}</p>
                    <p className="">{project.tech_stack}</p>
                </CardContent>
                <CardFooter className="flex gap-2 mt-4">
                    {/* Display user avatars if available */}
                    {/* {project.users?.map((user, index) => (
                            <Image
                                key={index}
                                src={user.imageUrl}
                                alt={user.username}
                                width={24}
                                height={24}
                                className="rounded-full border-2 border-white"
                            />
                        ))} */}
                    {isMounted && (
                        <AvatarCircles
                            // avatarUrls={[avatarUrls[0]]}
                            // numPeople={avatarUrls.length - 1}
                            avatarUrls={avatarUrls}
                        />
                    )}
                </CardFooter>
            </Card>
        </Link>
    );
}
