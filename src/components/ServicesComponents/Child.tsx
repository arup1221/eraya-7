'use client'
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "../ui/moving-border";

interface ChildProps {
    link: string;
    title: string;
}

const Child: React.FC<ChildProps> = ({ link, title }) => {
    return (
        <div>
            <Link href={link}>
                <motion.div whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-slate-900 text-white border-slate-800 text-lg font-semibold w-full"
                    >
                        {title}
                    </Button>
                </motion.div>
            </Link>
        </div>
    )
}

export default Child