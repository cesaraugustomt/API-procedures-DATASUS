import { MigrationInterface, QueryRunner } from 'typeorm';

export class TB_CBARA_TIPOMigration1694458279564 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO TB_CBARA_TIPO (CO_TIPO,NO_TIPO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('intolerance', 'Intolerância', '202308', '06/2021A', '2');

      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverta a migração se necessário
  }
}
