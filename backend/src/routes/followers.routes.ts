import { Router } from 'express';
import { getRepository } from 'typeorm';

import Follower from '../models/Follower';

import FollowUserService from '../services/FollowUserService';
import UnfollowUserService from '../services/UnfollowUserService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const followersRouter = Router();

followersRouter.use(ensureAuthenticated);

followersRouter.get('/', async (req, res) => {
  const user_id = req.user.id;
  const followersRepository = getRepository(Follower);

  const followeds = await followersRepository.find({
    select: ['id', 'created_at', 'updated_at'],
    relations: ['followed_user'],
    where: { user_id },
  });

  const followers = await followersRepository.find({
    select: ['id', 'created_at', 'updated_at'],
    relations: ['user'],
    where: { followed_user_id: user_id },
  });

  res.json({ followers, followeds });
});

followersRouter.post('/', async (req, res) => {
  const { followed_user_id } = req.body;

  const followUserService = new FollowUserService();

  const followRelation = await followUserService.execute({
    user_id: req.user.id,
    followed_user_id,
  });

  return res.json(followRelation);
});

followersRouter.delete('/:followeruserid', async (req, res) => {
  const { followeruserid: followed_user_id } = req.params;

  const unfollowUserService = new UnfollowUserService();

  const unfollowResult = await unfollowUserService.execute({
    user_id: req.user.id,
    followed_user_id,
  });

  return res.json(unfollowResult);
});

export default followersRouter;
