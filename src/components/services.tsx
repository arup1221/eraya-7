"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
import GlareCardDemo from "./subComponent/CenterCard";
import BranchCard from "./subComponent/BranchCars";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";


export function Services() {
  type Service = {
    id: string;
    title: string;
    icon: JSX.Element;
    description: string;
    subservices: { title: string; description: string }[];
  };

  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (


    <section id="services" className="py-16 w-screen h-screen bg-slate-950 overflow-hidden relative">

{/* <HeroHighlight></HeroHighlight> */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          Our Services
        </motion.h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
          Comprehensive solutions in engineering, manufacturing, and talent services
        </p>
      </div>

      <div className="flex justify-center absolute items-center inset-0">
        <GlareCardDemo />
      </div>
      <div>
        <BranchCard />
      </div>

      <div>
        <BranchCard />
      </div>

      <div>
        <BranchCard />
      </div>


    </section>

  );
}
