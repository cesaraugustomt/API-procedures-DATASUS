import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Procedure } from './../../../repository/typeorm/entities/Procedure';

import {
  CreateProcedureParams,
  UpdateProcedureParams,
} from './../../../utils/types';

@Injectable()
export class ProceduresService {
  constructor(
    @InjectRepository(Procedure)
    private procedureRepository: Repository<Procedure>,
  ) {}

  findProcedures() {
    return this.procedureRepository.find();
  }

  findProceduresCompanyId(id: number) {
    return this.procedureRepository.find({
      where: {
        company_id: id,
      },
    });
  }

  createProcedure(procedureDetails: CreateProcedureParams) {
    const newProcedure = this.procedureRepository.create({
      ...procedureDetails,
      created_date: new Date(),
    });
    return this.procedureRepository.save(newProcedure);
  }

  updateProcedure(id: number, updateProcedureDetails: UpdateProcedureParams) {
    return this.procedureRepository.update(
      { id },
      { ...updateProcedureDetails },
    );
  }

  deleteProcedure(id: number) {
    return this.procedureRepository.delete({ id });
  }
}
