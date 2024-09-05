import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-60px)]">
            <div className="flex gap-6 items-center justify-center">
                <h1 className="text-6xl font-bold text-primary">404!</h1>
                <div>
                    <h2 className="text-xl font-bold">page not found.</h2>
                    <Button className="mt-4" asChild>
                        <Link href="/">Return Home</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
