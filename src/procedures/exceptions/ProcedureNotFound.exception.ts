import { HttpException, HttpStatus } from '@nestjs/common';

export class ProcedureNotFoundException extends HttpException {
  constructor(msg?: string, status?: HttpStatus) {
    super(
      msg || 'Procedimento Não Encontrado.',
      status || HttpStatus.BAD_REQUEST,
    );
  }
}
