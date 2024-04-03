import  express  from "express";
import userRouter from "./routes/user.router";
import appointmentRouter from "./routes/appointment.router";

const server = express()
server.use(express.json())

server.use(userRouter)
server.use(appointmentRouter)

export default server