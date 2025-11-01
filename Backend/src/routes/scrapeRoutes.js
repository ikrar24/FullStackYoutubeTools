import express from 'express';
import { scrapeYouTubeData } from '../controllers/scrapeController.js';

const router = express.Router();

router.get('/scrape', scrapeYouTubeData);

export default router;
