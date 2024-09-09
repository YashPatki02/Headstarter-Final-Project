import { NextRequest, NextResponse } from "next/server";
import { supabaseClient } from "@/lib/supabaseClient";

// Returns all projects that a user is involved with through ownership or collaboration
export async function GET(req: NextRequest) {
    const params = req.nextUrl.searchParams;
    const userId = params.get("userId");
    const token = params.get("token");

    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // const supabase = supabaseClient(token);
    const supabase = supabaseClient();

    // Gets user owned projects + user collaborated projects
    try {
        // const { data, error } = await supabase
        //     .from("projects")
        //     .select("*, collaborators!left(*)") // Left join on projects table
        //     .or(`user_id.eq.${userId}, collaborators.user_id.eq.${userId}`);

        const { data, error } = await supabase
            .from("test0")
            .select()
            .or(`user_id.eq.${userId}, collaborator_id.eq.${userId}`);

        return NextResponse.json(
            { message: "Successfully fetched user projects", data },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error fetching user's projects", error.message);
        return NextResponse.json(
            { message: "Error fetching user's projects" },
            { status: 500 }
        );
    }
}

// projects/
// projects/me/userId/token
// projects/all/userId/token

// app/api/projects/[[...params]]
