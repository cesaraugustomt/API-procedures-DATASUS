import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { ProductsController } from './controllers/products/products.controller';
import { ProductsService } from './service/products/products.service';

// entities
import { Product } from './../repository/typeorm/entities/Product';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
