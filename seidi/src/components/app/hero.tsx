'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../ui/button'
import img1 from "@/assets/images/wp13396298-people-laughing-wallpapers.jpg"
import img2 from "@/assets/images/wp13396319-people-laughing-wallpapers.jpg"
import Image from 'next/image'

export default function Hero() {





    return (
        <section className='py-8 md:py-24'>
            <div className='container'>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className='w-full flex flex-col items-center'>
                    <p className='text-5xl md:text-7xl font-extrabold text-center'>Welcome</p>
                    <p className='text-xs sm:text-base md:text-lg font-medium text-center max-w-[450px] md:max-w-[550px]'>Join our vibrant community, share your thoughts, and enjoy real-time conversations with friends and family. Start chatting now!</p>
                    <Button className='mt-4 rounded-full text-xs'>Begin Chatting</Button>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.6,
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className='relative flex flex-row items-end justify-center py-12 md:gap-12 gap-6'>
                    <Image src={img2} alt="People" className="rounded-2xl shadow-2xl h-[100px] w-[150px] -rotate-12  md:h-[350px] md:w-[450px]" />
                    <Image src={img1} alt="People" className="rounded-2xl shadow-2xl rotate-12 h-[100px] w-[80px] md:h-[275px] md:w-[150px]" />
                </motion.div>
            </div>
        </section>
    )
}
