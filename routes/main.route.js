import {Router} from 'express';
import { test } from '../controllers/main.controller.js';
import auth_route from './auth.route.js';

const router = Router()

router.get('/test', test)

router.use('/auth', auth_route)

export default router