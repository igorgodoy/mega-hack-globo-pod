import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../config/upload';

import CreateUserService from '../services/CreateUserService';
import UpdateUserAvatarService from '../services/UpdateUserAvatarService';
import UpdateUserPasswordService from '../services/UpdateUserPasswordService';
import GetResetUserPasswordDeepLink from '../services/GetResetUserPasswordDeepLink';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const upload = multer(uploadConfig);

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
  const { name, email, password, phone } = req.body;

  const createUserService = new CreateUserService();

  const user = await createUserService.execute({
    name,
    email,
    password,
    phone,
  });

  delete user.password;

  return res.json(user);
});

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  async (req, res) => {
    const updateUserAvatarService = new UpdateUserAvatarService();

    const user = await updateUserAvatarService.execute({
      user_id: req.user.id,
      avatarFilename: req.file.filename,
    });

    delete user.password;

    res.json(user);
  },
);

usersRouter.get('/resetpassword/:identifier', async (req, res) => {
  const { identifier } = req.params;

  const getResetUserPasswordDeepLink = new GetResetUserPasswordDeepLink();

  const response = await getResetUserPasswordDeepLink.execute({ identifier });

  res.json({ success: response });
});

usersRouter.patch('/resetpassword', async (req, res) => {
  const { user_id, password } = req.body;

  const updateUserPasswordService = new UpdateUserPasswordService();

  const user = await updateUserPasswordService.execute({
    user_id,
    password,
  });

  delete user.password;

  res.json(user);
});

export default usersRouter;
