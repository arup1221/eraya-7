"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";

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
    <section id="team" className="min-h-screen py-20  sm:w-full bg-black  bg-dot-white/[0.2] relative flex items-center justify-center">
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] gap-x-2"></div> */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4 brightness-100">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-gray-200 brightness-100 sm:brightness-75">
            Meet the experts behind ERAYA's innovation and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-10 sm:p-0 cursor-pointer ">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <BackgroundGradient className="rounded-[22px] p-6 bg-zinc-950 text-center h-[26rem]">
                <div className="relative w-56 h-32 mx-auto">
                  <Image
                    src={member.background}
                    alt="background"
                    className="absolute top-0 left-0 w-full h-[10rem] rounded-lg object-cover"
                    layout="fill"
                  />
                  <Avatar className="absolute top-[90px] left-1/2 transform -translate-x-1/2 w-24 h-24 border-4 border-white rounded-full">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mt-20">
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