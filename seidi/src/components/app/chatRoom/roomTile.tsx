'use client'
import React from 'react';
import { motion } from 'framer-motion';
import RoomChatMenu from './roomChatMenu';

import dynamic from 'next/dynamic';



import { ChatRoomType } from '../../../../types';




export default function RoomTile({ group, token }: { group: ChatRoomType, token: string }) {


    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.3,
                duration: 0.3,
                ease: "easeInOut",
            }}
            onClick={() => {
                console.log('clicked on the Chat...')
            }}
            className='w-full h-[45px] flex items-center justify-between rounded-none  hover:bg-slate-100/55 transition-colors duration-300 cursor-pointer border-b border-b-black/15 px-4'>
            <div className='flex flex-col items-start justify-center text-xs'>
                {group.title}
            </div>

            <RoomChatMenu group={group} token={token} />

        </motion.div>
    )
}
