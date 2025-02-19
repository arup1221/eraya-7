"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackgroundGradient } from "./ui/background-gradient";

const team = [
  {
    name: "Alex Chen",
    role: "Chief Engineering Officer",
    image: "/person.avif",
    background: "/personBack.avif",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Manufacturing",
    image: "/person.avif",
    background: "/personBack.avif",
  },
  {
    name: "Emma Thompson",
    role: "Talent Director",
    image: "/person.avif",
    background: "/personBack.avif",
  },
  {
    name: "James Wilson",
    role: "Technical Lead",
    image: "/person.avif",
    background: "/personBack.avif",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-[#161F31]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-gray-300">
            Meet the experts behind ERAYA's innovation and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <BackgroundGradient className="rounded-[22px] p-6 bg-[#1F3A8A] text-center h-60">
                <div className="relative w-56 h-32 mx-auto">
                  <img 
                    src={member.background} 
                    alt="background" 
                    className="absolute top-0 left-0 w-full h-full rounded-lg object-cover"
                  />
                  <Avatar className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-white rounded-full">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mt-4">
                  {member.name}
                </h3>
                <p className="text-gray-100 ">{member.role}</p>
              </BackgroundGradient>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
