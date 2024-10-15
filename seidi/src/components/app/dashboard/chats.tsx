'use client'
import React from 'react';
import { ChatRoomType } from '../../../../types';
import { ScrollArea } from "@/components/ui/scroll-area";
import RoomTile from '../chatRoom/roomTile';
export default function Chats({ groups, token }: { groups: ChatRoomType[] | [], token: string }) {



    return (
        <section className='h-screen left-0 top-0 absolute md:border-r md:border-r-black/15'>
            <div className='container_2 h-full'>
                <div className='w-[375px] h-full hidden md:block '>
                    <p className='text-xl my-4 text-center'>Find your Chats</p>
                    <ScrollArea className='w-full h-full flex flex-col items-center justify-start gap-y-4 bg-slate-30 pb-5 border-t border-t-black/15'>

                        {
                            groups.map((group) => {
                                return <RoomTile key={group.id} group={group} token={token} />
                            })
                        }
                    </ScrollArea>
                </div>

            </div >
        </section >
    )
}
