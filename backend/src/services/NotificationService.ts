import { getRepository } from 'typeorm';

import Notification from '../models/Notification';
import NotificationReceiver from '../models/NotificationReceiver';

interface Request {
  type: number;
  user_id: string;
  receivers: string[];
}

class NotificationService {
  public async execute({
    type,
    user_id,
    receivers,
  }: Request): Promise<Notification> {
    const notificationsRepository = getRepository(Notification);

    const notification = notificationsRepository.create({ user_id, type });

    await notificationsRepository.save(notification);

    const notificationsReceiversRepository = getRepository(
      NotificationReceiver,
    );

    receivers.map(async receiver => {
      const notificationReceiver = notificationsReceiversRepository.create({
        notification_id: notification.id,
        user_id: receiver,
      });

      await notificationsReceiversRepository.save(notificationReceiver);

      return notificationReceiver;
    });

    return notification;
  }
}

export default NotificationService;
