import React, { Children } from 'react'
import { ChatRoomType } from '../../../types';
import { fetchChatRooms } from '@/fetch/roomFetch';
import { getServerSession } from 'next-auth';
import { authOptions, CustomSession } from '../api/auth/[...nextauth]/options';
import Chats from '@/components/app/dashboard/chats';
import ShowChats from '@/components/app/showChatsMobile';
export default async function page() {

    const session: CustomSession | null = await getServerSession(authOptions);
    const groups: ChatRoomType[] | [] = await fetchChatRooms(session?.user?.token!);
    const token: string = session?.user?.token!

    return (
        <main className="min-h-screen overflow-auto flex">
            <Chats groups={groups} token={token} />
            <div className="absolute right-0 top-0 w-full md:w-[calc(100%-375px)] h-screen">
                <div className='block md:hidden'>
                    <ShowChats chatsAndRooms={groups} token={token} />
                </div>
            </div>
        </main>
    )
}
