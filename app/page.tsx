"use client";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import { SignedIn, SignedOut, useUser, useAuth } from "@clerk/nextjs";
import { useEffect } from "react";

export default function Home() {
    // const { ...user } = useUser();
    const { getToken } = useAuth();
    const { user } = useUser();

    useEffect(() => {
        const checkUserInSupabase = async () => {
            const token = await getToken({template: "supabase"});
            try {
                const response = await fetch("/api/checkUser", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        userId: user?.id,
                        firstName: user?.firstName,
                        lastName: user?.lastName,
                        emailAddress: user?.primaryEmailAddress?.emailAddress,
                        username: user?.username,
                        token,
                    }),
                });

                const data = await response.json();
                console.log(data.message);
            } catch (error) {
                console.error("Error checking user in Supabase:", error);
            }
        };


        if (user) {
            checkUserInSupabase();
        }
    }, [user]);

    return (
        <>
            <SignedOut>
                <Header />
                <Hero />
                <Features />
                {/* <Pricing />
            <Testimonial    />
            <FAQ />
            <CTA /> */}
            <Footer />
            </SignedOut>
            <SignedIn>
                <div>You are signed in.</div>
            </SignedIn>
        </>
    );
}
