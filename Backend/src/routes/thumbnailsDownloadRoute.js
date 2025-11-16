import express from 'express';
import thumbnailsDownloadControll from '../controllers/thumbnailsDownloadControll.js';

const router = express.Router();

router.post('/thumbnail', thumbnailsDownloadControll);

export default router;
