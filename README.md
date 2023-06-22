
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

## @@@@@
typeorm: mapeador relacional de objetos
a função dele é pegar coisas como classes do javascript/typescript
e mapear no nucleo a tabela correspondente com as colunas correspondentes
com base em qualquer campo que você definiu nessa classe.
Então entities serve como uma maneira de mapear uma classe typescript real
para uma tabela sql real.
entites = 'Mapa do mapa de sql.(mapa real do mapa da camada do ORM ou SQL).
dessa forma não precisamos escrever instruções sql real e só javascript.

spring bot tem seu próprio jeito de fazer mapeamento algo parecido com
JPA

###

Existe um problema pessoal sobre nomear tabelas no plural ou não.


## Initial
nest new name_project
yarn add @nestjs/typeorm typeorm mysql2

# config database
https://docs.nestjs.com/techniques/database
create past typeorm (repository) 
              entities

# Depois de criando a conexão com o banco e ter criado uma entitie
nest g module procedures
nest g controller /procedures/controllers/procedures
nest g service /procedures/service/procedures

é sujerido criar o dto real e em seguida criar um tipo separado para
a versão finalizada que será salva no banco de dados o squema finalizado
que será salvo no banco de dados ex:

```
Controller

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    const { ...userDetails, confirmPassword } = createUserDto;
    this.userService.createUser(userDetails);
  }
}

DTO: Objeto de transferência de dados(Data Transfer Objects)
ele define como os dados serão enviados pela rede
rede sig de um lado para o outro do controller para o service.

export class CreateUserDto {
  username: string;
  password: string;
  confirmPassword: string;
}

```
  // TODO:
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
      