import React from 'react'
import BrandLogo from '@/components/brand/logo';
import ProfileMenu from './profileMenu';
import Link from 'next/link';
import CreateRoom from '../chatRoom/createRoom';
import EditRoom from '../chatRoom/editRoom';
import { authOptions, CustomSession, CustomUser } from '@/app/api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth';
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
export default async function Header({ user }: { user?: CustomUser }) {



    const session: CustomSession | null = await getServerSession(authOptions);



    return (
        <header className={cn('py-4 border-b border-black/15 md:border-none sticky top-0 z-10 backdrop-blur-xl md:backdrop-blur-none',)}>
            {/* <div className="absolute inset-0 backdrop-blur-xl -z-10"></div> */}
            <div className="container">
                {/*removed - md:border border-white/15 */}
                <div className='flex justify-between items-center md:p-2.5 rounded-xl max-w-2xl md:shadow-lg mx-auto md:backdrop-blur-xl'>
                    <div>
                        <div className='w-20 h-10  inline-flex justify-center  items-center'>
                            <BrandLogo size={28} />
                        </div>
                    </div>
                    <div className='px-8 hidden md:block'>
                        <nav className='flex gap-8 text-xs items-center'>
                            <Link href="/" className='text-black/70 hover:text-black transition-colors'>Home</Link>
                            <CreateRoom triggerStyles={'text-black/70 hover:text-black transition-colors'} user={session?.user!} />
                            <ProfileMenu name={session?.user?.name!} image={session?.user?.image || undefined} />
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
                                    <ProfileMenu name={session?.user?.name!} image={session?.user?.image || undefined} />
                                </div>
                                <nav className='flex flex-col gap-6 text-sm font-semibold items-end justify-center'>

                                    <Link href="/" className='text-black/70 hover:text-black transition-colors'>Home</Link>
                                    <CreateRoom triggerStyles={'text-black/70 hover:text-black transition-colors'} user={session?.user!} />
                                </nav>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div >
            </div >
        </header >
    )
}
