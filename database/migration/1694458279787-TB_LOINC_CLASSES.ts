import { MigrationInterface, QueryRunner } from 'typeorm';

export class TB_LOINC_CLASSESMigration1694458279787
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO TB_LOINC_CLASSES (DS_ABREVIATURA_INGLES,DS_ABREVIATURA,NO_CLASSES_INGLES,NO_CLASSES,DT_COMPETENCIA,CO_VERSAO,ST_ACAO ) VALUES ('PANEL.MICRO', 'PAINEL.MICRO', 'Microbiology panel', 'Painel de microbiologia', '202308', '08/2021A', '2');

      `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverta a migração se necessário
  }
}
