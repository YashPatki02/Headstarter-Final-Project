"use client";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Features from "@/components/Features";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonial from "@/components/Testimonial";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Features />
            {/* <Pricing />
            <Testimonial    />
            <FAQ />
            <CTA /> */}
        </>
    );
}
