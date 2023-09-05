import { MigrationInterface, QueryRunner } from 'typeorm';

export class InsertDataTBGRUPO1693848234190 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
    INSERT INTO TB_GRUPO (CO_GRUPO, NO_GRUPO, DT_COMPETENCIA, CO_VERSAO, ST_ACAO) VALUES ('02', 'Procedimentos com finalidade diagnóstica', '202308', '01/2017A', '2');
    INSERT INTO TB_GRUPO (CO_GRUPO, NO_GRUPO, DT_COMPETENCIA, CO_VERSAO, ST_ACAO) VALUES ('03', 'Procedimentos clínicos', '202308', '01/2017A', '2');
    INSERT INTO TB_GRUPO (CO_GRUPO, NO_GRUPO, DT_COMPETENCIA, CO_VERSAO, ST_ACAO) VALUES ('04', 'Procedimentos cirúrgicos', '202308', '01/2017A', '2');
    INSERT INTO TB_GRUPO (CO_GRUPO, NO_GRUPO, DT_COMPETENCIA, CO_VERSAO, ST_ACAO) VALUES ('05', 'Transplantes de órgãos, tecidos e células', '202308', '01/2017A', '2');
    INSERT INTO TB_GRUPO (CO_GRUPO, NO_GRUPO, DT_COMPETENCIA, CO_VERSAO, ST_ACAO) VALUES ('06', 'Medicamentos', '202308', '01/2017A', '2');
    INSERT INTO TB_GRUPO (CO_GRUPO, NO_GRUPO, DT_COMPETENCIA, CO_VERSAO, ST_ACAO) VALUES ('07', 'Órteses, próteses e materiais especiais', '202308', '01/2017A', '2');
    INSERT INTO TB_GRUPO (CO_GRUPO, NO_GRUPO, DT_COMPETENCIA, CO_VERSAO, ST_ACAO) VALUES ('08', 'Ações complementares da atenção à saúde', '202308', '01/2017A', '2');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      -- Reversão das inserções feitas no método up
      DELETE FROM TB_GRUPO WHERE CO_GRUPO IN ('02', '03', '04', '05', '06', '07', '08');
    `);
  }
}
