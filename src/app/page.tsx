"use client";

import dynamic from "next/dynamic";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Team } from "@/components/team";
import { Clients } from "@/components/clients";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const Services = dynamic(() => import("@/components/services"), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <Team />
      <Clients />
      <Contact />
      <Footer />
    </main>
  );
}
