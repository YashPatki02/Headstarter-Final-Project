"use client";
import React, { useState } from "react";
import DashboardContent from "@/components/DashboardContent";
import Sidebar from "@/components/Sidebar";

interface DashboardOptions {
    active: "dashboard" | "projects" | "collaborators" | "profile";
}

export default function Dashboard() {
    const [active, setActive] = useState<DashboardOptions["active"]>("dashboard");

    return (
        <div className="flex flex-row">
            <Sidebar active={active} setActive={setActive} />
            <DashboardContent active={active} />
        </div>
    );
}
