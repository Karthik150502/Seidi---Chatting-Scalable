import { Server, Socket } from "socket.io";


interface CustomSocket extends Socket {
    room?: string
}



export function initSocket(io: Server) {


    io.use((socket: CustomSocket, next) => {
        const room = socket.handshake.auth.room;
        if (room) {
            return next(new Error("Invalid Room."))
        }
        socket.room = room;
        next();
    })


    io.on("connection", (socket: CustomSocket) => {

        // Joining the room
        socket.join(socket.room);


        console.log("The socket connection has been initialized = ", socket.id);



        socket.on("message", (data) => {
            console.log("Server side message = ", data);

            // Sends message to everyone/clients who is connected to the socket.
            // socket.emit("message", { message: "Data from the server side.", data });


            // Sends the data to everyone except the sender.
            // socket.broadcast.emit("message", { message: "Data from the server side.", data });


            // For sending response to particular rooms only.
            io.to(socket.room).emit("message", data);
        })



        socket.on("disconnect", () => {
            console.log("The socket has been disconnected.....", socket.id)
        })
    })
}