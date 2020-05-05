import { getRepository } from 'typeorm';

import User from '../models/User';
import Follower from '../models/Follower';

import AppError from '../errors/AppError';

import NotificationService from './NotificationService';

interface Request {
  user_id: string;
  followed_user_id: string;
}

class FollowUserService {
  public async execute({
    user_id,
    followed_user_id,
  }: Request): Promise<Follower> {
    const usersRepository = getRepository(User);

    const users = await usersRepository.findByIds([user_id, followed_user_id]);

    if (users.length !== 2) {
      throw new AppError('Cannot find target users.', 404);
    }

    const followersRepository = getRepository(Follower);

    const followRelationExists = await followersRepository.findOne({
      where: { user_id, followed_user_id },
    });

    if (followRelationExists) {
      throw new AppError('You already follow this user.', 404);
    }

    const followRelation = followersRepository.create({
      user_id,
      followed_user_id,
    });

    await followersRepository.save(followRelation);

    const notificationService = new NotificationService();

    await notificationService.execute({
      type: 3,
      user_id,
      receivers: [followed_user_id],
    });

    return followRelation;
  }
}

export default FollowUserService;
