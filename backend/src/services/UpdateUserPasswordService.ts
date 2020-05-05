import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  user_id: string;
  password: string;
}

class UpdateUserPasswordService {
  public async execute({ user_id, password }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: { id: user_id },
    });

    if (!user) {
      throw new AppError("User don't exists.", 404);
    }

    const hashedPassword = await hash(password, 8);

    user.password = hashedPassword;

    await usersRepository.save(user);

    return user;
  }
}

export default UpdateUserPasswordService;
