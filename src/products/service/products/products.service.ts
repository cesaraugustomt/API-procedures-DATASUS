import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './../../../repository/typeorm/entities/Product';

import {
  CreateProductParams,
  UpdateProductParams,
} from './../../../utils/types';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findProducts() {
    return this.productRepository.find();
  }

  findProductId(id: number) {
    return this.productRepository.find({
      where: {
        id: id,
      },
    });
  }

  findProductsCompanyId(id: number) {
    return this.productRepository.find({
      where: {
        company_id: id,
      },
    });
  }

  createProduct(productDetails: CreateProductParams) {
    const newProcedure = this.productRepository.create({
      ...productDetails,
      created_date: new Date(),
    });
    return this.productRepository.save(newProcedure);
  }

  updateProduct(id: number, updateProductDetails: UpdateProductParams) {
    return this.productRepository.update(
      { id },
      { ...updateProductDetails, updated_date: new Date() },
    );
  }

  deleteProduct(id: number) {
    return this.productRepository.delete({ id });
  }
}
