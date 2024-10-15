'use client'
import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ChatRoomType } from '../../../types'
import RoomTile from './chatRoom/roomTile'
import BrandLogo from '../brand/logo'
import { ScrollArea } from "@/components/ui/scroll-area"

export default function ShowChats({ chatsAndRooms, token }: { chatsAndRooms: ChatRoomType[], token: string }) {

  const [openMobileSilder, setOpenMobSlider] = useState<boolean>(false);

  return (
    <div className='relative  h-full'>
      <Sheet open={openMobileSilder} onOpenChange={setOpenMobSlider}>
        <SheetTrigger className=''>
          Open Chats
        </SheetTrigger>
        <SheetContent side={"left"}>
          <SheetHeader>
            <div className="w-full flex items-center pb-4 justify-start gap-x-4">
              <BrandLogo size={45} />
            </div>
            <ScrollArea className="h-[75vh] w-full flex flex-col items-center justify-start gap-y-[15px] pb-6 border-t border-t-black/15 border-l border-l-black/15 border-r border-r-black/15 rounded-lg">
              {
                chatsAndRooms.map((group) => {
                  return <RoomTile key={group.id} group={group} token={token} />
                })
              }
            </ScrollArea>

          </SheetHeader>

        </SheetContent>
      </Sheet>


    </div>

  )
}
