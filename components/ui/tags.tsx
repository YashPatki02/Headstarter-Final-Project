import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    maxTags?: number;
    tags?: string[];
    onTagsChange?: (tags: string[]) => void;
}

const Tags = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            className,
            type,
            maxTags = Infinity,
            tags = [],
            onTagsChange,
            ...props
        },
        ref
    ) => {
        const [inputValue, setInputValue] = useState<string>("");

        const addTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter" && inputValue.trim() !== "") {
                e.preventDefault();

                const newTag = inputValue.trim();
                if (!tags.includes(newTag) && tags.length < maxTags) {
                    const updatedTags = [...tags, newTag];
                    onTagsChange?.(updatedTags);
                    setInputValue("");
                }
            }
        };

        const removeTag = (index: number) => {
            const updatedTags = tags.filter((_, i) => i !== index);
            onTagsChange?.(updatedTags);
        };

        return (
            <div className="flex flex-col gap-2">
                <div className="relative">
                    <input
                        type={type}
                        className={cn(
                            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                            className
                        )}
                        ref={ref}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={addTag}
                        {...props}
                    />
                    <p className="absolute right-2 bottom-1 text-xs text-gray-400">
                        {" "}
                        {tags.length}/{maxTags}
                    </p>
                </div>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-gray-200 px-2 py-1 rounded-lg text-xs"
                        >
                            {tag}
                            <button
                                type="button"
                                className="ml-2"
                                onClick={() => removeTag(index)}
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
);
Tags.displayName = "Tags";

export { Tags };
