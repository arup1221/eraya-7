"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "Sarah Chen",
    role: "Chief Engineering Officer",
    image: "./person.avif",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Manufacturing",
    image: "./person.avif",
  },
  {
    name: "Emma Thompson",
    role: "Talent Director",
    image: "./person.avif",
  },
  {
    name: "James Wilson",
    role: "Technical Lead",
    image: "./person.avif",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20  bg-[#161F31]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Meet the experts behind ERAYAs innovation and excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-lg p-6 text-center space-y-4 transition-transform hover:-translate-y-2">
                <Avatar className="w-32 h-32 mx-auto">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}