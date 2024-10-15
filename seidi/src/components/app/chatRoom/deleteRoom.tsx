'use client'
import React, { Dispatch, SetStateAction, useState } from 'react'
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
import { toast } from 'sonner';
import axios from 'axios';
import { CHAT_ROOM_URL } from '@/lib/api';
import { Loader as LoaderIcon } from 'lucide-react';
import { clearCache } from '@/actions/common';
export default function DeleteChatRoom({ open, setOpen, title, roomId, token }: { roomId: string, title: string, token: string, open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handelChatDelete = async () => {
        try {
            setIsLoading(true);
            const res = await axios.delete(CHAT_ROOM_URL + `/${roomId}`, {
                headers: {
                    Authorization: token
                }
            });
            console.log(res);
            toast.success("Chat Room Deleted successfully.")
            clearCache("dashboard");
        } catch (e) {
            console.log(e);
            toast.error("Error in deleting the Room, maybe the room doesn't exist as it is already deleted?")
        } finally {
            setIsLoading(false);
            setOpen(false);
        }
    }


    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            {/* text-black/70 hover:text-black transition-colors */}
            <AlertDialogTrigger></AlertDialogTrigger>
            <AlertDialogContent className='rounded-none'>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription className='font-bold'>
                        Do you want to Delete the Chat Room {title}?
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel className='rounded-none bg-green-500 text-xs hover:bg-green-700'>Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={isLoading} onClick={handelChatDelete} className='text-xs rounded-none'>{isLoading ? 'Deleting Room' : 'Yes, Delete Room'} {
                        isLoading && <LoaderIcon className="animate-spin" />
                    }</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}
