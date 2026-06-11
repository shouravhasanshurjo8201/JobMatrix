import { Router } from 'express';
import { forgotPassword, resetPassword } from './auth.controller.js';

const router = Router();

router.post('/forgot-password', forgotPassword);
router.put('/reset-password/:token', resetPassword);

export default router;