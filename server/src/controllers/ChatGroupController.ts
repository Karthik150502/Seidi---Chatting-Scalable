import { Request, Response } from "express"
import prisma from "../config/db.config.js";


export default class ChatGroupController {
    static async show(req: Request, res: Response) {
        try {
            const { id } = req.params;
            let chatRooms = await prisma.chatRoom.findUnique({
                where: {
                    id: id
                },
            })

            return res.status(200).json({
                status: 200,
                message: "Group fetched successfully.",
                groups: chatRooms
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                messsage: "Something went wrong, kindly try again later."
            })
        }
    }

    static async index(req: Request, res: Response) {
        try {
            const user = req.user;
            let chatRooms = await prisma.chatRoom.findMany({
                where: {
                    user_id: user.id
                },
                orderBy: {
                    created_at: "desc"
                }
            })

            return res.status(200).json({
                status: 200,
                message: "Groups fetched successfully.",
                groups: chatRooms
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                messsage: "Something went wrong, kindly try again later."
            })
        }
    }

    static async store(req: Request, res: Response) {
        try {
            const body = req.body;
            const user = req.user;
            await prisma.chatRoom.create({
                data: {
                    title: body.title,
                    passcode: body.passcode,
                    user_id: user.id
                }
            })

            return res.status(200).json({
                status: 200,
                message: "Group created successfully."
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                messsage: "Something went wrong, kindly try again later."
            })
        }
    }

    static async update(req: Request, res: Response) {
        try {
            const body = req.body;
            const { id } = req.params;
            let updatedChatRoom = await prisma.chatRoom.update({
                data: {
                    title: body.title,
                    passcode: body.passcode,
                },
                where: {
                    id: id
                }
            });

            return res.status(200).json({
                status: 200,
                message: "Group updated successfully.",
                roomId: updatedChatRoom.id
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                messsage: "Something went wrong, kindly try again later."
            })
        }
    }
    
    static async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            await prisma.chatRoom.delete({
                where: {
                    id: id
                },
            })

            return res.status(200).json({
                status: 200,
                message: "Group deleted successfully.",
            })
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                messsage: "Something went wrong, kindly try again later."
            })
        }
    }

}