import React from "react";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { Button } from "./ui/button";
import { animate } from "framer-motion";
import Link from "next/link";

const Hero = () => {
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
        <div className="relative h-[550px] w-full  overflow-hidden bg-background p-6 sm:p-20 pt-16">
            <div className="flex flex-col items-center justify-start gap-2 z-10">
                <p className="text-md font-bold text-center w-full text-muted-foreground uppercase">
                    one-stop solution to build your project portfolio
                </p>
                <h2 className="pointer-events-none lowercase whitespace-pre-wrap bg-gradient-to-b from-[#F97D26] via-[#ff2975] to-[#8c1eff] bg-clip-text text-center text-4xl sm:text-5xl font-bold tracking-tight text-transparent max-w-lg pb-8">
                    Innovate Together, Learn Together.
                </h2>
                <p className="text-sm sm:text-lg text-center text-muted-foreground max-w-xl sm:max-w-2xl">
                    Showcase your projects, get feedback, and collaborate with
                    others. Find projects to work on and build projects you care
                    about.
                </p>
                <div className="flex flex-row gap-4 mt-8 z-10">
                    <Button onClick={goToFeatures} variant="outline">
                        learn more
                    </Button>

                    <Button asChild>
                        <Link href="/signup">get started</Link>
                    </Button>
                </div>
            </div>

            <AnimatedGridPattern
                numSquares={30}
                maxOpacity={0.1}
                duration={3}
                repeatDelay={1}
                className={cn(
                    "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
                )}
            />
        </div>
    );
};

export default Hero;
