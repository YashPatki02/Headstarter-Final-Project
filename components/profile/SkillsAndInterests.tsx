"use client";
import React, { useEffect, useState } from "react";
// ! types
type User = {
  skills: string[];
  interests: string[];
  // Add other properties here
};

type SkillsAndInterestsProps = {
  user: User;
  onUpdateSkills: (newSkill: string) => void;
};

export default function SkillsAndInterests({
  user,
  onUpdateSkills,
}: SkillsAndInterestsProps) {
  //! use state
  const [userData, setUserData] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [newSkill, setNewSkill] = useState<string>(""); // ??
  const [newInterest, setNewInterest] = useState<string>(""); // ??

  useEffect(() => {
    const fetchUserData = () => {
      // storng the data inStates
      setUserData(user);
      console.log(user);
      console.log("skill Intrest mounted");
    };

    fetchUserData();
  }, []);
  //
  function handleSkillAddition(event: {
    key: string;
    target: { value: string };
  }) {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      // Add the skill to the user's profile
      onUpdateSkills(event.target.value.trim());
      event.target.value = "";
    }
  }

  function handleInterestAddition(event: {
    key: string;
    target: { value: string };
  }) {
    if (event.key === "Enter" && event.target.value.trim() !== "") {
      // Add the interest to the user's profile
      onUpdateSkills(event.target.value.trim());
      event.target.value = "";
    }
  }
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h3 className="text-lg font-semibold">Skills</h3>
      {/* Show all the skill */}
      <div className="flex flex-wrap mt-2 space-x-2">
        {user.skills.map((skill, index) => (
          <span
            key={index}
            className="bg-gray-200 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
        <input
          type="text"
          placeholder="Add a skill"
          className="bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          onKeyDown={handleSkillAddition}
        />
      </div>

      <h3 className="text-lg font-semibold mt-6">Interests</h3>
      {/* Show all the intrest */}
      <div className="flex flex-wrap mt-2 space-x-2">
        {user.interests.map((interest, index) => (
          <span
            key={index}
            className="bg-gray-200 px-3 py-1 rounded-full text-sm"
          >
            {interest}
          </span>
        ))}
        <input
          type="text"
          placeholder="Add an interest"
          className="bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          onKeyDown={handleInterestAddition}
        />
      </div>
    </div>
  );
}
