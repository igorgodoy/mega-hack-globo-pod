import { Router } from 'express';
import { getRepository } from 'typeorm';

import Notification from '../models/Notification';

import ensureIsAuthenticated from '../middlewares/ensureAuthenticated';

import NotificationService from '../services/NotificationService';

const notificationsRouter = Router();

notificationsRouter.use(ensureIsAuthenticated);

notificationsRouter.get('/', async (req, res) => {
  const { id: user_id } = req.user;

  const notificationsRepository = getRepository(Notification);

  const notifications = await notificationsRepository.find({
    where: { user_id },
  });

  res.json(notifications);
});

notificationsRouter.post('/', async (req, res) => {
  const { type, receivers } = req.body;
  const { id: user_id } = req.user;

  const notificationService = new NotificationService();

  const notification = await notificationService.execute({
    type,
    receivers,
    user_id,
  });

  res.json(notification);
});

export default notificationsRouter;
