import { Request, Response } from "express"
import prisma from "../config/db.config.js"
import jwt from "jsonwebtoken"

interface LoginPayload {
    name: string,
    email: string,
    provider: string,
    oauth_id: string,
    image?: string
}

export default class AuthController {
    static async login(req: Request, res: Response) {
        try {
            const body: LoginPayload = req.body;
            let findUser = await prisma.user.findUnique(
                {
                    where: {
                        email: body.email
                    }
                }
            )

            if (!findUser) {
                findUser = await prisma.user.create({
                    data: body
                })
            }


            let JWTPayload = {
                name: body.name,
                email: body.email,
                id: findUser.id
            }

            const token = jwt.sign(JWTPayload, process.env.JWT_SECRET, {
                expiresIn: "365d"
            })

            return res.json({
                status: 200,
                message: "Logged in successfully",
                user: {
                    ...findUser,
                    token: `Bearer ${token}`
                }
            })
        } catch (e) {
            console.log("Failed to login, ", e)
            return res.json({
                status: 500,
                message: "Something went wrong, failed to log in, try again after some time.",
            })
        }
    }
}