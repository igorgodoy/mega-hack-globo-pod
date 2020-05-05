import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import followersRouter from './followers.routes';
import interestsRouter from './interests.routes';
import notificationsRouter from './notifications.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/followers', followersRouter);
routes.use('/interests', interestsRouter);
routes.use('/notifications', notificationsRouter);

export default routes;
