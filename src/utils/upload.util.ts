import { diskStorage } from 'multer';
import { BadRequestException } from '@nestjs/common';

const verifyFileTipe = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
    return cb(new BadRequestException('Arquivo não é uma imagem'), false);
  }
  cb(null, true);
};

export const uploadOptionsProduct = {
  storage: diskStorage({
    destination: './uploads/products/2023',
    filename: (req, file, cb) => {
      const name = file.originalname.split('.')[0];
      const fileExtension = file.originalname.split('.')[1];
      const newFileName =
        name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension;

      cb(null, newFileName);
    },
  }),
  fileFilter: verifyFileTipe,
};

export const uploadOptionsProcedure = {
  storage: diskStorage({
    destination: './uploads/procedures/2023',
    filename: (req, file, cb) => {
      const name = file.originalname.split('.')[0];
      const fileExtension = file.originalname.split('.')[1];
      const newFileName =
        name.split(' ').join('_') + '_' + Date.now() + '.' + fileExtension;

      cb(null, newFileName);
    },
  }),
  fileFilter: verifyFileTipe,
};
