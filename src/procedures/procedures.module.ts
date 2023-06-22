import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { ProceduresController } from './controllers/procedures/procedures.controller';
import { ProceduresService } from './service/procedures/procedures.service';

// entities
import { Procedure } from './../repository/typeorm/entities/Procedure';

@Module({
  imports: [TypeOrmModule.forFeature([Procedure])],
  controllers: [ProceduresController],
  providers: [ProceduresService],
})
export class ProceduresModule {}
