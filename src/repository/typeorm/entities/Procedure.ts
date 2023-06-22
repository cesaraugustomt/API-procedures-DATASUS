import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'procedures' })
export class Procedure {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column({ nullable: false })
  company_id: number;
  @Column({ type: 'text', nullable: false })
  code_id: string;
  @Column({ nullable: false })
  procedure_name: string;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  value: number;
  @Column({ nullable: false })
  treatment_type: string;
  @Column({ type: 'text', nullable: false })
  procedure_description: string;
  @Column({ type: 'text', nullable: false })
  procedure_image: string;
  @Column({ nullable: false })
  created_date: Date;
  @Column({ nullable: true })
  updated_date: Date;
}
