import { TypeOrmModule } from '@nestjs/typeorm';
import { UploadedController } from './controllers/uploaded/uploaded.controller';
import { Module } from '@nestjs/common';

import { UploadedService } from './service/uploaded/uploaded.service';
// entities
import { Product } from './../repository/typeorm/entities/Product';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [UploadedController],
  providers: [UploadedService],
})
export class UploadedModule {}
