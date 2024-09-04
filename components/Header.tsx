"use client";
import React from "react";
import { Merge } from "lucide-react";
import { animate } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
    const goToFeatures = () => {
        const features = document.getElementById("features");
        if (features) {
            const y = features.getBoundingClientRect().top + window.scrollY;

            animate(window.scrollY, y, {
                duration: 0.8,
                ease: [0.42, 0, 0.58, 1],
                onUpdate: (latest) => window.scrollTo(0, latest),
            });
        }
    };

    return (
        <header className="flex flex-row w-full px-4 sm:px-12 h-20 items-center shadow-inner border-b-[1px] border-primary">
            <div>
                <Link href="/" className="flex flex-row items-center gap-2">
                    <Merge className="text-primary" size={20} strokeWidth={3} />
                    <h1 className="text-2xl font-bold">contribu.</h1>
                </Link>
            </div>
            <nav className="ml-auto mr-6">
                <ul className="flex flex-row gap-6 sm:gap-12 text-muted-foreground">
                    {/* <li>about.</li> */}
                    <li className="cursor-pointer" onClick={goToFeatures}>
                        features.
                    </li>
                </ul>
            </nav>
            <Button asChild>
                <Link href="/sign-in">get started</Link>
            </Button>
        </header>
    );
};

export default Header;
