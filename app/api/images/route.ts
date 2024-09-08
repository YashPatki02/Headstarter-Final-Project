import { NextRequest, NextResponse } from "next/server";
import { supabaseClient } from "@/lib/supabaseClient";

// Upload a new image
export async function POST(req: NextRequest) {
    const supabase = supabaseClient();
    const { file, type } = await req.json();

    // 1. Get the existing image json (for project count)
    // 2. Upload the file to storage with correctly indexed file path
    // 3. Update the image json column

    try {
        const { data, error } = await supabase.storage
            .from("profile-images")
            .upload("file_path_to_change", file);
    } catch (error: any) {}
}

// Fetch an image url
export async function GET(req: NextRequest) {}

// Delete an image
