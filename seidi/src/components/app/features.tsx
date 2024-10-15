'use client'
import React from 'react'
import FeatureCard from '../base/FeatureCard'
import { motion } from 'framer-motion'
export default function Features() {
    return (
        <section className='py-6 md:py-14'>
            <div className="container">
                <motion.p
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.3,
                        ease: "easeInOut",
                    }}
                    className='text-5xl md:text-6xl font-medium text-center tracking-tighter my-4'>Features</motion.p>

                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-32 md:gap-4 place-content-center place-items-center">
                    {
                        [
                            {
                                title: "Instant Messaging",
                                description: `Connect with Anyone, Anytime - 
                            Stay in touch with friends, family, and colleagues through seamless, real- time messaging.Enjoy smooth conversations without interruptions.`,
                                icon: ""
                            },
                            {
                                title: "Private & Secure",
                                description: "Your conversations are always safe with end-to-end encryption and robust privacy controls. Chat confidently knowing your data is protected.",
                                icon: ""
                            },
                            {
                                title: "Multimedia Sharing",
                                description: `Share Moments Instantly - 
Bring your conversations to life by easily sharing photos, videos, documents, and voice notes. Keep your chats engaging and expressive.`,
                                icon: ""
                            },
                        ].map((card) => (<FeatureCard key={card.title} title={card.title} description={card.description} icon={card.icon} />))
                    }
                </div>
            </div>
        </section>
    )
}
