import { NextResponse } from "next/server";
import { supabaseClient } from "@/lib/supabaseClient";
import { auth } from "@clerk/nextjs/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export async function GET(req: Request) {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  console.log("valid token");
  try {
    const supabase = supabaseClient(token);
    const decodedToken = jwt.verify(token, JWT_SECRET);
    // console.log(decodedToken);
    const user_id = decodedToken.sub;
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("user_id", user_id)
      .single();
    delete data["user_id"];
    delete data["created_at"];
    delete data["role"];
    // console.log(data)
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    // Successful
    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const data = await req.json();
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");
    console.log(data);
    // Check if token is provided
    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const user_id = (decodedToken as { sub: string }).sub;

    const supabase = supabaseClient(token);

    // Update the user profile with the changed fields
    const { error } = await supabase
      .from("users")
      .update(data)
      .eq("user_id", user_id);

    // Handle errors from Supabase update
    if (error) {
      return NextResponse.json(
        { message: "Failed to update profile", error: error.message },
        { status: 400 }
      );
    }

    // Successfully
    return NextResponse.json(
      { message: "Profile updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating profile:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
