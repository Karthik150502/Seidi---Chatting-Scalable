'use client'
import React, { Dispatch, SetStateAction } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { signOut } from 'next-auth/react'
export default function Logout({ open, setIsOpen }: { open: boolean, setIsOpen: Dispatch<SetStateAction<boolean>> }) {


    const handelLogout = async () => {
        await signOut({
            redirect: true,
            callbackUrl: "/"
        });
    }


    return (
        <AlertDialog open={open} onOpenChange={setIsOpen}>
            {/* text-black/70 hover:text-black transition-colors */}
            <AlertDialogTrigger className=''>Logout</AlertDialogTrigger>
            <AlertDialogContent className='rounded-none'>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription className='font-bold'>
                        Do you want to logout of Seidi?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className='rounded-none bg-green-500 text-xs hover:bg-green-700'>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={handelLogout} className='text-xs rounded-none'>Yes, Logout</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
