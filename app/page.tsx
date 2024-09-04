"use client";
import { useUser, useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
    const { getToken } = useAuth();
    const { user } = useUser();

    useEffect(() => {
        const checkUserInSupabase = async () => {
            const token = await getToken({ template: "supabase" });
            try {
                const response = await fetch("/api/checkUser", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId: user?.id,
                        firstName: user?.firstName,
                        lastName: user?.lastName,
                        emailAddress: user?.primaryEmailAddress?.emailAddress,
                        username: user?.username,
                        token,
                    }),
                });

                const data = await response.json();
                console.log(data.message);
            } catch (error) {
                console.error("Error checking user in Supabase:", error);
            }
        };

        if (user) {
            // checkUserInSupabase();
        }
    }, [user]);

    return (
        <>
            <div>You are signed in.</div>
            <div className="grid grid-cols-1 grid-rows-10 h-[200vh]">
                <div className="col-span-1 row-span-1  bg-red-300">Header</div>
                <div className="col-span-1 row-span-8 bg-green-300">Main content</div>
                <div className="col-span-1 row-span-1 bg-blue-300">Footer</div>

            </div>
        </>
    );
}
