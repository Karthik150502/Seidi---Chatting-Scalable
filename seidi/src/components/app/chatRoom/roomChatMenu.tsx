'use client'
import React, { Suspense, useState } from 'react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dynamic from 'next/dynamic';
import { Ellipsis } from 'lucide-react';
import { ChatRoomType } from '../../../../types';
const DeleteChatRoom = dynamic(() => import('./deleteRoom'));
const EditRoom = dynamic(() => import('./editRoom'));
export default function RoomChatMenu({ group, token }: { group: ChatRoomType, token: string }) {

    const [openEditRoom, setOpenEditRoom] = useState<boolean>(false);
    const [openDeleteRoom, setOpenDeleteRoom] = useState<boolean>(false);

    return (
        <>

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Ellipsis className='focus:outline-none focus:border-none text-black/50' size={15} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel className='text-xs'>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className='text-xs cursor-pointer' onClick={(e) => {
                        e.stopPropagation();
                        setOpenEditRoom(true);
                    }}>Edit Room</DropdownMenuItem>
                    <DropdownMenuItem className='text-xs cursor-pointer' onClick={(e) => {
                        e.stopPropagation();
                        setOpenDeleteRoom(true);
                    }}>Delete Room</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            {
                openDeleteRoom && <Suspense fallback={<p>Loading....</p>}>
                    <DeleteChatRoom open={openDeleteRoom}
                        setOpen={setOpenDeleteRoom} title={group.title} roomId={group.id} token={token} />
                </Suspense>

            }
            {
                openEditRoom && <Suspense fallback={<p>Loading....</p>}>
                    <EditRoom open={openEditRoom}
                        setOpen={setOpenEditRoom} roomId={group.id} title={group.title} passcode={group.passcode} token={token} />
                </Suspense>
            }
        </>
    )
}
