import { MigrationInterface, QueryRunner } from 'typeorm';

export class TB_CBARA_CATEGORIAMigration1694458279562
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO TB_CBARA_CATEGORIA (CO_CATERIA,NO_CATERIA,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('environment', 'Ambiente', '202308', '06/2021A', '2');
INSERT INTO TB_CBARA_CATEGORIA (CO_CATERIA,NO_CATERIA,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('food', 'Alimento', '202308', '06/2021A', '2');
INSERT INTO TB_CBARA_CATEGORIA (CO_CATERIA,NO_CATERIA,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('medication', 'Medicamento', '202308', '06/2021A', '2');

`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverta a migração se necessário
  }
}
