import express from 'express';
import bus from './bus';

const router = express.Router();

router.use('/api/bus', bus);

export default router;
