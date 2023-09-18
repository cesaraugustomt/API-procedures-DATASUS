const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile);

const sqlFiles = fs.readdirSync('./arquivos_de_insercao');

async function convertSqlToMigration(fileName) {
  const sqlContent = fs.readFileSync(
    `./arquivos_de_insercao/${fileName}`,
    'utf-8',
  );
  const tableName = fileName.replace('.sql', '');
  const migrationContent = `
import { MigrationInterface, QueryRunner } from 'typeorm';

export class ${tableName}Migration${Date.now()} implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
      ${sqlContent}
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Reverta a migração se necessário
    }
}
`;

  await writeFile(
    `../migration/${Date.now()}-${tableName}.ts`,
    migrationContent,
  );
}

async function convertAllSqlToMigrations() {
  for (const file of sqlFiles) {
    await convertSqlToMigration(file);
  }
}

convertAllSqlToMigrations();
