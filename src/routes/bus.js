import express from 'express';
import BusManager from '../controllers/bus';

const route = express.Router();

route.get('/bus', BusManager.getAllBus);

export default route;
