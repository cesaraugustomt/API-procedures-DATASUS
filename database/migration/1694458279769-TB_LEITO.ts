import { MigrationInterface, QueryRunner } from 'typeorm';

export class TB_LEITOMigration1694458279769 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('02', 'Cardiologia- Cirúrgico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('03', 'Cirurgia Geral', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('04', 'Endocrinologia - Cirúrgico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('05', 'Gastroenterologia - Cirúrgico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('06', 'Ginecologia - Cirúrgico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('07', 'Cirúrgico/Diagnóstico/Terapêutico - Hospital Dia', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('08', 'Nefrologia - Urologia - Cirúrgico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('09', 'Neurocirurgia - Cirúrgico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('10', 'Obstetrícia Cirúrgica', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('11', 'Oftalmologia - Cirúrgico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('12', 'Oncologia - Cirúrgico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('13', 'Ortopedia/Traumatologia - Cirúrgico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('14', 'Otorrinolaringologia - Cirúrgico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('15', 'Plástica - Cirúrgico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('16', 'Torácica - Cirúrgico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('17', 'Estabelecimento Exclusivo UTI SUS', 'Especialidade de leito incluída temporariamente durante a pandemia de COVID 19. Será utilizada no registro da especialidade da AIH, por estabelecimentos que tenham cadastrados no CNES para o SUS, apenas leitos de UTI. O procedimento principal da AIH é 03.03.01.022-3 - TRATAMENTO DE INFECÇÃO PELO NOVO CORONAVÍRUS - COVID 19', '202308', '04/2020D', '7');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('31', 'AIDS - Clínico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('32', 'Cardiologia - Clínico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('33', 'Clínica Geral', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('34', 'Crônicos', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('35', 'Dermatologia - Clínico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('36', 'Geriatria - Clínico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('37', 'Hansenologia - Clínico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('38', 'Hematologia - Clínico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('40', 'Nefrourologia - Clínico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('41', 'Neonatologia - Clínico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('42', 'Neurologia - Clínico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('43', 'Obstetrícia Clínica', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('44', 'Oncologia - Clínico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('45', 'Pediatria Clínica', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('46', 'Pneumologia - Clínico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('47', 'Psiquiatria', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('48', 'Reabilitação', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('49', 'Pneumologia Sanitária', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('51', 'UTI II Adulto - Síndrome Respiratória Aguda Grave (SRAG) - COVID-19', 'Leito complementar de UTI II para internação de pacientes adultos com diagnóstico clínico de COVID 19.', '202308', '06/2022B', '7');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('52', 'UTI II Pediátrica - Síndrome Respiratória Aguda Grave (SRAG) - COVID-19', 'Leito complementar de UTI II para internação de pacientes pediátricos com diagnóstico clínico de COVID 19.', '202308', '06/2022B', '7');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('65', 'Unidade Intermediária Neonatal', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('66', 'Unidade de Isolamento', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('67', 'Transplante - Cirúrgico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('68', 'Pediatria Cirúrgica', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('69', 'AIDS Hospital Dia', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('70', 'Fibrose Cística - Hospital Dia', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('71', 'Intercorrência Pós-Transplante - Hospital Dia', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('72', 'Geriatria - Hospital Dia', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('73', 'Saúde Mental - Hospital Dia', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('74', 'UTI Adulto - Tipo I', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('75', 'UTI Adulto - Tipo II', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('76', 'UTI Adulto - Tipo III', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('77', 'UTI Pediátrica - Tipo I', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('78', 'UTI Pediátrica- Tipo II', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('79', 'UTI Pediátrica - Tipo III', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('80', 'UTI Neonatal - Tipo I', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('81', 'UTI Neonatal - Tipo II', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('82', 'UTI Neonatal- Tipo III', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('83', 'UTI de Queimados', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('84', 'Acolhimento Noturno', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('85', 'UTI Coronariana Tipo II - UCO Tipo II', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('86', 'UTI Coronariana Tipo III - UCO Tipo III', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('87', 'Saúde Mental (Clínico)', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('88', 'Queimado Adulto (Clínico)', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('89', 'Queimado Pediátrico (Clínico)', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('90', 'Queimado Adulto (Cirúrgico)', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('91', 'Queimado Pediátrico (Cirúrgico)', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('92', 'Unidade de Cuidados Intermediários Neonatal Convencional', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('93', 'Unidade de Cuidados Intermediários Neonatal Canguru', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('94', 'Unidade de Cuidados Intermediários Pediátrico', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('95', 'Unidade de Cuidados Intermediários Adulto', '202308', '10/2019A', '2');
INSERT INTO TB_LEITO (CO_LEITO,NO_LEITO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('96', 'Suporte Ventilatório Pulmonar', 'Leito de suporte ventilatório pulmonar', '202308', '07/2023B', '2');

`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverta a migração se necessário
  }
}
