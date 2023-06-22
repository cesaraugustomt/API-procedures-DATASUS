import { IsString, IsInt, IsNumber, IsNotEmpty } from 'class-validator';

export class CreateProcedureDto {
  @IsInt()
  company_id: number;
  @IsString()
  @IsNotEmpty()
  code_id: string;
  @IsString({ message: 'O nome do procedimento deve ser texto!' })
  @IsNotEmpty()
  procedure_name: string;
  @IsNumber()
  @IsNotEmpty()
  value: number;
  @IsString()
  @IsNotEmpty()
  treatment_type: string;
  @IsString()
  @IsNotEmpty()
  procedure_description: string;
  @IsString()
  @IsNotEmpty()
  procedure_image: string;
}
