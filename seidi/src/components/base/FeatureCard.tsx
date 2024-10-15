'use client'
import React from 'react'


type Props = {
    title: string,
    description: string,
    icon?: string,
    className?: string
}


import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { motion } from 'framer-motion';
export default function FeatureCard({ title, description, icon, className }: Props) {
    return (
        <motion.div

            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
            }}
            className='max-w-xs md:max-w-md max-h-16 md:max-h-20'>

            <Card className={`w-full shadow-lg rounded-none ${className}`}>
                <CardHeader>
                    <CardTitle className='flex items-center justify-start gap-x-2'>
                        {icon && <Image src={icon} alt='Card Icon' height={25} width={25} />}{title}
                    </CardTitle>
                    <CardDescription>
                        {description}</CardDescription>
                </CardHeader>
            </Card>
        </motion.div>
    )
}
