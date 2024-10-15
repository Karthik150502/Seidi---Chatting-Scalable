'use client'
import React from 'react'
import { motion } from 'framer-motion'


export default function ErrorMessage({ message }: { message: string | undefined | null }) {
    return (
        <div className='w-full flex items-center justify-end h-[15px]'>
            {
                message && <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className='text-xs text-red-500'>{message}</motion.p>
            }
        </div>
    )
}
