import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'company' })
export class Company {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column({ nullable: false })
  owner_id: number;
  @Column({ nullable: false })
  type: string;
  @Column({ nullable: false })
  company_name: string;
  @Column({ nullable: false })
  company_logo: string;
  @Column({ nullable: false })
  created_by: number;
  @Column({ nullable: false })
  created_date: Date;
  @Column({ nullable: true })
  updated_date: Date;
}
