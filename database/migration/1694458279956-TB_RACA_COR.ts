import { MigrationInterface, QueryRunner } from 'typeorm';

export class TB_RACA_CORMigration1694458279956 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO TB_RACA_COR (CO_RACA_COR,NO_RACA_COR,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('02', 'Preta', '202308', '01/2017A', '2');
INSERT INTO TB_RACA_COR (CO_RACA_COR,NO_RACA_COR,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('03', 'Parda', '202308', '01/2017A', '2');
INSERT INTO TB_RACA_COR (CO_RACA_COR,NO_RACA_COR,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('04', 'Amarela', '202308', '01/2017A', '2');
INSERT INTO TB_RACA_COR (CO_RACA_COR,NO_RACA_COR,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('05', 'Indígena', '202308', '01/2017A', '2');
INSERT INTO TB_RACA_COR (CO_RACA_COR,NO_RACA_COR,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('99', 'Sem Informação', '202308', '01/2017A', '2');

`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverta a migração se necessário
  }
}
