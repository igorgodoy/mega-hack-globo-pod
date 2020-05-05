import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import AppError from '../errors/AppError';

import User from '../models/User';

interface Request {
  name: string;
  email: string;
  password: string;
  phone: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    phone,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const replacedPhone = phone.replace(/\D/g, '');

    const checkEmailPhoneExists = await usersRepository.findOne({
      where: [{ email }, { phone: replacedPhone }],
    });

    if (checkEmailPhoneExists) {
      throw new AppError('E-Mail or phone already exists.');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      phone: replacedPhone,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
