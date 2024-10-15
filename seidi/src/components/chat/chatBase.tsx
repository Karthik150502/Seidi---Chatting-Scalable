'use client'
import { getSocket } from '@/lib/socket/socket.config';
import { useEffect, useMemo } from 'react';
import { v4 as uuidV4 } from "uuid";
import React from 'react'
import { Button } from '../ui/button';

export default function ChatBase({ groupId }: { groupId: string }) {

    const socket = useMemo(() => {
        const socket = getSocket();
        socket.auth = {
            room: groupId
        }
        return socket.connect();
    }, []);


    useEffect(() => {
        socket.on("message", (data) => {
            console.log("The socket message is ", data)
        })


        return () => {
            socket.close();
        }
    }, [])


    const handleClick = () => {
        console.log("Sent message...")
        socket.emit("message", { name: "Karthik J", id: uuidV4() })
    }


    return (
        <div>
            <Button onClick={handleClick}>Send Message</Button>
        </div>
    )
}
