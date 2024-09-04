"use client";
import React from "react";
// ! types
type User = {
  user: {
    fullName: string;
    username: string;
    bio: string;
  };
  // Add other properties here
};
function ProfileOverview({ user }: User) {

  // * profile picture
  function handleProfilePictureUpload(event: any) {
    // Handle picture upload here
    // ! need ot do an api call
  }
  return (
    <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-md">
      {/* Profile Picture */}
      <div className="relative">
        <img
          className="h-24 w-24 rounded-full object-cover"
          // ! below is the placeholder for now later will add the image
          src={
            "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
          }
          alt="Profile"
        />
        <input
          type="file"
          className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-blue-500 text-white text-sm cursor-pointer opacity-75 hover:opacity-100"
          accept="image/*"
          onChange={handleProfilePictureUpload}
        />
      </div>

      {/* Name & Username */}
      <div className="text-center">
        <h2 className="text-xl font-bold">{user.fullName || "FullName"}</h2>
        <p className="text-gray-600">@{user.username || "userName"}</p>
      </div>

      {/* Bio */}
      <p className="text-center text-gray-700 max-w-md">
        {user.bio ||
          "No bio available. Add a brief introduction about yourself!"}
      </p>
    </div>
  );
}

export default ProfileOverview;
