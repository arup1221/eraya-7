'use client';
import React from 'react'
import Link from 'next/link'
import {motion} from 'framer-motion'

interface GreatGrandChildProps {
    link: string;
    title: string;
}

const GreatGrandChild: React.FC<GreatGrandChildProps> = ({link,  title }) => {
    return (
        <div>
            <Link href={link}>
                <motion.div whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}>
                    <button className=" w-[11.5rem] px-8 py-2 rounded-3xl relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:bg-slate-500 hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
                        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
                        <span className="relative z-20">{title}</span>
                    </button>
                </motion.div>
            </Link>
        </div>
    )
}

export default GreatGrandChild