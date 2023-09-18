import { MigrationInterface, QueryRunner } from 'typeorm';

export class TB_PROCEDENCIAMigration1694458279868
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO TB_PROCEDENCIA (CO_PROCEDENCIA, NO_PROCEDENCIA, DS_PROCEDENCIA,DT_COMPETENCIA, CO_VERSAO,ST_ACAO) VALUES ('10', 'Ordem Judicial', '202308', '01/2017A', '2');
INSERT INTO TB_PROCEDENCIA (CO_PROCEDENCIA, NO_PROCEDENCIA, DS_PROCEDENCIA,DT_COMPETENCIA, CO_VERSAO,ST_ACAO) VALUES ('11', 'Retorno', '202308', '01/2017A', '2');
INSERT INTO TB_PROCEDENCIA (CO_PROCEDENCIA, NO_PROCEDENCIA, DS_PROCEDENCIA,DT_COMPETENCIA, CO_VERSAO,ST_ACAO) VALUES ('12', 'Demanda Referenciada', '202308', '01/2017A', '2');
INSERT INTO TB_PROCEDENCIA (CO_PROCEDENCIA, NO_PROCEDENCIA, DS_PROCEDENCIA,DT_COMPETENCIA, CO_VERSAO,ST_ACAO) VALUES ('99', 'Sem registro no modelo de informação de origem', '202308', '08/2020A', '2');

`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverta a migração se necessário
  }
}
