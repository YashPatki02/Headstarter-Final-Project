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

  try {
    const supabase = supabaseClient(token);
    const decodedToken =  jwt.verify(token, JWT_SECRET) as any;
    // console.log();
    const user_id = decodedToken.sub;
    const { data, error } = await supabase
      .from("users")
      .select()
      .eq("user_id", user_id)
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
