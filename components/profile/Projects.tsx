"use client";
import React from "react";
interface Project {
  title: string;
  description: string;
  role?: string; // Optional for active projects
  completedDate?: string; // Optional for completed projects
}
interface User {
  activeProjects: Project[];
  completedProjects: Project[];
}

function Projects({ user }: { user: User }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold">Active Projects</h3>
      <div className="space-y-4 mt-4">
        {user.activeProjects.map((project, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-bold">{project.title}</h4>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-sm text-gray-500">Role: {project.role}</p>
          </div>
        ))}
      </div>

      <h3 className="text-lg font-semibold mt-6">Completed Projects</h3>
      <div className="space-y-4 mt-4">
        {user.completedProjects.map((project, index) => (
          <div key={index} className="p-4 border border-gray-200 rounded-lg">
            <h4 className="font-bold">{project.title}</h4>
            <p className="text-gray-600">{project.description}</p>
            <p className="text-sm text-gray-500">
              Completed on: {project.completedDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
