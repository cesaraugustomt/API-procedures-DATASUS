import { MigrationInterface, QueryRunner } from 'typeorm';

export class TB_GRUPO_HABILITACAOMigration1694458279750
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO ) VALUES ('02', '0801 e 0804', 'Unidade de Assistência de Alta Complexidade Cardiovascular com Cirurgia Cardiovascular Pediátrica', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('03', '0802 e 0807', 'Centro de Referência em Alta Complexidade Cardiovascular com Laboratório de Eletrofisiologia, Cirurgia Cardiovascular e procedimentos de Cardiologia Intervencionista', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('04', '0802 e 0806', 'Centro de Referência em Alta Complexidade Cardiovascular com Cirurgia Vascular e Procedimentos Endovasculares Extracardíacos', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('05', '0802 e 0805', 'Centro de Referência em Alta Complexidade Cardiovascular com Cirurgia Vascular', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('06', '0802 e 0804', 'Centro de Referência em Alta Complexidade Cardiovascular com Cirurgia Cardiovascular Pediátrica', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('07', '0802 e 0803', 'Centro de Referência em Alta Complexidade Cardiovascular com Cirurgia Cardiovascular e Procedimentos em Cardiologia Intervencionista', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('08', '0801 e 0807', 'Unidade de Assistência de Alta Complexidade Cardiovascular com Laboratório de Eletrofisiologia, Cirurgia Cardiovascular e procedimentos de Cardiologia Intervencionista', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('09', '0801 e 0806', 'Unidade de Assistência de Alta Complexidade Cardiovascular com Cirurgia Vascular e Procedimentos Endovasculares Extracardíacos', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('10', '0801 e 0805', 'Unidade de Assistência de Alta Complexidade Cardiovascular com Cirurgia Vascular', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('11', '2301 e 2303', 'Unidade de assitência de alta complexidade em terapia nutricional e Enteral', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('12', '2301 e 2304', 'Unidade de assistencia de alta complexidade em terapia nutricional e Enteral e parenteral', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('13', '2301 e 2305', 'Unidade de assistencia de alta complexidade em terapia nutricional e Enteral e parenteral com manipulação e fabricação de formula nutricional', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('14', '2302 e 2303', 'Centro de referência de alta complexidade em terapia nutricional e Enteral', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('15', '2302 e 2304', 'Centro de referência de alta complexidade em terapia nutricional e Enteral e parenteral', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('16', '2302 e 2305', 'Centro de referência de alta complexidade em terapia nutricional e Enteral e parenteral com manipulação de formula nutricional', '202308', '01/2017A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('17', '2418 e 2425', ' Exames de histocompatibilidade através de sorologia e ou biologia molecular - Tipo II e Cadastramento de doadores voluntários de medula óssea e outros precursores hematopoéticos', '202308', '01/2017B', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('18', '2409 e 2430', 'Grupo do transplante de figado', '202308', '12/2018A', '7');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('19', '1706 e 1722', 'UNACON e Tratamentos Integrados Sincrônicos em Oncologia', '202308', '06/2022B', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('20', '1707 e 1722', 'UNACON com serviço de radioterapia e  Tratamentos Integrados
Sincrônicos em Oncologia', '202308', '06/2022B', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('21', '1708 e 1722', 'UNACON com serviço de hematologia e Tratamentos Integrados
Sincrônicos em Oncologia', '202308', '06/2022B', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('22', '1709 e 1722', 'UNACON com serviço de oncologia pediátrica e Tratamentos
Integrados Sincrônicos em Oncologia', '202308', '06/2022B', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('23', '1712 e 1722', 'CACON e Tratamentos Integrados Sincrônicos em Oncologia', '202308', '06/2022B', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('24', '1713 e 1722', 'CACON com serviço de oncologia pediátrica e Tratamentos
Integrados Sincrônicos em Oncologia', '202308', '06/2022B', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('26', '0801,0803 e 0815', '', '202308', '12/2022A', '2');
INSERT INTO TB_GRUPO_HABILITACAO (CO_GRUPO_HABILITACAO,NO_GRUPO_HABILITACAO ,DS_GRUPO_HABILITACAO,DT_COMPETENCIA,CO_VERSAO,ST_ACAO) VALUES ('27', '0802, 0803 e 0815', '', '202308', '12/2022A', '2');

`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Reverta a migração se necessário
  }
}
