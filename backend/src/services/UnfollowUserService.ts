import { getRepository } from 'typeorm';

import Follower from '../models/Follower';

import AppError from '../errors/AppError';

interface Request {
  user_id: string;
  followed_user_id: string;
}

class UnfollowUserService {
  public async execute({
    user_id,
    followed_user_id,
  }: Request): Promise<Follower> {
    const followersRepository = getRepository(Follower);

    const followRelationExists = await followersRepository.findOne({
      where: { user_id, followed_user_id },
    });

    if (!followRelationExists) {
      throw new AppError('Cannot find target users.', 404);
    }

    const result = await followersRepository.delete({
      user_id,
      followed_user_id,
    });

    return result.raw;
  }
}

export default UnfollowUserService;
