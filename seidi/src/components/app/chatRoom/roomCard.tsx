'use client'
import React, { useState } from 'react'
import {
    Card,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Ellipsis } from 'lucide-react'
import EditRoom from './editRoom'
import DeleteChatRoom from './deleteRoom'
import { motion } from "framer-motion"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
export default function RoomCard({ title, roomId, token }: { title: string, roomId: string, token: string }) {

    const [openEditRoom, setOpenEditRoom] = useState<boolean>(false);
    const [openDeleteRoom, setOpenDeleteRoom] = useState<boolean>(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
            }}
            className="w-full h-[25px] my-10">

            <Card className='w-full '>
                <CardHeader className='w-full'>
                    <div className="w-full flex items-center justify-between">
                        <CardTitle className='font-light text-xs'>{title}</CardTitle>

                        <div className="flex items-center gap-x-2">

                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Ellipsis className='focus:outline-none focus:border-none' />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuLabel className='text-xs'>My Account</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className='text-xs cursor-pointer' onClick={() => { setOpenEditRoom(true) }}>Edit Room</DropdownMenuItem>
                                    <DropdownMenuItem className='text-xs cursor-pointer' onClick={() => { setOpenDeleteRoom(true) }}>Delete Room</DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                            {
                                openDeleteRoom && <DeleteChatRoom open={openDeleteRoom}
                                    setOpen={setOpenDeleteRoom} title={title} roomId={roomId} token={token} />
                            }
                            {
                                openEditRoom && <EditRoom  open={openEditRoom}
                                    setOpen={setOpenEditRoom} roomId={roomId} token={token} />
                            }

                        </div>
                    </div>
                </CardHeader>
            </Card>
        </motion.div>

    )
}
