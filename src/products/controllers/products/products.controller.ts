import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from './../../service/products/products.service';

import { CreateProductDto } from './../../dtos/CreateProduct.dto';
import { UpdateProductDto } from './../../dtos/UpdateProduct.dto';

@Controller('Products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}
  @Get()
  async getProducts() {
    const products = await this.productsService.findProducts();
    const productsWithImageUrl = products.map((product) => {
      const imageUrl = `http://localhost:3000/v1/uploaded/pictures/products/${product.product_image}`;
      return {
        ...product,
        product_image: imageUrl,
      };
    });
    return productsWithImageUrl;
  }

  @Get('/product/:id')
  async getProductId(@Param('id', ParseIntPipe) id: number) {
    const product = await this.productsService.findProductId(id);
    const productsWithImageUrl = product.map((product) => {
      const imageUrl = `http://localhost:3000/v1/uploaded/pictures/products/${product.product_image}`;
      return {
        ...product,
        product_image: imageUrl,
      };
    });
    return productsWithImageUrl;
  }

  @Get('/company/:id')
  async getProductsCompanyId(@Param('id', ParseIntPipe) id: number) {
    const products = await this.productsService.findProductsCompanyId(id);
    const productsWithImageUrl = products.map((product) => {
      const imageUrl = `http://localhost:3000/v1/uploaded/pictures/products/${product.product_image}`;
      return {
        ...product,
        product_image: imageUrl,
      };
    });
    return productsWithImageUrl;
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Put(':id')
  async updateProductById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    await this.productsService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  async deleteProductById(@Param('id', ParseIntPipe) id: number) {
    await this.productsService.deleteProduct(id);
  }
}
