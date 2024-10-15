'use client'
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input'
import { CreateRoomSchema, CreateRoomSchemaType } from '@/validations/chatRoom';
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea';
import ErrorMessage from '@/components/ui/errorMessage';
import { DialogClose } from '@radix-ui/react-dialog'
import { Eye, EyeOff } from 'lucide-react';
import { Loader as LoaderIcon } from 'lucide-react';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import axios from 'axios';
import { CHAT_ROOM_URL } from '@/lib/api';
import { clearCache } from '@/actions/common';
export default function EditRoom({ open, setOpen, token, title, passcode, roomId }: { token: string, title: string, passcode: string, roomId: string, open: boolean, setOpen: Dispatch<SetStateAction<boolean>> }) {

    const [showPasscode, setShowPasscode] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<CreateRoomSchemaType>({ resolver: zodResolver(CreateRoomSchema) })


    useEffect(() => {
        setValue("title", title);
        setValue("roomPassword", passcode);
    }, [])



    const onSubmit = async (payload: CreateRoomSchemaType) => {

        try {
            setIsLoading(true);
            console.log("Create room = ", payload);
            const res = await axios.put(CHAT_ROOM_URL + `/${roomId}`, {
                title: payload.title,
                passcode: payload.roomPassword
            }, {
                headers: {
                    Authorization: token
                }
            });
            clearCache("dashboard")
            console.log("Create room res = ", res);
            toast.success(`Chat room ${payload.title} has been edited.`);
        } catch (e) {
            console.log(e);
            if (e instanceof AxiosError) {
                toast.error(e.message);
            }
        } finally {
            setOpen(false);
            setIsLoading(false);
        }

    }


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger></DialogTrigger>
            <DialogContent className="rounded-none" onInteractOutside={(e) => e.preventDefault()}>
                <DialogHeader>
                    <DialogTitle className='font-light text-base text-center'>Edit Room Details</DialogTitle>
                    <DialogDescription>
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center gap-y-2 w-full'>

                            <label htmlFor="title" className='w-full flex flex-col items-start justify-center gap-1 relative'>
                                <p className='text-xs font-bold'>Title</p>
                                <Textarea id='title' className='outline-none focus:outline-none border-none focus:border-none bg-black/10 pr-[45px] font-bold' {...register("title")} />
                                <ErrorMessage message={errors?.title?.message} />
                            </label>

                            <label htmlFor="passcode" className='w-full flex flex-col items-start justify-center gap-1 relative'>
                                <p className='text-xs font-bold'>Passcode</p>
                                <Input type={showPasscode ? 'password' : 'number'}
                                    {...register("roomPassword")} id='passcode' className='outline-none focus:outline-none border-none font-bold focus:border-none bg-black/10 pr-[45px]' />
                                {
                                    showPasscode ? <EyeOff className='absolute top-[30px] right-[10px] cursor-pointer' strokeWidth={1} onMouseDown={() => setShowPasscode(false)} size={20} /> : <Eye className='absolute top-[30px] right-[10px] cursor-pointer' strokeWidth={1} onMouseUp={() => setShowPasscode(true)} size={20} />
                                }
                                <ErrorMessage message={errors?.roomPassword?.message} />

                            </label>
                            <DialogFooter className='w-full border-t border-t-black/20 pb-2 pt-4'>
                                <div className="w-full flex items-center justify-end gap-2">
                                    <DialogClose><Button className='rounded-none bg-red-500 text-xs hover:bg-red-700'>Cancel</Button></DialogClose>
                                    <Button className='rounded-none text-xs flex items-center gap-x-1' disabled={isLoading}>{isLoading ? 'Applying Changes' : 'Edit Room'} {
                                        isLoading && <LoaderIcon className="animate-spin" />
                                    }</Button>
                                </div>
                            </DialogFooter>
                        </form>
                    </DialogDescription>

                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
