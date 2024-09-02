import React, { useRef } from "react";
import { delay, motion, useInView } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";

const CTA = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
            delay: 0.2,
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="container flex flex-col bg-background w-full items-center justify-center mt-20 px-2"
        >
            <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-center text-primary"
            >
                ready to get started?
            </motion.h2>
            <motion.p
                variants={itemVariants}
                className="text-lg text-center text-muted-foreground w-full sm:max-w-lg pt-4"
            >
                login to get started and start building your project portfolio
                today.
            </motion.p>
            <motion.div variants={itemVariants}>
                <Button size="lg" className="py-4 px-8 text-base border-border">
                    <Link href="/login">Get Started</Link>
                </Button>
            </motion.div>
        </motion.div>
    );
};

export default CTA;
