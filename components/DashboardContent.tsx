import React from "react";

interface DashboardOptions {
    active: "dashboard" | "projects" | "collaborators" | "profile";
}

const DashboardContent = ({ active }: DashboardOptions) => {
    return (
        <div className="flex flex-1 items-center justify-center">
            DashboardContent {active}
        </div>
    );
};

export default DashboardContent;
