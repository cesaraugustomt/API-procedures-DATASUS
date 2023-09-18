import { MigrationInterface, QueryRunner } from 'typeorm';

export class TB_REGRA_REGISTROMigration1694458279964
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO TB_REGRA_REGISTRO (CO_REGRA_REGISTRO,NO_REGRA_REGISTRO,DS_REGRA_REGISTRO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('0002', 'Condiciona o tipo de financiamento por FAEC (POB)', 'Procedimento oftalmológico quando realizado em estabelecimento habilitado em Projeto Olhar Brasil (05.05) e apresentado exclusivamente nos serviços 131/006 ou 131/007, o tipo de financiamento será FAEC e aplica-se incremento.', '202308', '07/2017A', '7');
INSERT INTO TB_REGRA_REGISTRO (CO_REGRA_REGISTRO,NO_REGRA_REGISTRO,DS_REGRA_REGISTRO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('0003', 'Condiciona a rejeição da AIH - oncologia.', 'Caso haja duplicidade de AIH na mesma competência de processamento no SIHD e um dos procedimentos principais for o de código 0415020050 PROCEDIMENTOS SEQUENCIAIS EM ONCOLOGIA, a AIH com data de alta mais recente será a única aprovada.', '202308', '01/2017A', '2');
INSERT INTO TB_REGRA_REGISTRO (CO_REGRA_REGISTRO,NO_REGRA_REGISTRO,DS_REGRA_REGISTRO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('0004', 'Condiciona incremento por CID exclusivos', 'Quando os procedimentos de códigos (02.09.01.003-7, 02.05.02.004-6, 02.05.01.003-2, 02.05.01.004-0 e 02.11.08.005-5) forem registrados com os CID E66.0, E66.2, E66.8 e E66.9, na modalidade ambulatorial e o estabelecimento de saúde possuir habilitação 02.03, o tipo de financiamento passa a ser FAEC com o subtipo de financiamento 0024', '202308', '01/2017A', '2');
INSERT INTO TB_REGRA_REGISTRO (CO_REGRA_REGISTRO,NO_REGRA_REGISTRO,DS_REGRA_REGISTRO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('0005', 'Financiamento por faixa etária - mamografia', 'Procedimento 02.04.03.018-8 mamografia bilateral para rastreamento quando realizado em pessoa com idade compreendida entre 50 a 69 anos, o tipo de financiamento será FAEC.', '202308', '12/2017A', '7');
INSERT INTO TB_REGRA_REGISTRO (CO_REGRA_REGISTRO,NO_REGRA_REGISTRO,DS_REGRA_REGISTRO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('0006', 'Condiciona a rejeição da AIH - ortopedia', 'Caso haja duplicidade de AIH na mesma competência de processamento no SIHD e um dos procedimentos principais for o de código 0415020069 PROCEDIMENTOS SEQUENCIAIS EM ORTOPEDIA ou quaisquer outro iniciado por 0408, caberá ao gestor aprovar apenas uma destas AIH.', '202308', '01/2017A', '2');
INSERT INTO TB_REGRA_REGISTRO (CO_REGRA_REGISTRO,NO_REGRA_REGISTRO,DS_REGRA_REGISTRO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('0007', 'Condiciona a rejeição da AIH - neurocirurgia', 'Caso haja duplicidade de AIH na mesma competência de processamento no SIHD e um dos procedimentos principais for o de código 0415020077 PROCEDIMENTOS SEQUENCIAIS EM NEUROCIRURGIA ou quaisquer outro iniciado por 0403, caberá ao gestor aprovar apenas uma destas AIH.', '202308', '01/2017A', '2');
INSERT INTO TB_REGRA_REGISTRO (CO_REGRA_REGISTRO,NO_REGRA_REGISTRO,DS_REGRA_REGISTRO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('0008', 'Condiciona a ter o valor zerado', 'Procedimento sem valor quando apresentado como APAC Secundário - VALOR ZERADO', '202308', '01/2017A', '2');
INSERT INTO TB_REGRA_REGISTRO (CO_REGRA_REGISTRO,NO_REGRA_REGISTRO,DS_REGRA_REGISTRO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('0009', 'Condiciona aos secundários a terem valor zerado', 'Os procedimentos principais vinculados a esta regra terão seus procedimentos secundários com valor zerado.', '202308', '01/2017A', '2');
INSERT INTO TB_REGRA_REGISTRO (CO_REGRA_REGISTRO,NO_REGRA_REGISTRO,DS_REGRA_REGISTRO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('0010', 'Condiciona financiamento FAEC pela faixa etária e pela habilitação do estabelecimento.', 'O procedimento 02.03.01.008-6, realizado em pessoa com idade compreendida entre 25 a 64 anos e quando realizado em estabelecimento de saúde habilitado (32.02 e 32.03), terá o tipo de financiamento FAEC e Sub-tipo de financiamento 040057.', '202308', '01/2019A', '7');

`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverta a migração se necessário
  }
}
