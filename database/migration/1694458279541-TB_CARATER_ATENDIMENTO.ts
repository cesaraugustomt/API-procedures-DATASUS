import { MigrationInterface, QueryRunner } from 'typeorm';

export class TB_CARATER_ATENDIMENTOMigration1694458279541
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO TB_CARATER_ATENDIMENTO (CO_CARATER_ATENDIMENTO,NO_CARATER_ATENDIMENTO,DS_CARATER_ATENDIMENTO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('02', 'Urgência', 'É o atendimento ao indivíduo cuja severidade dos agravos ou lesões demanda atendimento em tempo hábil e oportuno, não sendo possível programar ou agendar previamente.', '202308', '01/2017A', '2');
INSERT INTO TB_CARATER_ATENDIMENTO (CO_CARATER_ATENDIMENTO,NO_CARATER_ATENDIMENTO,DS_CARATER_ATENDIMENTO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('99', 'Sem registro no modelo de informação de origem', 'Usado apenas para ETL (ANS e AB-SUS) em função de os sistemas de origem não possuir o campo no modelo de informação ou de o dado não estar preenchido. Não deve ser utilizado na captação dos atendimentos em saúde no CMD.', '202308', '08/2020A', '2');

`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverta a migração se necessário
  }
}
