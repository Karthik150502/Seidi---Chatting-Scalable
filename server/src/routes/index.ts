import { Router } from "express";
import AuthController from "../controllers/AuthController.js";
import AuthMiddleware from "../middlewares/AuthMiddleware.js";
import ChatGroupController from "../controllers/ChatGroupController.js";


const router = Router();


// Authentication
router.post("/auth/login", AuthController.login);



// Chat Group Routes
router.post("/chat-room", AuthMiddleware, ChatGroupController.store);
router.get("/chat-room", AuthMiddleware, ChatGroupController.index);
router.get("/chat-room/:id", AuthMiddleware, ChatGroupController.show);
router.put("/chat-room/:id", AuthMiddleware, ChatGroupController.update);
router.delete("/chat-room/:id", AuthMiddleware, ChatGroupController.delete);



export default router


