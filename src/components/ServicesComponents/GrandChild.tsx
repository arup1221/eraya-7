'use client';
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface GrandChildProps {
    link: string;
    title: string;
}

const GrandChild: React.FC<GrandChildProps> = ({link,  title }) => {
    return (
        <div>
            <Link href={link}>
                <motion.div whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}>
                    <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-md font-medium text-white backdrop-blur-3xl">
                            {title}
                        </span>
                    </button>
                </motion.div>
            </Link>
        </div>
    )
}

export default GrandChild