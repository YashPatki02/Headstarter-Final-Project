import { NextRequest, NextResponse } from "next/server";
import { supabaseClient } from "@/lib/supabaseClient";

// Get user token to test api routes
// Log in a user and return the access token
export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();

        // Authenticate the user with Supabase using email and password
        const supabase = supabaseClient();
        const { data: session, error } = await supabase.auth.signInWithPassword(
            {
                email,
                password,
            }
        );

        if (error) {
            return NextResponse.json(
                { message: "Authentication failed", error },
                { status: 401 }
            );
        }

        // Return the access token
        return NextResponse.json(
            { message: "Successfully authenticated", session },
            { status: 200 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: "Failed to authenticate user", error: error.message },
            { status: 500 }
        );
    }
}
