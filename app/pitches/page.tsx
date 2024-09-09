import Profile from "@/components/Profile";
import React from "react";

const PitchesPage = () => {
    return (
        <div className="flex flex-col gap-4 items-start mt-4">
            <div className="flex justify-between items-center w-full mb-2">
                <h1 className="text-2xl font-semibold">Pitches</h1>
            </div>

            <div className="flex flex-col gap-2 w-full">
                <div className="relative flex flex-col h-[65vh] mt-4 mb-6 sm:mt-0 gap-4 justify-center items-center sm:items-center bg-background rounded-lg p-4">
                    <h1 className="text-4xl text-primary">
                        pitches coming soon!
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Stay tuned for updates!
                    </p>{" "}
                </div>
            </div>
        </div>
    );
};

export default PitchesPage;
