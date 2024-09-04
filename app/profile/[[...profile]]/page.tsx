import { UserProfile } from "@clerk/nextjs";
import React from "react";
// import { auth, currentUser } from "@clerk/nextjs/server";

export default function Profile() {
    // const { userId } = auth();
    // const { ...current } = await currentUser();

    // console.log(userId);
    // console.log("current", current);

    return (
        <div className="flex flex-col items-center justify-center py-2 mb-20">
            <UserProfile />
        </div>
    );
}
