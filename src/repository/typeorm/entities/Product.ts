import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;
  @Column({ nullable: false })
  company_id: number;
  @Column({ type: 'text', nullable: false })
  code_id: string;
  @Column({ nullable: false })
  product_name: string;
  @Column({
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  value: number;
  @Column({ nullable: false })
  product_type: string;
  @Column({ type: 'text', nullable: false })
  product_description: string;
  @Column({ type: 'text', nullable: false })
  product_image: string;
  @Column({ nullable: false })
  created_date: Date;
  @Column({ nullable: true })
  updated_date: Date;
}
