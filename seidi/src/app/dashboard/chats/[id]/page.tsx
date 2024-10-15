import Link from 'next/link'
import React from 'react'
import ChatBase from '@/components/chat/chatBase'


type Params = {
    params: {
        id: string
    }
}

export default function ChatPage({ params }: Params) {

    return (

        <main
            className={`min-h-screen w-full absolute top-0 overflow-hidden flex flex-col items-center justify-start`}
        >   <div className="header px-8 w-full h-[80px] flex items-center justify-between border-b border-b-black/15">
                <Link className='text-xs text-black/70 hover:text-black transition-colors' href={"/dashboard"}>Go back</Link>
                <p className='text-4xl text-center'>Chat Heading</p>
                <div></div>
            </div>
            <section className='py-2 w-full h-full'>
                <div className="container">
                    Chatting {params.id}
                    <ChatBase groupId={params.id} />
                </div>
            </section>
        </main >
    )
}
