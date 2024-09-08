import { NextRequest, NextResponse } from "next/server";
import { supabaseClient } from "@/lib/supabaseClient";

// Returns all projects that a user is involved with through ownership or collaboration
export async function GET(req: NextRequest, { params }: any) {
    const { userInfo } = params.userInfo;
    console.log("userInfo ", userInfo);
    const userId = "";

    if (!userId) {
        return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    try {
        // const supabase = supabaseClient(token);
        const supabase = supabaseClient();
        const { data, error } = await supabase
            .from("projects")
            .select()
            .eq("user_id", userId);

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
