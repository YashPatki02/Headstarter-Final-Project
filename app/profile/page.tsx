"use client";
import React from "react";
import ProfileOverview from "@/components/profile/profile-overview";
import SkillsAndInterests from "@/components/profile/SkillsAndInterests";
import Projects from "@/components/profile/Projects";
import SocialLinks from "@/components/profile/SocialLinks";
import Profile from "@/components/Profile";
// import dynamic from "next/dynamic";

// // Lazy load the SocialLinks component
// const SocialLinks = dynamic(() => import("@/components/profile/SocialLinks"), {
//     loading: () => <p>Loading...</p>,
// });
// const Projects = dynamic(() => import("@/components/profile/Projects"), {
//     loading: () => <p>Loading...</p>,
// });

function ProfilePage(/* { user } */) {
    const user = {
        profilePicture: "/images/demo-avatar.jpg", // Path to the demo profile picture
        fullName: "Jane Doe",
        username: "janedoe",
        bio: "Passionate web developer with a focus on front-end technologies. I love creating interactive and user-friendly web applications.",

        skills: ["JavaScript", "React", "Next.js", "CSS", "Tailwind CSS"],
        interests: [
            "Web Development",
            "Open Source",
            "AI in Web",
            "UI/UX Design",
        ],
        activeProjects: [
            {
                title: "Contribu - Collaboration Platform",
                description:
                    "A platform to foster collaboration among students by allowing them to pitch their ideas and connect with peers.",
                role: "Lead Developer",
            },
            {
                title: "CardGenAI - Flashcard Generator",
                description:
                    "A web application for creating AI-generated flashcards to help students study more efficiently.",
                role: "Front-End Developer",
            },
        ],
        completedProjects: [
            {
                title: "Sweat AI - AI-powered Fitness Assistant",
                description:
                    "A web app that offers personalized fitness guidance using AI.",
                completedDate: "August 2024",
            },
            {
                title: "Inventory Management System",
                description:
                    "A web application to manage and track inventory for small businesses.",
                completedDate: "July 2024",
            },
        ],
        links: {
            github: "https://github.com",
            linkedin: "https://linkedin.com/",
            portfolio: "https://google.com",
        },
    };
    //
    const handleUpdateSkills = (newSkill: String) => {
        // Logic to update user's skills
        console.log("new skill");
        console.log(newSkill);
        // add it to the use state
        //! Make an api call
    };
    return (
        <>
            {/* <ProfileOverview user={user} />
            <SocialLinks user={user} />
            <SkillsAndInterests
                user={user}
                onUpdateSkills={handleUpdateSkills}
            />
            <Projects user={user} /> */}
            <Profile />
        </>
    );
}

export default ProfilePage;
