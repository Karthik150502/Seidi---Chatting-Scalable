import React from 'react'
import BrandLogo from '../brand/logo'
import Link from 'next/link'


export default function Footer() {
    return (
        <footer className='py-5 border-t border-black/15 absolute bottom-0 w-screen z-10 bg-white'>
            <div className='container'>
                <div className='flex flex-col gap-8 lg:flex-row lg:items-center'>

                    <div className='flex gap-2 items-center'>

                        <div className='font-medium'>                                           <BrandLogo size={28} />
                        </div>
                    </div>
                    <nav className='flex flex-col gap-5 lg:flex-row lg:gap-7 lg:flex-1 lg:justify-center'>
                        <Link href="#" className='text-black/70 hover:text-black text-xs md:text-sm transition-colors'>Features</Link>
                        <Link href="/dashboard" className='text-black/70 hover:text-black text-xs md:text-sm transition-colors'>Dashboard</Link>

                    </nav>
                    <div className='flex gap-5 lg:flex-row lg:justify-end'>

                    </div>
                </div>
            </div>
        </footer>
    )
}
