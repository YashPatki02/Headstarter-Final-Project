import { NextRequest, NextResponse } from "next/server";
import { supabaseClient } from "@/lib/supabaseClient";
import { v4 as uuidv4 } from "uuid";

// Upload a new image
export async function POST(req: NextRequest) {
    //initialize w token
    const supabase = supabaseClient();
    const formData = await req.formData();
    const imageData = formData.get("primaryImage");

    // 1. Upload the file to storage with correctly indexed file path
    // 2. Update the image json column

    // Creates unique filepath
    // let filePath = `${file}-${uuidv4()}`;
    try {
        // const { data, error } = await supabase.storage
        //     .from("profile-images")
        //     .upload(filePath, file);
        console.log(imageData);
        return NextResponse.json(
            { message: `Successfully uploaded image`, imageData },
            { status: 201 }
        );
    } catch (error: any) {
        return NextResponse.json(
            { message: `Error uploading image`, error },
            { status: 500 }
        );
    }
}

// Fetch an image url
export async function GET(req: NextRequest) {}

// Delete an image
export async function DELETE(req: NextRequest) {}
