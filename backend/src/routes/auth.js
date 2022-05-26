import { profile, signin, signup } from "../controllers/auth.controller.js";

import { Router } from "express";
import { TokenValidation } from '../libs/validateToken.js';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/profile', TokenValidation, profile);

export default router;