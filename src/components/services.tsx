"use client";

import { JSX, useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Cpu, Factory, Users } from "lucide-react";
import { BackgroundBeams } from "./ui/background-beams";


const services = [
  {
    id: "engineering",
    title: "Design & Engineering",
    icon: <Cpu className="w-8 h-8" />,
    description: "Innovative engineering solutions for complex challenges",
    subservices: [
      {
        title: "Product Design",
        description: "End-to-end product design and development services",
      },
      {
        title: "Systems Engineering",
        description: "Complex system integration and optimization",
      },
      {
        title: "Prototyping",
        description: "Rapid prototyping and testing solutions",
      },
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: <Factory className="w-8 h-8" />,
    description: "Precision manufacturing with cutting-edge technology",
    subservices: [
      {
        title: "Advanced Manufacturing",
        description: "State-of-the-art manufacturing processes",
      },
      {
        title: "Quality Control",
        description: "Rigorous quality assurance standards",
      },
      {
        title: "Supply Chain",
        description: "Efficient supply chain management",
      },
    ],
  },
  {
    id: "talent",
    title: "Talent Services",
    icon: <Users className="w-8 h-8" />,
    description: "Expert talent acquisition and management",
    subservices: [
      {
        title: "Recruitment",
        description: "Specialized technical recruitment services",
      },
      {
        title: "Training",
        description: "Professional development programs",
      },
      {
        title: "Consulting",
        description: "Expert technical consulting services",
      },
    ],
  },
];

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


    <section id="services" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <BackgroundBeams />

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

        {/* Center Hexagon */}
        <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-20">
          <div className="w-60 h-60 bg-blue-500/20 backdrop-blur-sm border-2 border-blue-400/50 hexagon flex items-center justify-center">
            <span className="text-2xl font-bold text-blue-300">ERAYA</span>
          </div>
        </motion.div>

        {/* Service Hexagons */}
        <div className="h-[30rem] relative z-10">
          <motion.div
            className="absolute left-[10%] top-[38%]"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedService(services[0])}
          >
            <div className="w-48 h-48 bg-blue-500/20 backdrop-blur-sm border-2 border-blue-400/50 hexagon flex items-center justify-center">
              <span className="text-xs text-blue-200 text-center px-2">
                {services[0].title}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-[80%] top-[38%]"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedService(services[1])}
          >
            <div className="w-48 h-48 bg-blue-500/20 backdrop-blur-sm border-2 border-blue-400/50 hexagon flex items-center justify-center">
              <span className="text-xs text-blue-200 text-center px-2">
                {services[1].title}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-[60%] top-[60%]"
            whileHover={{ scale: 1.1 }}
            onClick={() => setSelectedService(services[2])}
          >
            <div className="w-40 h-40 bg-blue-500/20 backdrop-blur-sm border-2 border-blue-400/50 hexagon flex items-center justify-center">
              <span className="text-xs text-blue-200 text-center px-2">
                {services[2].title}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        {selectedService && (
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{selectedService.title}</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              {selectedService.subservices.map((subservice, index) => (
                <div key={index} className="space-y-2">
                  <h4 className="font-medium">{subservice.title}</h4>
                  <p className="text-muted-foreground text-sm">
                    {subservice.description}
                  </p>
                </div>
              ))}
            </div>
          </DialogContent>
        )}
      </Dialog>

      <style jsx>{`
    .hexagon {
      clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
    }
  `}</style>
    </section>

  );
}
