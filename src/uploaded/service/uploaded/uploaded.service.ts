import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './../../../repository/typeorm/entities/Product';

@Injectable()
export class UploadedService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ) {}

  findImageProductId(id: number) {
    return this.productRepository.findOne({ where: { id } });
  }
}
