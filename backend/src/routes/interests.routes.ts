import { Router } from 'express';
import { getRepository } from 'typeorm';

import Interests from '../models/Interest';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import AppError from '../errors/AppError';

const interestsRouter = Router();

interestsRouter.use(ensureAuthenticated);

interestsRouter.get('/', async (req, res) => {
  const { id: user_id } = req.user;

  const interestsRepository = getRepository(Interests);

  const interests = await interestsRepository.findOne({ where: { user_id } });

  if (interests) interests.value = JSON.parse(interests.value);

  res.json(interests);
});

interestsRouter.post('/', async (req, res) => {
  const { interests } = req.body;
  const { id: user_id } = req.user;

  const interestsRepository = getRepository(Interests);

  const interest = interestsRepository.create({
    value: JSON.stringify(interests),
    user_id,
  });

  await interestsRepository.save(interest);

  res.json(interest);
});

interestsRouter.patch('/', async (req, res) => {
  const { interests } = req.body;
  const { id: user_id } = req.user;

  const interestsRepository = getRepository(Interests);

  const userInterests = await interestsRepository.findOne({
    where: { user_id },
  });

  if (!userInterests) {
    throw new AppError("User's interests not found", 404);
  }

  userInterests.value = interests;

  await interestsRepository.save(userInterests);

  res.json(userInterests);
});

export default interestsRouter;
