"use client";
import React, { useEffect, useState } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    ArrowDownLeft,
    ArrowUpRight,
    Check,
    Linkedin,
    Mail,
    X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import AvatarCircles from "@/components/magicui/avatar-circles";
import { useAuth } from "@clerk/nextjs";
import { useUser } from "@clerk/clerk-react";
type Message = {
    description: string;
    message: string;
    message_creation: string;
    name: string;
    owner_id: string;
    owner_img_url: string;
    owner_username: string;
    platform: string;
    project_id: number;
    sender_id: string;
    status: string;
  };
  
  type Messages = {
    inbox: Message[];
    sent: Message[];
  };
const MessagesPage = () => {
    const [tab, setTab] = useState("inbox");
    const { getToken } = useAuth();
    const { user: userData } = useUser();
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        const fetchMessages = async () => {
          try {
            // const token = await getToken();
            const token = await getToken({ template: "supabase" });
            const res = await fetch(`api/messages`, {
            method:'GET',
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
              },
            });
            const  {inbox, sent}  = await res.json();
            console.log({inbox:sent, sent:sent})
            setMessages({inbox:sent, sent:sent})
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        };
        fetchMessages();

    },[])
    const avatarUrls = [
        {
            username: "user1",
            url: "https://avatars.githubusercontent.com/u/16860528",
            profileLink: "https://avatars.githubusercontent.com/u/16860528",
        },
        {
            username: "user1",
            url: "https://avatars.githubusercontent.com/u/20110627",
            profileLink: "https://avatars.githubusercontent.com/u/20110627",
        },
        {
            username: "user1",
            url: "https://avatars.githubusercontent.com/u/106103625",
            profileLink: "https://avatars.githubusercontent.com/u/106103625",
        },
        {
            username: "user1",
            url: "https://avatars.githubusercontent.com/u/59228569",
            profileLink: "https://avatars.githubusercontent.com/u/59228569",
        },
    ];

    const user = {
        id: "101",
    };
    const [messages, setMessages] = useState<Messages>({inbox: [],
      sent: []
    });
    const dmessages = [
        {
            message_id: 1,
            from_id: "101",
            to_id: "102",
            project_id: "1",
            status: "pending",
            message: "Meeting rescheduled to next Friday at 10 AM. See you!",
            platform: "Email",
            created_at: "2024-01-15T08:30:00Z",
        },
        {
            message_id: 2,
            from_id: "102",
            to_id: "101",
            project_id: "2",
            status: "accepted",
            message: "Sure, let's discuss the details.",
            platform: "LinkedIn",
            created_at: "2024-02-20T14:20:00Z",
        },
        {
            message_id: 3,
            from_id: "103",
            to_id: "101",
            project_id: "3",
            status: "rejected",
            message:
                "I'm currently busy with another project. Maybe next time!",
            platform: "Discord",
            created_at: "2024-03-10T10:45:00Z",
        },
    ];

    const matchPlatform = (platform: string) => {
        switch (platform) {
            case "Email":
                return <Mail className="w-4 h-4" />;
            case "LinkedIn":
                return <Linkedin className="w-4 h-4" />;
            case "Discord":
                return <Mail className="w-4 h-4" />;
            default:
                return <Mail className="w-4 h-4" />;
        }
    };

    const handlePlatformOpen = (platform: string) => {
        switch (platform) {
            case "Email":
                window.open(
                    "https://mail.google.com/mail/u/0/#inbox",
                    "_blank"
                );
                break;
            case "LinkedIn":
                window.open("https://www.linkedin.com/", "_blank");
                break;
            case "Discord":
                window.open("https://discord.com/", "_blank");
                break;
            default:
                window.open(
                    "https://mail.google.com/mail/u/0/#inbox",
                    "_blank"
                );
                break;
        }
    };
    if(loading){
        return <h1>Loading...</h1>
    }
    return (
        <div className="flex flex-col gap-4 items-start mt-4 mb-20">
            <div className="flex justify-between items-center w-full mb-2">
                <h1 className="text-2xl font-semibold">Messages</h1>
            </div>

            <div className="flex gap-6 md:gap-12 w-full">
                <div
                    onClick={() => setTab("inbox")}
                    className={`cursor-pointer pb-2 ${
                        tab === "inbox"
                            ? "text-primary border-b-2 border-primary"
                            : ""
                    }`}
                >
                    <h2 className="font-semibold">Inbox</h2>
                </div>
                <div
                    onClick={() => setTab("sent")}
                    className={`cursor-pointer pb-2 ${
                        tab === "sent"
                            ? "text-primary border-b-2 border-primary"
                            : ""
                    }`}
                >
                    <h2 className="font-semibold">Sent</h2>
                </div>
                <div
                    onClick={() => setTab("past")}
                    className={`cursor-pointer pb-2 ${
                        tab === "past"
                            ? "text-primary border-b-2 border-primary"
                            : ""
                    }`}
                >
                    <h2 className="font-semibold">Past Messages</h2>
                </div>
            </div>

            {tab === "inbox" && (
                <div className="flex flex-col gap-4 items-start bg-background p-2 sm:p-4 rounded-md mt-4 w-full">
                    <Table className="">
                        <TableCaption className="text-xs">
                            these are your collaboration requests. accept or
                            deny them!
                        </TableCaption>
                        <TableHeader>
                            <TableRow className="text-xs">
                                <TableHead>Project</TableHead>
                                <TableHead>Message</TableHead>
                                <TableHead>Platform</TableHead>
                                <TableHead>Sender</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {messages.inbox
                                // .filter((message) => message.to_id === user.id)
                                .map((message,index) => (
                                    <TableRow
                                        key={index}
                                        className="text-xs"
                                    >
                                        <TableCell>
                                            {message.name}
                                        </TableCell>
                                        <TableCell>{message.message}</TableCell>
                                        <TableCell>
                                            <div className="flex ml-5 justify-start">
                                                {matchPlatform(
                                                    message.platform
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {message.owner_img_url?(<AvatarCircles
                                                avatarUrls={message.owner_img_url}
                                            />): message.owner_username}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center justify-start gap-2">
                                                <Button
                                                    className="text-xs"
                                                    variant="outline"
                                                    onClick={() =>
                                                        handlePlatformOpen(
                                                            message.platform
                                                        )
                                                    }
                                                >
                                                    open
                                                </Button>
                                                {message.status=='pending'?
                                                (<><Button
                                                        className="text-xs hover:border-green-500"
                                                        variant="outline"
                                                        size="icon"
                                                    >
                                                        <Check className="w-4 h-4 text-green-500" />
                                                    </Button><Button
                                                        className="text-xs hover:border-red-500"
                                                        variant="outline"
                                                        size="icon"
                                                    >
                                                            <X className="w-4 h-4 text-red-500" />
                                                        </Button></>):'pending'}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </div>
            )}
            {tab === "sent" && (
                <div className="flex flex-col gap-4 items-start bg-background p-2 sm:p-4 rounded-md mt-4 w-full">
                    <Table>
                        <TableCaption className="text-xs">
                            await to be accepted into these projects!
                        </TableCaption>
                        <TableHeader>
                            <TableRow className="text-xs">
                                <TableHead>Project</TableHead>
                                <TableHead>Message</TableHead>
                                <TableHead>Platform</TableHead>
                                <TableHead>Sent to</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {messages.sent
                                // .filter(
                                //     (message) => message.from_id === user.id
                                // )
                                .map((message,index) => (
                                    <TableRow
                                        key={index}
                                        className="text-xs"
                                    >
                                        <TableCell>
                                            {message.name}
                                        </TableCell>
                                        <TableCell>{message.message}</TableCell>
                                        <TableCell>
                                            <div className="flex ml-5 justify-start">
                                                {matchPlatform(
                                                    message.platform
                                                )}
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            {message.owner_img_url?(<AvatarCircles
                                                avatarUrls={message.owner_img_url}
                                            />): message.owner_username}
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center justify-start gap-2">
                                                <Button
                                                    className="text-xs"
                                                    variant="outline"
                                                    onClick={() =>
                                                        handlePlatformOpen(
                                                            message.platform
                                                        )
                                                    }
                                                >
                                                    open
                                                </Button>
                                                <Button
                                                    className="text-xs"
                                                    variant="destructive"
                                                >
                                                    {message.status}
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </div>
            )}
            {tab === "past" && (
                <div className="flex flex-col gap-4 items-start bg-background p-4 rounded-md mt-4 w-full">
                    <div className="flex gap-8 items-center w-full">
                        <div className="flex gap-2">
                            <ArrowUpRight className="text-green-500 w-4 h-4" />
                            <p className="text-xs">sent</p>
                        </div>
                        <div className="flex gap-2">
                            <ArrowDownLeft className="text-red-500 w-4 h-4" />
                            <p className="text-xs">received</p>
                        </div>
                    </div>
                    <Table>
                        <TableCaption className="text-xs">
                            view all your previous messages here!
                        </TableCaption>
                        <TableHeader>
                            <TableRow className="text-xs">
                                <TableHead>Project</TableHead>
                                <TableHead>Message</TableHead>
                                <TableHead>Platform</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead className="text-center">
                                    With
                                </TableHead>
                                <TableHead>Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {messages.map((message) => (
                                <TableRow
                                    key={message.message}
                                    className="text-xs"
                                >
                                    <TableCell>CardGenAI- Flashcard</TableCell>
                                    <TableCell>{message.message}</TableCell>
                                    <TableCell>
                                        <div className="flex ml-5 justify-start">
                                            {matchPlatform(message.platform)}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {user.id === message.to_id ? (
                                            <ArrowDownLeft className="w-4 h-4 text-red-500" />
                                        ) : (
                                            <ArrowUpRight className="w-4 h-4 text-green-500" />
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {user.id === message.to_id ? (
                                            <div className="flex flex-col justify-center items-center">
                                                <p className="text-xs">From</p>
                                                <AvatarCircles
                                                    avatarUrls={[avatarUrls[0]]}
                                                />
                                            </div>
                                        ) : (
                                            <div className="flex flex-col justify-center items-center">
                                                <p className="text-xs">To</p>
                                                <AvatarCircles
                                                    avatarUrls={[avatarUrls[0]]}
                                                />
                                            </div>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {message.status === "pending" ? (
                                            <p className="text-xs text-yellow-500">
                                                Pending
                                            </p>
                                        ) : message.status === "accepted" ? (
                                            <p className="text-xs text-green-500">
                                                Accepted
                                            </p>
                                        ) : (
                                            <p className="text-xs text-red-500">
                                                Rejected
                                            </p>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );
};

export default MessagesPage;
