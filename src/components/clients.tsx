"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const testimonials = [
  { name: "TechCorp", image: "./company.svg" },
  { name: "InnovateSys", image: "./company.svg" },
  { name: "FutureTech", image: "./company.svg" },
  { name: "GlobalEng", image: "./company.svg" },
  { name: "NextGen", image: "./company.svg" },
  { name: "SmartSol", image: "./company.svg" },
];

// const testimonials = [
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },
//   {
//     quote: "All that we see or seem is but a dream within a dream.",
//     name: "Edgar Allan Poe",
//     title: "A Dream Within a Dream",
//   },

// ];




export function Clients() {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    });
  }, [controls]);

  return (
    <section id="clients" className="py-10 bg-gray-950 max-h-screen">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Clients</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by industry leaders worldwide
          </p>
        </motion.div>

        {/* <div className="relative overflow-hidden">
          <div ref={containerRef} className="w-full">
            <motion.div
              animate={controls}
              className="flex space-x-8 whitespace-nowrap"
              style={{ width: "fit-content" }}
            >
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className="w-[200px] h-[100px] bg-blue-900/20 rounded-lg flex items-center justify-center p-6 border border-blue-800/30"
                >

                  <Image
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                    height={100} width={100}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div> */}


        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />

      </div>
    </section>
  );
}