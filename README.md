# Migration no typeORM

### scripts

```
 "typeorm": "C",
    "migrate:create": "npx typeorm migration:create ../database/migration/InsertDataTB_GRUPO",
    "migration:generate": "npm run typeorm --migration:generate",
    "migration:run": "npm run typeorm --migration:run",
    "migration:revert": "npm run typeorm --migration:revert"
```

\dist\database\migration\1694458279889-TB_PROCEDIMENTO.js
npx typeorm migration:run -d ./dist/database/migration/1694458279889-TB_PROCEDIMENTO.js

npx typeorm migration:create ./database/migration/inser_in_tb_grupo,

## Config exemplo

entities: [__dirname + '/**/entity/*.entity{.ts,.js}'],
// synchronize: false,
migrations: [`${__dirname}/migration/{.ts,*.js}`],
migrationsRun: true,

# config database

https://docs.nestjs.com/techniques/database
create past typeorm (repository)
entities

# Comando do nestjs para criar um novo modulo

nest g module name_module
nest g controller paste_controllerName exemplo: "/procedures/controllers/procedures"
nest g service paste_serviceName exemplo: "/procedures/service/procedures"

## TODO:

[] - gp de médicamento
[] = CBOs
[] = procedimentos

TB_TIPO_MARCACAO
TB_CIAP2
TB_REACAO_ADVERSA
TB_CBHPM

# Links utils

https://dbdiagram.io/d/64beddb602bd1c4a5e9e35c0
