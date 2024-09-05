import { NextRequest, NextResponse } from "next/server";
import { supabaseClient } from "@/lib/supabaseClient";

// Handler for POST requests
export async function POST(req: NextRequest) {
    const { userId, firstName, lastName, emailAddress, username, imageUrl, token } =
        await req.json();

    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        // Initialize Supabase client
        const supabase = supabaseClient(token);

        // Check if the user already exists in the Supabase table
        const { data: existingUser, error: selectError } = await supabase
            .from("users")
            .select("user_id")
            .eq("user_id", userId)
            .single();

        if (selectError && selectError.code !== "PGRST116") {
            throw selectError;
        }

        // If the user exists, return early
        if (existingUser) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 200 }
            );
        }

        // If the user does not exist, insert the user into the Supabase table
        const { data, error: insertError } = await supabase
            .from("users")
            .insert([
                {
                    user_id: userId,
                    first_name: firstName || "",
                    last_name: lastName || "",
                    email: emailAddress || "",
                    username: username || "",
                    image_url: imageUrl || "",
                    role: "",
                    bio: "",
                    linkedin: "",
                    github: "",
                    portfolio: "",
                    skills: [],
                    interests: [],
                    created_at: new Date(),
                },
            ]);

        if (insertError) {
            console.error("Error inserting user:", insertError.message);
            return NextResponse.json(
                { message: "Internal server error" },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: "User created successfully", data },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error checking or inserting user:", error.message);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
