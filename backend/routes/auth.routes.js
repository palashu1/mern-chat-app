import express from "express";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

//you know here all method we can write like:- get,post,put,delete etc.

router.post("/login",login);

router.post("/signup",signup);

router.post("/logout",logout);


export default router;