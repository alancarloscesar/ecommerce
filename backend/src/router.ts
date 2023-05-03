
import { Router, Request, Response } from "express";

import { AddUserController } from "./controllers/addUserServiceController";
import { authUserController } from "./controllers/authUserController";
import {mailTransporte} from "./emailConfig"

const router = Router();

router.get("/", (req: Request, res: Response) => {
    return res.json({
        "Ecommerce": "backend da aplicação"
    });
});

router.post("/add/user", new AddUserController().handle)
router.post("/auth", new authUserController().handle)
router.get("/mail", mailTransporte)

export { router }