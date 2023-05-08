
import { Router, Request, Response } from "express";

import { isAuthenticated } from "./middlewares/isAuthenticated";

import { AddUserController } from "./controllers/user/addUserServiceController";
import { authUserController } from "./controllers/user/authUserController";
import { mailTransporte } from "./emailConfig"
import { ForgotPasswordController } from "./controllers/user/forgotPasswordController";
import { DetailUserController } from "./controllers/user/userDetailController";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    return res.json({
        "Ecommerce": "backend da aplicação"
    });
});

router.post("/add/user", new AddUserController().handle)
router.post("/auth", new authUserController().handle)
router.get("/mail", mailTransporte)
router.put("/reset/password", new ForgotPasswordController().handle)
router.get("/me", isAuthenticated, new DetailUserController().handle)

export { router }