import express from 'express';
import handlePassword from '../controllers/handlePassword.js';

const router = express.Router();

router.post('/admin-password', handlePassword);

export default router;
