import { NextResponse } from "next/server";
import { supabaseClient } from "@/lib/supabaseClient";
import { auth } from "@clerk/nextjs/server";
import jwt from "jsonwebtoken";
import { ok } from "assert";
const JWT_SECRET = process.env.JWT_SECRET;

// to send message
// ! will recieve the message project id
export async function POST(req: Request) {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  console.log("valid token");
  try {
    const requestData = await req.json();
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const user_id = (decodedToken as { sub: string }).sub;
    //
    const supabase = supabaseClient(token);
    // this will get the project owner id
    //?getting the owner userID
    const { data, error: err } = await supabase
      .from("projects")
      .select("user_id")
      .eq("id", requestData.project_id)
      .single();
    if (!data?.user_id) {
      return NextResponse.json(
        { message: "Unable to send message" },
        { status: 500 }
      );
    }
    //! check if the user has already sent the message

    // adding it message table
    const { error } = await supabase.from("messages").insert({
      project_id: requestData.project_id,
      message: requestData.message,
      sender_id: user_id,
      receiver_id: data?.user_id,
      platform: requestData.platform,
      status: "pending",
    });

    if (error) {
      console.log("error inserting");
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Error Sending Message", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// This will update the Status
// ! will get status
export async function PUT(req: Request) {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const requestData = await req.json();
    const decodedToken = jwt.verify(token, JWT_SECRET);
    const user_id = (decodedToken as { sub: string }).sub;
    //
    const supabase = supabaseClient(token);
    const { data, error } = await supabase
      .from("messages")
      .update({ status: requestData.status })
      .eq("message_id", requestData.message_id)
      .single();

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("Error Sending Message", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
// this will get all the message of the user
export async function GET(req: Request) {
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
  console.log("valid token");
  try {
    // const requestData = await req.json();
    const decodedToken = jwt.verify(token, JWT_SECRET);
    //
    // console.log(decodedToken);
    const user_id = (decodedToken as { sub: string }).sub;
    //
    const supabase = supabaseClient(token);
    // Getting inbox
    const { data: inboxMessages, error: inboxError } = await supabase
      .from("messages")
      .select("*")
      .eq("receiver_id", user_id)
      .order("created_at", { ascending: false });

    if (inboxError) {
      throw inboxError;
    }
    console.log("Inbox Message:", inboxMessages);
    // Query for sent messages where the user is the sender
    const { data: sentMessages, error: sentError } = await supabase
      .from("sent_collab_req")
      // .from("messages")
      .select("*")
      .eq("sender_id", user_id)
      // .order("created_at", { ascending: false });
      .order("message_creation", { ascending: false });

    if (sentError) {
      throw sentError;
    }
    console.log("Sent Message:", sentMessages);

    // Return inbox and sent messages as a single JSON response
    // Return inbox messages
    return NextResponse.json(
      {
        inbox: inboxMessages,
        sent: sentMessages,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error Sending Message", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
