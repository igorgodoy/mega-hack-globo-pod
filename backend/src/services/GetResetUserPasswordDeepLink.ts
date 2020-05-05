import { getRepository } from 'typeorm';

import AppError from '../errors/AppError';

import User from '../models/User';

import sendSms from '../config/twilio';
import sendMail from '../config/nodemailer';

import validateEmail from '../utils/validateEmail';

interface Request {
  identifier: string;
}

class GetResetUserPasswordDeepLink {
  public async execute({ identifier }: Request): Promise<boolean> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: [{ email: identifier }, { phone: identifier.replace(/\D/g, '') }],
    });

    if (!user) {
      throw new AppError("User don't exists.", 404);
    }

    const deepLink = `GloboPod://GloboPod/ForgotPassword/${user.id}`;

    const checkIsEmail = validateEmail(identifier);

    if (!checkIsEmail) {
      const smsResponse = sendSms({ msg: deepLink, to: identifier });

      return smsResponse;
    }

    const mailResponse = sendMail({ msg: deepLink, to: identifier });

    return mailResponse;
  }
}

export default GetResetUserPasswordDeepLink;
