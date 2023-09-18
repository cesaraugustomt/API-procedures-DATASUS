import { MigrationInterface, QueryRunner } from 'typeorm';

export class TB_LOINC_TP_ESCALAMigration1694458279827
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO TB_LOINC_TP_ESCALA (DS_ABREVIATURA_INGLES, DS_ABREVIATURA,NO_ESCALA_INGLES,NO_ESCALA,DS_TP_ESCALA_INGLES,DS_TP_ESCALA,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('Multi', 'Multi', 'Multi', 'Resultados variados', 'Multi', 'Multi', '202308', '08/2021A', '2');
INSERT INTO TB_LOINC_TP_ESCALA (DS_ABREVIATURA_INGLES, DS_ABREVIATURA,NO_ESCALA_INGLES,NO_ESCALA,DS_TP_ESCALA_INGLES,DS_TP_ESCALA,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('Nar', 'Narrativa', 'Narrative', 'Narrativa', 'Narrative', 'Narrative', '202308', '08/2021A', '2');
INSERT INTO TB_LOINC_TP_ESCALA (DS_ABREVIATURA_INGLES, DS_ABREVIATURA,NO_ESCALA_INGLES,NO_ESCALA,DS_TP_ESCALA_INGLES,DS_TP_ESCALA,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('Nom', 'Nominal', 'Nominal', 'Nominal', 'Nominal', 'Nominal', '202308', '08/2021A', '2');
INSERT INTO TB_LOINC_TP_ESCALA (DS_ABREVIATURA_INGLES, DS_ABREVIATURA,NO_ESCALA_INGLES,NO_ESCALA,DS_TP_ESCALA_INGLES,DS_TP_ESCALA,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('Ord', 'Ord', 'Ordinal', 'Ordinal', 'Ordinal', 'Ordinal', '202308', '08/2021A', '2');
INSERT INTO TB_LOINC_TP_ESCALA (DS_ABREVIATURA_INGLES, DS_ABREVIATURA,NO_ESCALA_INGLES,NO_ESCALA,DS_TP_ESCALA_INGLES,DS_TP_ESCALA,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('Ord/Qn', 'Qn/Ordinal', 'Quantitative/Ordinal', 'Quantitativo/Ordinal', 'Quantitative/Ordinal', 'Quantitativo/Ordinal', '202308', '08/2021A', '2');
INSERT INTO TB_LOINC_TP_ESCALA (DS_ABREVIATURA_INGLES, DS_ABREVIATURA,NO_ESCALA_INGLES,NO_ESCALA,DS_TP_ESCALA_INGLES,DS_TP_ESCALA,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('Qn', 'Qn', 'Quantitative', 'Quantitativo', 'Quantitative', 'Quantitativo', '202308', '08/2021A', '2');

`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverta a migração se necessário
  }
}
