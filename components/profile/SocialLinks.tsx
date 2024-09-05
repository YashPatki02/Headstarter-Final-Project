"use client";
import React, { useEffect, useState } from "react";
// !types || will be changing to useState
type User = {
  links: {
    github: string;
    linkedin: string;
    portfolio: string;
  };
  // Add other properties here
};

type SocialLinksProps = {
  user: User;

};
function SocialLinks({ user }: SocialLinksProps) {
  const [links, setLinks] = useState<User["links"]>({
    github: user.links?.github || "",
    linkedin: user.links?.linkedin || "",
    portfolio: user.links?.portfolio || "",
  });
  const [isEditing, setIsEditing] = useState(false);
  // * if no links
  useEffect(() => {
    // if no links
    if (
      user.links?.github == "" &&
      user.links?.linkedin == "" &&
      user.links?.portfolio == ""
    ) {
      console.log("in use effect to edit");
      setIsEditing(true);
    }
    console.log("user.links");
  }, []);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setLinks((prevLinks) => ({
      ...prevLinks,
      [name]: value,
    }));
  };

  const handleSave = () => {
    console.log(links);
    // ! do and api call here
    /* try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          github: links.github,
          linkedin: links.linkedin,
          portfolio: links.portfolio,
        }),
      });

      if (!response.ok) {
        throw new Error('Error saving links');
      }

      const data = await response.json();

      // Update the state with the returned data or confirmation
      // setLinks({
      //   github: data.github || '',
      //   linkedin: data.linkedin || '',
      //   portfolio: data.portfolio || '',
      // });

      console.log('Links saved successfully!', data);
    } catch (error) {
      console.error('Failed to save links:', error);
    } */
    setIsEditing(false); // Exit edit mode after saving
  };

  const handleEdit = () => {
    setIsEditing(true); // Enter edit mode
  };

  const handleCancel = () => {
    setLinks(user.links);
    setIsEditing(false); // Exit edit mode without saving
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Social Links</h3>
        {/* Edit Button */}
        {!isEditing ? (
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
          >
            Edit
          </button>
        ) : (
          ""
        )}
      </div>
      {isEditing ? (
        <div className="flex flex-col space-y-4 mt-4">
          {/* GitHub Link */}
          {/* <form onSubmit={handleSubmit}> */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              GitHub
            </label>
            <input
              type="url"
              name="github"
              value={links.github}
              onChange={handleChange}
              placeholder="https://github.com/username"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* LinkedIn Link */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              LinkedIn
            </label>
            <input
              type="url"
              name="linkedin"
              value={links.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/username"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Personal Portfolio Link */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Personal Portfolio
            </label>
            <input
              type="url"
              name="portfolio"
              value={links.portfolio}
              onChange={handleChange}
              placeholder="https://your-portfolio.com"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

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
          {/* </form> */}
        </div>
      ) : (
        <div className="mt-4">
          {/* Display Links */}
          <p>
            <strong>GitHub: </strong>
            <a
              className="text-blue-500"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              {links.github}
            </a>
          </p>
          <p>
            <strong>LinkedIn: </strong>
            <a
              className="text-blue-500"
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {links.linkedin}
            </a>
          </p>
          <p>
            <strong>Personal Portfolio: </strong>
            <a
              className="text-blue-500"
              href={links.portfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              {links.portfolio}
            </a>
          </p>
        </div>
      )}
    </div>
  );
}

export default SocialLinks;
