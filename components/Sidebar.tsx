"use client";
import { Merge } from "lucide-react";
import React, { useState } from "react";

interface DashboardOptions {
    active: "dashboard" | "projects" | "collaborators" | "profile";
}

const Sidebar = ({active, setActive}: {active: DashboardOptions["active"], setActive: (active: DashboardOptions["active"]) => void}) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-col gap-4 items-center w-32">
            <div className="flex flex-row items-center gap-2">
                <Merge className="text-primary" size={20} strokeWidth={3} />
                <h1 className="text-2xl font-bold">contribu.</h1>
            </div>
            <nav className="flex flex-col gap-4">
                <div
                    className={`cursor-pointer ${
                        active === "dashboard" ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setActive("dashboard")}
                >
                    Dashboard
                </div>
                <div
                    className={`cursor-pointer ${
                        active === "projects" ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setActive("projects")}
                >
                    Projects
                </div>
                <div
                    className={`cursor-pointer ${
                        active === "collaborators" ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setActive("collaborators")}
                >
                    Collaborators
                </div>
                <div
                    className={`cursor-pointer ${
                        active === "profile" ? "text-primary" : "text-muted-foreground"
                    }`}
                    onClick={() => setActive("profile")}
                >
                    Profile
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
