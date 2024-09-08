import { NextRequest, NextResponse } from "next/server";
import { supabaseClient } from "@/lib/supabaseClient";

// Upload a new image
export async function POST(req: NextRequest) {
    const supabase = supabaseClient();
    const { file, type } = await req.json();

    // 1. Get the existing image json (for project count)
    // 2. Upload the file to storage with correctly indexed file path
    // 3. Update the image json column
    let filePath = "/project-id/type/[asset_id]";
    try {
        const { data, error } = await supabase.storage
            .from("profile-images")
            .upload(filePath, file);
        return NextResponse.json(
            { message: `Successfully uploaded ${type} image`, data },
            { status: 201 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: `Error uploading ${type} image`, error },
            { status: 500 }
        );
    }
}

// Fetch an image url
export async function GET(req: NextRequest) {}

// Delete an image
export async function DELETE(req: NextRequest) {}
