import express, { Application, Request, Response } from "express";


// SACLING: Streaming to different servers using the redis-streams-adaptor
import { createAdapter } from "@socket.io/redis-streams-adapter";

// Admin UI
import { instrument } from "@socket.io/admin-ui";

import "dotenv/config";
import { Env } from "./lib/env.js";
import cors from "cors";
import Routes from "./routes/index.js";
import { Server } from 'socket.io';
import { createServer } from 'http'
import { initSocket } from "./socket/socket.js";
import redis from "./config/redis.config.js";

const app: Application = express();
const PORT = process.env.PORT || 7000;



const server = createServer(app);
const io = new Server(server, {
  cors: {
    // origin: "*",
    // Origins to allow, to allow incoming traffic and to allow Socket interaction monitoring
    origin: [Env.APP_URL, "https://admin.socket.io"],
    credentials: true
  },
  adapter: createAdapter(redis)
});


instrument(io, {
  auth: false,
  mode: "development"
})


initSocket(io);
export { io };

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));




app.use("/api", Routes);



app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});

server.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
