import { MigrationInterface, QueryRunner } from 'typeorm';

export class TB_SEXOMigration1695458279974 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO TB_SEXO (CO_SEXO,NO_SEXO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('I', 'Ignorado', '202308', '01/2017A', '2');
INSERT INTO TB_SEXO (CO_SEXO,NO_SEXO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('M', 'Masculino', '202308', '01/2017A', '2');

`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverta a migração se necessário
  }
}
