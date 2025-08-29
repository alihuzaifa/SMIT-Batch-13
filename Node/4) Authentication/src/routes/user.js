import express from "express";
import { createUser, signinUser } from "../controllers/user.js";
const router = express.Router();

router.post("/signup", createUser);
router.post("/login", signinUser);

export default router;
