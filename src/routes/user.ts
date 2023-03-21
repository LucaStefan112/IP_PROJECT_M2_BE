import { Router } from 'express';
const userRouter = Router();

// controllers
import { getUser, updateUser, register, login } from '../controllers/user.controller';

// middlewares
import { validateToken } from '../middlewares/validation';

// routes
userRouter.get('/', validateToken, getUser);
userRouter.put('/', validateToken, updateUser);
// For register and login routes (test purposes)
userRouter.post('/register', register);
userRouter.post('/login', login);

export default userRouter;