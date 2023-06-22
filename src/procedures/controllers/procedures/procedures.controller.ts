import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  NotFoundException,
} from '@nestjs/common';

import { ProceduresService } from './../../service/procedures/procedures.service';

import { CreateProcedureDto } from './../../dtos/CreateProcedure.dto';
import { UpdateProcedureDto } from './../../dtos/UpdateProcedure.dto';

import { ProcedureNotFoundException } from './../../exceptions/ProcedureNotFound.exception';

@Controller('procedures')
export class ProceduresController {
  constructor(private proceduresService: ProceduresService) {}

  @Get()
  getProcedures() {
    return this.proceduresService.findProcedures();
  }

  @Get('/company/:id')
  getProceduresCompanyId(@Param('id', ParseIntPipe) id: number) {
    return this.proceduresService.findProceduresCompanyId(id);
  }

  @Post()
  createProcedure(@Body() createProcedureDto: CreateProcedureDto) {
    // const { token, ...procedureDetails } = createProcedureDto;
    return this.proceduresService.createProcedure(createProcedureDto);
  }

  @Put(':id')
  async updateProcedureById(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateProcedureDto: UpdateProcedureDto,
  ) {
    await this.proceduresService.updateProcedure(id, updateProcedureDto);
  }

  @Delete(':id')
  async deleteProcedureById(@Param('id', ParseIntPipe) id: number) {
    const deleteProcedure = await this.proceduresService.deleteProcedure(id);
    if (deleteProcedure) return deleteProcedure;
    else {
      throw new ProcedureNotFoundException('User Not Found', 500);
    }
  }
}
