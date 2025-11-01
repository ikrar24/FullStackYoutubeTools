import express from 'express';
import checkOldScrapeData  from '../controllers/checkOldScrapeData.js';

const router = express.Router();

router.get('/user-youtube-deatails', checkOldScrapeData);

export default router;
