'use client'
import React from 'react'
import { Menu } from 'lucide-react';
import BrandLogo from '../brand/logo';

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { CustomUser } from '@/app/api/auth/[...nextauth]/options';
import Link from 'next/link';

export default function Header({ user }: { user?: CustomUser }) {




    return (
        <header className='py-4 border-b border-black/15 md:border-none sticky top-0 z-10 backdrop-blur-xl md:backdrop-blur-none'>
            {/* <div className="absolute inset-0 backdrop-blur-xl -z-10"></div> */}
            <div className="container">
                {/*removed - md:border border-white/15 */}
                <div className='flex justify-between items-center md:p-2.5 rounded-xl max-w-2xl md:shadow-lg mx-auto md:backdrop-blur-xl'>
                    <div>
                        <div className='w-20 h-10  inline-flex justify-center  items-center'>
                            <BrandLogo size={28} />
                        </div>
                    </div>
                    <div className='hidden md:block px-8'>
                        <nav className='flex gap-8 text-xs'>
                            <Link href="#" className='text-black/70 hover:text-black transition-colors'>Features</Link>
                            {
                                user ? <Link href="/dashboard" className='text-black/70 hover:text-black transition-colors'>Dashboard</Link> : <Link href="/sign-in" className='text-black/70 hover:text-black transition-colors'>Log In</Link>
                            }

                        </nav>
                    </div>

                    <Sheet>
                        <SheetTrigger className='md:hidden'>
                            <div className='flex gap-4 items-center'>
                                <Menu />
                            </div>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <div className="w-full flex items-center border-b border-b-black/20 pb-4 justify-start gap-x-4">
                                    <BrandLogo size={45} />
                                </div>
                                <nav className='flex flex-col gap-8 text-sm font-semibold items-end justify-center'>

                                    <Link href="#" className='text-black/70 hover:text-black transition-colors'><SheetClose>Features</SheetClose></Link>
                                    {
                                        user ? <Link href="/dashboard" className='text-black/70 hover:text-black transition-colors'><SheetClose>Dashboard</SheetClose></Link> : <Link href="/sign-in" className='text-black/70 hover:text-black transition-colors'><SheetClose>Log In</SheetClose></Link>
                                    }

                                </nav>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>
            </div>
        </header>
    )
}
