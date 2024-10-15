'use client'
import React, { useEffect, useRef, useState } from 'react'
import BrandLogo from '@/components/brand/logo';
import ProfileMenu from './profileMenu';
import Link from 'next/link';
import CreateRoom from '../chatRoom/createRoom';
import { CustomSession } from '@/app/api/auth/[...nextauth]/options';
import { ChevronDown as Nubbin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export default function HeaderClient({ session }: { session: CustomSession | null }) {



    const [showHeader, setShowHeader] = useState<boolean>(true);
    const timerRef = useRef<NodeJS.Timeout>();
    const pathname = usePathname();




    useEffect(() => {
        handleSlideBack();
        return () => {
            clearTimeout(timerRef.current);
        }
    }, [])

    const handleSlideBack = () => {
        if (!showHeader) {
            handleHeaderTimeout();
        } else {
            setShowHeader(false);
        }
    }

    const handleHeaderTimeout = () => {
        clearTimeout(timerRef.current);
        setShowHeader(true);
        timerRef.current = setTimeout(() => {
            setShowHeader(false);
        }, 4000)
    }


    return (



        < div className={cn('py-4 px-6 sticky md:w-[80vw] z-10 top-0 flex justify-between items-center p-2.5 rounded-xl  max-w-2xl shadow-2xl mx-auto bg-white transform transition-transform duration-300 ease-in-out',
            showHeader ? 'translate-y-0' : '-translate-y-[60px]',
        )} >
            <div>
                <div className='w-20 h-10  inline-flex justify-center  items-center'>
                    <BrandLogo size={28} />
                </div>
            </div>
            <div className='px-8'>
                <nav className='flex gap-8 text-xs items-center'>
                    <Link href="/" className='text-black/70 hover:text-black transition-colors'>Home</Link> 
                    <CreateRoom triggerStyles={'text-black/70 hover:text-black transition-colors'} user={session?.user!} />
                    <ProfileMenu name={session?.user?.name!} image={session?.user?.image || undefined} />
                </nav>
            </div>


            <div className="w-16 h-2 py-2 grid place-content-center cursor-pointer absolute right-[24px] -bottom-[15px] rounded-br-lg rounded-bl-lg shadow-2xl bg-white" onClick={() => {
                handleSlideBack();
            }}>
                <Nubbin strokeWidth={1} strokeOpacity={0.5} className={cn('transform transition-transform duration-300 ease-in-out', showHeader ? 'rotate-180' : 'rotate-0')} />
            </div>

        </div >
    )
}
