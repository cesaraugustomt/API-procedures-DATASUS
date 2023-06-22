import {
  Controller,
  Post,
  Get,
  Param,
  UploadedFile,
  UseInterceptors,
  BadRequestException,
  Res,
  ParseIntPipe,
} from '@nestjs/common';

import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';
import * as fs from 'fs';

import {
  uploadOptionsProduct,
  uploadOptionsProcedure,
} from './../../../utils/upload.util';

import { UploadedService } from './../../service/uploaded/uploaded.service';

@Controller('Uploaded')
export class UploadedController {
  constructor(private uploadedService: UploadedService) {}

  @Post('product')
  @UseInterceptors(FileInterceptor('file', uploadOptionsProduct))
  addImageProduct(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Esse arquivo não é uma imagem');
    } else {
      const response = {
        filePath: `http://localhost:3000/v1/uploaded/pictures/products/${file.filename}`,
        fileName: file.filename,
      };
      return response;
    }
  }

  @Post('procedure')
  @UseInterceptors(FileInterceptor('file', uploadOptionsProcedure))
  addImageProcedures(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new BadRequestException('Esse arquivo não é uma imagem');
    } else {
      const response = {
        filePath: `http://localhost:3000/v1/uploaded/pictures/procedures/${file.filename}`,
        fileName: file.filename,
      };
      return response;
    }
  }

  @Get('pictures/products/:filename')
  async getPictureProducts(@Param('filename') filename, @Res() res: Response) {
    res.sendFile(filename, { root: './uploads/products/2023' });
  }

  @Get('pictures/procedures/:filename')
  async getPictureProcedures(
    @Param('filename') filename,
    @Res() res: Response,
  ) {
    res.sendFile(filename, { root: './uploads/procedures/2023' });
  }

  @Post('product/update/image/:id')
  @UseInterceptors(FileInterceptor('file', uploadOptionsProduct))
  async updateImageProduct(
    @UploadedFile() file: Express.Multer.File,
    @Param('id', ParseIntPipe) id: number,
  ) {
    const productById = await this.uploadedService.findImageProductId(id);

    if (!productById) {
      throw new BadRequestException('Nenhum usuário encontrado');
    }
    if (!file) {
      throw new BadRequestException('Nenhum arquivo enviado');
    }
    if (file.filename !== productById.product_image) {
      throw new BadRequestException(
        'Nenhum arquivo encontrado para esse usuário.',
      );
    }

    // Apaga o arquivo existente
    const filePath = './uploads/products/2023/' + productById.product_image;

    const response = {
      filePath: `http://localhost:3000/v1/uploaded/pictures/products/${file.filename}`,
      fileName: file.filename,
    };

    if (fs.existsSync(filePath)) {
      await fs.promises.unlink(filePath);
    }
    return response;
  }
}
