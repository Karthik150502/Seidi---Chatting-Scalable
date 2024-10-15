'use client'
import React, { Suspense, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from '@/components/base/userAvatar'
import dynamic from 'next/dynamic'
const Logout = dynamic(() => import("../logout"))
import { Loader } from 'lucide-react'
export default function ProfileMenu({ name, image }: { name: string, image?: string }) {

    const [logoutOpen, setLogoutOpen] = useState<boolean>(false);


    return (
        <>
            {
                logoutOpen && <Suspense fallback={<Loader className='animate-spin' />}>
                    <Logout open={logoutOpen} setIsOpen={setLogoutOpen} />
                </Suspense>
            }
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <UserAvatar url={image} name={name} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel className='text-xs'>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='text-xs cursor-pointer'>Profile</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setLogoutOpen(true)} className='text-xs cursor-pointer'>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>

    )
}
