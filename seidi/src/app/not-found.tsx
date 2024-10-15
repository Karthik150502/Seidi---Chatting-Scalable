import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
export default function NotFound() {
    return (
        <div className='min-h-screen overflow-hidden relative flex flex-col items-center justify-center gap-4'>
            <p className='md:text-6xl text-5xl text-center'>opps, 404 - Page not found</p>
            <Link href={"/"} >
                <Button className='rounded-full'>
                    Back to home
                </Button>
            </Link>
        </div>
    )
}
