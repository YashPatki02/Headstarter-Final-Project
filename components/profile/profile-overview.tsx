"use client";
import React, { useState } from "react";
// ! types
type User = {
  user: {
    fullName: string;
    username: string;
    bio: string;
    // ! add picture type
  };
  // Add other properties here
};
function ProfileOverview({ user }: User) {
  const [fullName, setFullName] = useState<string>(user.fullName || "");
  const [bio, setBio] = useState<string>(user.bio || "");
  const [isEditing, setIsEditing] = useState(false);
  // * profile picture
  function handleProfilePictureUpload(event: any) {
    // Handle picture upload here
    // ! need ot do an api call
  }
  const handleSave = () => {
    console.log(fullName);
    console.log(bio);
    // ! do and api call here
    setIsEditing(false); // Exit edit mode after saving
  };
  //
  const handleCancel = () => {
    setBio(user.bio);
    setFullName(user.fullName);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col items-center space-y-4 bg-white p-6 rounded-lg shadow-md">
      {!isEditing ? (
        <button
          // className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          onClick={() => setIsEditing(!isEditing)}
        >
          Edit
        </button>
      ) : (
        ""
      )}
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
      {isEditing ? (
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="block text-gray-700 font-medium mb-1">Bio</label>
          <input
            type="textarea"
            name="fullname"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            placeholder="Enter your bio"
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Action Buttons */}
          <div className="flex space-x-4 mt-4">
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <div className="text-center">
            <h2 className="text-xl font-bold">{user.fullName || "FullName"}</h2>
            <p className="text-gray-600">@{user.username || "userName"}</p>
          </div>

          <p className="text-center text-gray-700 max-w-md">
            {user.bio || "No bio available."}
          </p>
        </>
      )}
    </div>
  );
}

export default ProfileOverview;
