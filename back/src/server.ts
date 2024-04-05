import  express  from "express";
import indexRouter from "./routes/index.router";
import morgan from "morgan";

const server = express()
server.use(express.json())
server.use(morgan("dev"))


server.use(indexRouter)


export default server
