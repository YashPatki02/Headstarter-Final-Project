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

    // Gets all projects that user doesn't own or is a collaborator in
    try {
        const { data, error } = await supabase
            .from("test") // View
            .select()
            .neq("user_id", userId)
            .eq("status", "collaboration");

        // const { data, error } = await supabase
        //     .from("projects")
        //     .select("id")
        //     .neq("user_id", userId) // Exclude projects created by the user
        //     .not(
        //         "id",
        //         "in",
        //         supabase
        //             .from("collaborators")
        //             .select("id")
        //             .eq("user_id", userId)
        //     );

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
