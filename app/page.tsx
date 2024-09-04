"use client";
import { Button } from "@/components/ui/button";
import { useUser, useAuth } from "@clerk/nextjs";
import { Bell } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";

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
            <div className="flex flex-col gap-4 items-start mt-4">
                <div className="flex justify-between items-center w-full">
                    <div className="flex flex-col gap-0">
                        <h1 className="text-2xl font-semibold">Home</h1>
                        <p className="text-sm text-muted-foreground">
                            Welcome back, {user?.firstName}!
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <Link href="/messages">
                            <Button
                                size="icon"
                                variant="secondary"
                                className="relative shadow-md rounded-full"
                            >
                                <p className="absolute -top-2 -right-2 text-xs font-semibold text-white bg-primary rounded-full w-5 h-5 flex items-center justify-center">
                                    3
                                </p>
                                <Bell />
                            </Button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 grid-rows-10 h-[200vh] w-full mt-4">
                    <div className="col-span-1 row-span-1  bg-red-300">
                        Header
                    </div>
                    <div className="col-span-1 row-span-8 bg-green-300">
                        Main content
                    </div>
                    <div className="col-span-1 row-span-1 bg-blue-300">
                        Footer
                    </div>
                </div>
            </div>
        </>
    );
}
