"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const team = [
  {
    name: "Sarah Chen",
    role: "Chief Engineering Officer",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Michael Rodriguez",
    role: "Head of Manufacturing",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "Emma Thompson",
    role: "Talent Director",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop",
  },
  {
    name: "James Wilson",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop",
  },
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-muted/50">
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