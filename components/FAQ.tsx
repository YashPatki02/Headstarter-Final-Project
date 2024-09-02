import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
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
            animate={inView ? "visible" : "hidden"}
            className="container flex flex-col bg-background w-full items-center justify-center mt-20 px-2"
        >
            <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-center text-primary"
            >
                faq.
            </motion.h2>
            <motion.p
                variants={itemVariants}
                className="text-lg text-center text-muted-foreground w-full sm:max-w-lg pt-4"
            >
                frequently asked questions about our platform. if you have any
                other questions, feel free to reach out.
            </motion.p>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="mt-6 w-full divide-y max-w-3xl"
            >
                <motion.div variants={itemVariants}>
                    <Accordion type="multiple" className="w-full">
                        <AccordionItem value="item-1" className="border-b-0">
                            <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                                How do I get started?
                            </AccordionTrigger>
                            <AccordionContent className="text-lg text-muted-foreground">
                                Getting started is easy! Simply create an
                                account and you&apos;re good to go. Upgrade your
                                account to create unlimited flashcard decks.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border-b-0">
                            <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                                How do I create flashcards?
                            </AccordionTrigger>
                            <AccordionContent className="text-lg text-muted-foreground">
                                You can create flashcards by clicking on the
                                &lsquo;Create Flashcards&rsquo; button. Choose
                                to create a new deck manually, with a file
                                upload, or using AI genetation.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border-b-0">
                            <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                                How do I access the public library?
                            </AccordionTrigger>
                            <AccordionContent className="text-lg text-muted-foreground">
                                You can access the public library by clicking on
                                the &lsquo;Home&rsquo; button once you are
                                logged in.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-4" className="border-b-0">
                            <AccordionTrigger className="py-6 text-left text-lg hover:no-underline">
                                Can I edit my flashcards that I get from AI?
                            </AccordionTrigger>
                            <AccordionContent className="text-lg text-muted-foreground">
                                Yes, you can edit the flashcards that you get
                                from AI. You can add, remove, or modify any
                                content on the flashcards.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default FAQ;
