'use client'
import { motion } from 'framer-motion';
import React from 'react'
import avatar1 from "@/assets/avatars/download (1).jpeg"
import avatar2 from "@/assets/avatars/download.jpeg"
import avatar3 from "@/assets/avatars/images (1).jpeg"
import avatar4 from "@/assets/avatars/images.jpeg"
import Image from 'next/image';

const TESTIMONIALS = [
    {
        text: "“I love how easy it is to stay connected with friends and family using this app! The instant messaging is smooth, highly recommend!”",
        name: "Sophia Perez",
        title: "Director @ Quantum",
        avatarImg: avatar1,
    },
    {
        text: "The group chats are so easy to manage. The only thing missing is more theme options, but overall, it's fantastic!”",
        name: "Jamie Lee",
        title: "Founder @ Pulse",
        avatarImg: avatar2,
    },
    {
        text: "“Privacy and security are super important to me, and this app delivers! I feel safe knowing my chats are encrypted.”",
        name: "Alisa Hester",
        title: "Product @ Innovate",
        avatarImg: avatar3,
    },
    {
        text: "“This app has become my go-to for chatting. I love the clean interface and fast messaging. The voice message feature is really convenient when I’m on the go!”",
        name: "Alec Whitten",
        title: "CTO @ Tech Solutions",
        avatarImg: avatar4,
    },

];

export default function Testimonials() {
    return (
        <section className='pt-32 md:py-24'>
            <div className="container">
                <h2 className='text-5xl md:text-6xl font-medium text-center tracking-tighter'>Beyond Expectations</h2>
                <p className='text-black/70 text-center text-lg md:text-xl max-w-sm mx-auto tracking-tight mt-3'>Hear it from some of the top represnatives of the of our top customers</p>
                <div className='overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)] pb-16 pt-2'>
                    <motion.div

                        initial={{
                            translateX: "-50%"
                        }}
                        animate={{
                            translateX: "0"
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 12,
                            ease: "linear"
                        }}
                        className="flex gap-5">

                        {
                            [...TESTIMONIALS, ...TESTIMONIALS].map((testimonial) => {
                                return <div key={testimonial.name} className=' p-2 md:p-10 rounded-xl shadow-2xl max-w-xs md:max-w-md flex-none'>
                                    <div className="text-base tracking-tight md:text-lg">{testimonial.text}</div>
                                    <div className='flex items-center gap-3 mt-5'>
                                        <div className='relative'>
                                            <Image src={testimonial.avatarImg} alt={`Avatar of ${testimonial.name}`} className='h-11 w-11 rounded-full shadow-lg' />
                                        </div>
                                        <div className="flex flex-col ">
                                            <div>
                                                ~ {testimonial.name}
                                            </div>
                                            <div className='text-black/50 text-sm'>{testimonial.title}</div>
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
