"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ParentProps {
    link: string;
    title: string;
}

const Parent: React.FC<ParentProps> = ({ link, title }) => {
    return (
        <div>
            <Link href={link}>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="inline-flex h-20 w-40 animate-shimmer items-center justify-center rounded-2xl border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-offset-slate-50 font-bold text-4xl font-ailerons"
                >
                    {title}
                </motion.button>
            </Link>
        </div>
    );
};

export default Parent;
