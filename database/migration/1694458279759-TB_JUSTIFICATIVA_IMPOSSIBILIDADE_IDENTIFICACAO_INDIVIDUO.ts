import { MigrationInterface, QueryRunner } from 'typeorm';

export class TB_JUSTIFICATIVA_IMPOSSIBILIDADE_IDENTIFICACAO_INDIVIDUOMigration1694458279759
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO TB_JUSTIFICATIVA_IMPOSSIBILIDADE_IDENTIFICACAO_INDIVIDUO (CO_JUSTIFICATIVA_CNS,NO_JUSTIFICATIVA_CNS,DS_JUSTIFICATIVA_CNS,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('02', 'Indivíduo em sofrimento mental encontrado em via pública', 'Indivíduo em sofrimento mental encontrado em via pública', '202308', '01/2017A', '2');
INSERT INTO TB_JUSTIFICATIVA_IMPOSSIBILIDADE_IDENTIFICACAO_INDIVIDUO (CO_JUSTIFICATIVA_CNS,NO_JUSTIFICATIVA_CNS,DS_JUSTIFICATIVA_CNS,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('03', 'Indivíduo com problema neurológico grave ou comatoso', 'Indivíduo com problema neurológico grave ou comatoso', '202308', '01/2017A', '2');
INSERT INTO TB_JUSTIFICATIVA_IMPOSSIBILIDADE_IDENTIFICACAO_INDIVIDUO (CO_JUSTIFICATIVA_CNS,NO_JUSTIFICATIVA_CNS,DS_JUSTIFICATIVA_CNS,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('04', 'Indivíduo incapacitado por motivos sociais e/ou culturais', 'Indivíduo incapacitado por motivos sociais e/ou culturais', '202308', '01/2017A', '2');
INSERT INTO TB_JUSTIFICATIVA_IMPOSSIBILIDADE_IDENTIFICACAO_INDIVIDUO (CO_JUSTIFICATIVA_CNS,NO_JUSTIFICATIVA_CNS,DS_JUSTIFICATIVA_CNS,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('05', 'Indivíduo doador de órgãos falecido', 'Indivíduo doador de órgãos falecido', '202308', '01/2017A', '2');
INSERT INTO TB_JUSTIFICATIVA_IMPOSSIBILIDADE_IDENTIFICACAO_INDIVIDUO (CO_JUSTIFICATIVA_CNS,NO_JUSTIFICATIVA_CNS,DS_JUSTIFICATIVA_CNS,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('99', 'Sem registro no modelo de informação de origem', 'Usado apenas para ETL (ANS e AB-SUS) em função de os sistemas de origem não possuir o campo no modelo de informação ou de o dado não estar preenchido. Não deve ser utilizado na captação dos atendimentos em saúde no CMD.', '202308', '08/2020A', '2');

`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverta a migração se necessário
  }
}
