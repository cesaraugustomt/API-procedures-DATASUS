
# Migration no typeORM
### scripts
 "typeorm": "npm run build && npx typeorm -d dist/database/data-source.js",
    "migrate:create": "npx typeorm migration:create ./src/migration/create_table_name",
    "migration:generate": "npm run typeorm -- migration:generate",
    "migration:run": "npm run typeorm -- migration:run",
    "migration:revert": "npm run typeorm -- migration:revert"

## Config exemplo
  entities: [__dirname + '/**/entity/*.entity{.ts,.js}'],
        // synchronize: false,
        migrations: [`${__dirname}/migration/{.ts,*.js}`],
        migrationsRun: true,

# config database
https://docs.nestjs.com/techniques/database
create past typeorm (repository) 
              entities

# Comando do nestjs para criar um modulo
nest g module procedures
nest g controller /procedures/controllers/procedures
nest g service /procedures/service/procedures


## TODO:
    08/06/2023
    [x] filter para product e procedures da company_id
    [x] criar salvamento de imagens
    [x] criar router v1
    [x] criar swagger

    
    13/06/2023
    [x] consumir api no frontend para teste (09/06/2023)
    [x] mudar local da pasta para salvar imagem de produto e procedimento

    14/06/2023
    [] criar expecion nos controller de products e procedures
    [] arrumar a rota de atualização de imagem para products e procedures
    [] validar dados do DTOs



<!-- boas práticas para tornar o imprevisivel previsivel.

se pergunte, o que isso faz?
seja explícitos tire informações inplicitas.
eviter entrar em detalhe de implementação. Para isso
evite interpretações errada.
ex:.
listaDePista < O que é isso ? array, posso usar forEach ?>
mas e se o resultado de listaDePista for uma lista de pistas
dentro de uma string. //"morango, singapore, interlagos"
// "string"
Melhore colocando PistaEmTexto <Não é um array, pode ser um objeto>

codebase perigoso:
vários desenvolvedores e menos velocidade na hora de programar
o difícil é ler e entender para alterar sem quebrar algo.

não abrevie!
escreva código para agradar outra pessoa! evite ruidos.

 -->


 
     alt + 92 = \
      