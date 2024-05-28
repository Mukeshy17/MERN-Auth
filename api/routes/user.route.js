import express from 'express';
import { test, upadteUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/VerifyUser.js';

const router = express.Router();

router.get('/', test);
router.post("/update/:id", verifyToken, upadteUser);

export default router;