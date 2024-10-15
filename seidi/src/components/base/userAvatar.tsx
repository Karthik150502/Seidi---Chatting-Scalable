import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function UserAvatar({ url, name }: { url?: string, name: string }) {


    return (
        <Avatar>
            <AvatarImage src={url} />
            <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>

    )
}
