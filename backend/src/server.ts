require("dotenv").config()
import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors'
import cors from "cors"
import { router } from "./router";


const app = express();
app.use(express.json());
app.use(cors())
app.use(router);

// TRATANDO ERROS
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {

    if (err instanceof Error) {
        return res.status(400).json({
            error: err.message
        })
    }

    return res.status(500).json({
        status: 'error',
        message: "Internal Server Error!!!"
    })
})

app.listen(process.env.PORT, () => console.log("🚀🚀 Server Running > 3333... 🚀🚀"));

export default app;