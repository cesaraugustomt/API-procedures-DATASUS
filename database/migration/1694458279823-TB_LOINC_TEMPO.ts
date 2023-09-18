import { MigrationInterface, QueryRunner } from 'typeorm';

export class TB_LOINC_TEMPOMigration1694458279823
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO TB_LOINC_TEMPO (DS_ABREVIATURA_INGLES,DS_ABREVIATURA,NO_TEMPO_INGLES,NO_TEMPO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('Procedure dur', 'ProcDur', 'Duration of the procedure (surgery, etc)', 'Tempo de duração do procedimento', '202308', '08/2021A', '2');
INSERT INTO TB_LOINC_TEMPO (DS_ABREVIATURA_INGLES,DS_ABREVIATURA,NO_TEMPO_INGLES,NO_TEMPO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('Pt', 'Pt', 'Point in time', 'Medida de identificação em um ponto determinado num período de tempo', '202308', '08/2021A', '2');
INSERT INTO TB_LOINC_TEMPO (DS_ABREVIATURA_INGLES,DS_ABREVIATURA,NO_TEMPO_INGLES,NO_TEMPO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('Stdy', 'Estudo', 'Duration of the study', 'Duração do estudo', '202308', '08/2021A', '2');

`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverta a migração se necessário
  }
}
