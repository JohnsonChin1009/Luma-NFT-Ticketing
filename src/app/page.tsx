"use client";

import Header from "@/components/custom/Header";
import HeroScroll from "@/components/custom/HeroScroll";
import { BentoGridThirdDemo } from "@/components/custom/BentoGrid";
import { Button } from "@/components/ui/button";
import Footer from "@/components/custom/Footer";
export default function HomePage() {
    return (
        <>
            <main className="px-4 lg:px-[70px]">
                <Header />
                <section id="hero">
                    <HeroScroll />
                </section>

                <section id="about-luma" className="min-h-screen py-[60px] lg:flex lg:flex-col lg:justify-center lg:items-center">
                    <h1 className="text-[24px] lg:text-[28px] font-bold text-center">About Luma</h1>
                    <div className="space-y-4 py-5 text-[24px] max-w-[700px] mx-auto">
                    <p>
                        Ever feeling frustrated on buying tickets but end up finding out that the organizer was overselling seats? Luma, with the help of Blockchain helps to solve this issue.
                    </p>
                    <p>
                        With the introduction of Smart Contracts, each individual ticket is minted by the participant as a NFT which in return can be used to verify the authenticity of the ticket. This ensures that the ticket is unique and cannot be duplicated.
                    </p>
                    </div>
                    <Button>
                        <a href="/dashboard">
                            Try it out!
                        </a>
                    </Button>
                </section>

                <section id="features" className="py-[60px]">
                    <h2 className="text-[24px] lg:text-[28px] font-bold text-center">Features</h2>
                    <BentoGridThirdDemo />
                </section>
                <Footer />
            </main>
        </>
    )
}