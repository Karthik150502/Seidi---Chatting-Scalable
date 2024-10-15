import { CHAT_ROOM_URL } from "@/lib/api";


export async function fetchChatRooms(token: string) {
    const res = await fetch(CHAT_ROOM_URL, {
        method: "GET",
        headers: {
            Authorization: token
        },
        next: {
            revalidate: 60 * 60,
            tags: ["dashboard"]
        }
    })
    if (!res.ok) {
        throw new Error("Failed to fetch Chat rooms.")
    }

    const response = await res.json();
    if (response?.groups) {
        return response.groups
    }
    return [];
}