'use client'
import React from 'react'
import { montserrat400 } from '@/app/fonts/montserrat'
export default function BrandLogo({ size, color, className }: { size?: number, color?: string, className?: string }) {

    return (
        <div
            className={`${montserrat400.className} ${className} font-extrabold tracking-tighter`}
            style={{
                fontSize: size,
                color: color || "rgb(63, 4, 63)"
            }}
        >Seidi</div>
    )
}
