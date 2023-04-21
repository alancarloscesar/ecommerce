
import { Router, Request, Response } from "express";
import { AddUserController } from "./controllers/addUserServiceController";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    return res.json({
        ok: true
    });
});

router.post("/add/user", new AddUserController().handle)

export { router }