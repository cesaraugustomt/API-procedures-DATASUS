import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// entities
import { Procedure } from './repository/typeorm/entities/Procedure';
import { Product } from './repository/typeorm/entities/Product';
import { Company } from './repository/typeorm/entities/Company';

// modules
import { ProceduresModule } from './procedures/procedures.module';
import { ProductsModule } from './products/products.module';
import { UploadedModule } from './uploaded/uploaded.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'user',
      password: '123456',
      database: 'thot_test',
      entities: [Procedure, Product, Company],
      // desative in producion
      synchronize: true,
    }),
    ProceduresModule,
    ProductsModule,
    UploadedModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
