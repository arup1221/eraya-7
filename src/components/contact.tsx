"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { SparklesCore } from "../components/ui/sparkles";

export function Contact() {
  return (
    <section id="contact" className="h-full py-20 w-full bg-black     relative flex items-center justify-center">
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-4"
        >
          <h1 className="md:text-4xl text-2xl font-bold text-center text-white relative z-20">
            Contact Us
          </h1>
          <div className="flex justify-center">
            <div className="w-[40rem] h-20 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

              {/* Core component */}
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={1200}
                className="w-full h-full"
                particleColor="#FFFFFF"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
          </div>


        </motion.div>

        <div className="w-full flex justify-center">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 flex justify-center w-screen"
          // onSubmit={handleSubmit}
          >
            <div className="space-y-4 flex flex-col justify-center w-full md:w-1/2">
              <LabelInputContainer>
                <Input id="email" type="text" required
                  maxLength={500}
                  placeholder="Your email"
                // value={senderEmail}
                // onChange={(e) => setSenderEmail(e.target.value)} 
                />
              </LabelInputContainer>

              <LabelInputContainer>
                <Textarea
                  id="message"
                  placeholder="Type your message here..."

                // value={message}
                // onChange={(e) => setMessage(e.target.value)}
                />
              </LabelInputContainer>

              <div className="flex justify-center">
                <button className="bg-zinc-800  no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xl p font-semibold leading-6  text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-800  p-2 px-7  ring-1 ring-white/10 ">
                    <span>{`Submit`}</span>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40"></span>
                </button>
              </div>
            </div>
          </motion.form>
        </div>

      </div>
    </section>
  );
}


////////////////////////


const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};