# API Rest de Notícias em NodeJS

### Funcionalidades:
#### Cadastrar:
	 Usuário
	 Notícia
#### Listar:
	Usuário
	Notícia
#### Listar Específico:
	 Notícia
#### Atualizar:
	Notícia
#### Deletar:
	Notícia

#### Principais dependências utilizadas para o desenvolvimento:
   Express <br>
	 Sequelize <br>
	 Bcryptjs <br>
   Jsonwebtoken <br>
	 Sucrase <br>
   Pg <br>
   Yup <br>
	 Eslint <br>
   Prettier <br>
	
### Quero testar! O que eu faço?

- É simples. Você vai precisar ter em seu computador
  alguns programas instalados.
	
	Para Windows:
	
###### O próprio node.js:
	Indo no site oficial do node(https://nodejs.org/en/) faça o download e o instale.

###### O Yarn:
Ao invés do npm, utilizo o yarn como gerenciador de pacotes. Sabendo disso, siga o passo-a-passo disponibilizado neste link
(https://bit.ly/2P3Opj2).

###### Docker:
Você precisará, também, deste rapaz. Para instalá-lo, siga o passo-a-passo disponibilizado no próprio site
(https://docs.docker.com/docker-for-windows/install/).

###### PostgreSQL:
já com o docker, criaremos um container que iremos utilizar para
						  utilizar e consumir esta base de dados. No prompt, digite:
							
docker run --name nome-do-container -e POSTGRES_PASSWORD=senha-qualquer -p 5432:5432 -d postgres:11.5-alpine

- Show? show! Funcionando tudo certo, você precisará do "postbird"(https://electronjs.org/apps/postbird).
	Com ele, poderemos criar nossa base de dados e consultar suas futuras informações.

###### Insomnia:
Utilizamos para fazermos todas as consultas criadas na aplicação.	Você pode estar baixando por aqui: https://insomnia.rest/download/.

- Feito! Basicamente, são esta as tecnologias-base para a api funcionar normalmente em seu pc.
	Agora, vá até a sua pasta, abra o prompt do yarn e digite: "yarn". Com isso, será feito o
	download de todas as dependências que utilizei para desenvolver esta API.

- Logo após, no prompt, digite: "yarn dev". Isso acionará o nodemon(faz o reload automático de qualquer
  alteração), junto com o sucrase(transpiler super eficiente, acredite!).
	
	(Escrevendo...)
	






	

	


	
