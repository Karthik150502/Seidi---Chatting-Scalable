import { z } from "zod";


export const CreateRoomSchema = z.object({
    title: z.string().min(4, { message: "Room name must be atleat 4 characters." }).max(191, { message: "Room name too long." }),
    roomPassword: z.string().min(4, { message: "Password must be atleast of length 4" }).max(25, { message: "Passcode cannot be more than 25 digits." })
}).required();


export type CreateRoomSchemaType = z.infer<typeof CreateRoomSchema>;

