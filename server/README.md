# Anotações feitas na aula

## Rotas

- GET: Buscar ou listar uma informação
- POST: Criar alguma nova informação
- PUT: Atualizar uma informação existente
- DELETE: Deletar uma informação existente

- Corpo (Request Body): Dados para a criação ou atualização de um registro
- Route Params: Identificar qual recurso eu quero atualizar ou deletar
- Query Params: Paginação, filtros, ordenação

## Banco de dados

- Migrations: Controlam a versão do banco de dados
- CASCADE: Deleta TUDO do usuario de um professor (Não entendi bem)

# Funcionalidades

## Conexões

- Rota para listar o total de conexões realizadas;
- Rota para criar uma nova conexão

## Aulas

- Rota para criar uma aula;
- Rota para listar aulas;
  - Filtras por matéria, dia da semana e horário

## Exemplos

- SELECT * FROM users //Sem knex
- knex('users').select('*') //Com knex

- Insomnia exemplo do banco de dados
{
	"name": "Diego Fernandes",
	"avatar": "https://avatars0.githubusercontent.com/u/65132614?s=460&u=34d825bcf867e99bd1f59343add25a86d6288832&v=4",
	"whatsapp": "31999999999",
	"bio": "Um cara gostoso dmais",
	"subject": "Matemática",
	"cost": 80,
	"schedule": [
		{ "week_day": 1, "from": "8:00", "to": "12:00" },
		{ "week_day": 3, "from": "10:00", "to": "18:00" },
		{ "week_day": 4, "from": "8:00", "to": "12:00" }
	]
}
