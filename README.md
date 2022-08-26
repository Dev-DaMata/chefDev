# :woman_cook: <spam style="color: orange">_chefDev_</spam> :man_cook:</spam>

Projeto denvolvido em [Node.js](https://nodejs.org/en/) com framework [Express](https://expressjs.com/)

## 📘 Pré-requisitos

- <a href="https://nodejs.org/en/">Node.Js</a> - v. 16.15.0
- <a href="https://www.npmjs.com/">NPM</a> - v. 8.5.5
- <a href="https://expressjs.com/pt-br/">Express</a> - v. 4.18.1
- <a href="https://www.npmjs.com/package/sqlite3">SQLite3</a> - v. 5.0.10s
- <a href="https://git-scm.com/downloads">Git</a>
- <a href="https://code.visualstudio.com/download">VsCode</a> ou qualquer editor de texto de preferência.
- <a href="https://insomnia.rest/download">Insomnia Rest</a> ou qualquer outra ferramenta de cliente API Rest.

## Link do deploy do Heroku:
```
https://chef-dev.herokuapp.com/
```

##  :desktop_computer: Tecnologias

![NODE](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white) ![EXPRESS](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge) ![SQLLITE](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white) ![HEROKUAPP](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

```Json
"dependencies": {
    "express": "^4.18.1",
    "sqlite3": "^5.0.10"
  },
  "devDependencies": {
    "nodemon": "^2.0.19"
  }
```

## :rocket: Como instalar a aplicação localmente

1. Para clonar repositório:

    ```
    git clone https://github.com/brendatondin/chefDev.git
    ```

2. Entrando na pasta:

     ```
     cd chefDev
     ```

3. Para instalar as dependências necessárias/todas as dependências :

    ```js
    //instalar todas as dependências:
    npm install
    //instalar somente as dependências necessárias:
    npm install --production
    ```

4. Para iniciar o projeto:

    ```
    npm start
    ```

##  :floppy_disk: Inicializando Banco de Dados

Para iniciar um banco de dados novo com os dados padrão, delete o arquivo `database.db` e rode o comando abaixo:

```
npm run db
```

## :ballot_box_with_check: Validando o Usuário 

Para validar o usuário, insira no Header os seguintes dados:

```
New header: usertype / New value: maitre
```

# :high_brightness: Tabela de Entidades
<!--ts-->
   * [Cardápio](#cardápio)
   * [Clientes](#clientes)
   * [Fornecedores](#fornecedores)
   * [Funcionários](#funcionários)
   * [Pedidos](#pedidos)
   * [Reservas](#reservas)
<!--te-->

## :bus: Rotas

```
url/ 
```

## Pedidos

- <spam style="color: lightgreen">__GET  /pedidos__</spam>

    Exemplo da resposta:

    ```Json
    {
      "pedidos": [
      {
       "comanda": 1,
       "prato": "Macarrão",
       "mesa": 1
      },
      {
       "comanda": 2,
       "prato": "Pizza",
       "mesa": 2
      },
      {
       "comanda": 3,
       "prato": "Hamburguer",
       "mesa": 3
      }
     ],
     "erro": false
    }
    ```

- <spam style="color: lightgreen">__GET  /pedidos/comanda/:comanda__</spam>

    Exemplo da resposta

    ```Json
    {
	    "cardapio": {
		"codigo": 1,
		"prato": "Frutos do mar"
	    },
	    "erro": false
    }
     ```
     
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
        "msg": "Aviso: 7 não encontrado!",
	    "erro": true
    }
    ```
---

- <spam style="color: orange">__POST /pedidos__</spam>

    Exemplo de requisição:

    ```Json
    {
        "prato": "Okonomiyaki",
        "mesa": 4
    }
    ```

    Exemplo da resposta:

    ```Json
    {
         "msg": "Pedido inserido com sucesso",
         "inserePedido": {
         "prato": "Okonomiyaki",
         "mesa": 4
          },
          "erro": false
    }
    ```
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
        "msg": "Aviso: preencha todos os campos",
	    "erro": true
    }
    ```
---

- <spam style="color: dodgerblue">__PUT /pedidos/comanda/:comanda__</spam>

    Exemplo de requisição:

    ```Json
    {
        "comanda": 4,
        "prato": "Hiroshima-Style Okonomiyaki",
        "mesa": 4
    }
    ```

    Exemplo da resposta:

    ```Json
    {
        "msg": "Comanda atualizada com sucesso",
        "pedidoValidado": {
          "comanda": 4,
          "prato": "Hiroshima-style Okonomiyaki",
          "mesa": 4
         },
         "erro": false
    }
    ```
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
        "msg": "Não foi possivel atualizar essa informação!",
	    "erro": true
    }
    ```
---

 - <spam style="color: gray">__DELETE  /pedidos/comanda/:comanda__</spam> 

    Exemplo da resposta:

    ```Json
    {
         "msg": "Comanda 4 deletada com sucesso",
         "deletaPedidos": {
          "comanda": 4,
          "prato": "Hiroshima-style Okonomiyaki",
          "mesa": 4
         },
         "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
         "msg": "Aviso: 13 não existente",
         "erro": true
    }
    ```

----

## Cardápio

- <spam style="color: lightgreen">__GET  /cardapio__</spam>

    Exemplo da resposta:

    ```Json
    {
	"cardapio": [
		{
			"codigo": 1,
			"prato": "Frutos do mar"
		},
		{
			"codigo": 2,
			"prato": "Massa Italiana"
		},
		{
			"codigo": 3,
			"prato": "Sobremesa"
		}
	],
	"erro": false
    }
    ```

- <spam style="color: lightgreen">__GET  /cardapio/codigo/:codigo__<spam>

    Exemplo da resposta

    ```Json
    {
        "pedido": {
        "comanda": 1,
        "prato": "Macarrão",
        "mesa": 1
        },
        "msg": "o pedido 1 esta no banco de dados",
        "erro": false
    }
     ```
     
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
        "msg": "Aviso: 7 não encontrado!",
	    "erro": true
    }
    ```
---

- <spam style="color: orange">__POST /cardapio__<spam>

    Exemplo de requisição:

    ```Json
    {
	    "prato": "Cheesecake"
    }
    ```

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Pedido inserido com sucesso",
	    "inserePedido": {
		"prato": "Cheesecake"
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: prato não inserido!",
	    "erro": true
    }
    ```

---

- <spam style="color: dodgerblue">__PUT /cardapio/codigo/:codigo__</spam>

    Exemplo de requisição:

    ```Json
    {
		"codigo": 4,
		"prato": "Bake Cheese Tart"
	}
    ```

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Prato atualizada com sucesso",
	    "Prato Validado": {
		"codigo": 4,
		"prato": "Bake Cheese Tart"
	    },
	    "erro": false
    }
    ```
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Não foi possivel atualizar essa informação!",
	    "erro": true
    }
    ```
---

- <spam style="color: gray">__DELETE  /cardapio/codigo/:codigo__</spam>

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Prato deletado com sucesso",
	    "Prato": {
		"codigo": 4,
		"prato": "Bake Cheese Tart"
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: 13 não existente",
	    "erro": true
    }
    ```
---

## Clientes

- <spam style="color: lightgreen">__GET  /clientes__</spam>

    Exemplo da resposta:

    ```Json
    {
	    "clientes": [
		    {
			"id": 1,
			"nome": "Hudson Uchoa",
			"email": "hudsonuchoa@bol.com.br",
			"contato": 99856847
		    },
		    {
			"id": 2,
			"nome": "Joca Moura",
			"email": "jocamoura@gmail.com",
			"contato": 465416541
		    },
		    {
			"id": 3,
			"nome": "Guilherme Da Mata",
			"email": "guilhermedamata@yahoo.com",
			"contato": 694164184796
		    }
	    ],
	    "erro": false
    }
    ```

- <spam style="color: lightgreen">__GET  /clientes/contato/:contato__<spam>

    Exemplo da resposta

    ```Json
    {
	    "cliente": {
		"id": 1,
		"nome": "Hudson Uchoa",
		"email": "hudsonuchoa@bol.com.br",
		"contato": 99856847
	    },
	    "msg": "o contato 99856847 esta no banco de dados",
	    "erro": false
    }
     ```
     
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: 9985684 não encontrado!",
	    "error": true
    }
    ```
---

- <spam style="color: orange">__POST /clientes__<spam>

    Exemplo de requisição:

    ```Json
    {
			"nome": "Kim Taeyeon",
			"email": "kimtaeyeon@gmail.com",
			"contato": 123456789
	}
    ```

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Cliente inserido com sucesso",
	    "nome": {
		"nome": "Kim Taeyeon",
		"email": "kimtaeyeon@gmail.com",
		"contato": 123456789
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: preencha todos os campos",
	    "erro": true
    }
    ```

---

- <spam style="color: dodgerblue">__PUT /clientes/id/:id__</spam>

    Exemplo de requisição:

    ```Json
    {
		"id": 4,
		"nome": "Kim Taeyeon",
		"email": "snsdtaeyeonkim@gmail.com",
		"contato": 123456789
	}
    ```

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Cliente atualizado com sucesso",
	    "nome": {
		"id": 4,
		"nome": "Kim Taeyeon",
		"email": "snsdtaeyeonkim@gmail.com",
		"contato": 123456789
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Não foi possivel atualizar essa informação!",
	    "erro": true
    }
    ```
---

- <spam style="color: gray">__DELETE  /clientes/contato/:contato__</spam>

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Cliente deletado com sucesso",
	    "cliente": {
		"id": 4,
		"nome": "Kim Taeyeon",
		"email": "snsdtaeyeonkim@gmail.com",
		"contato": 123456789
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: 13 não existente",
	    "erro": true
    }
    ```

---

## Funcionários

- <spam style="color: lightgreen">__GET  /funcionarios__</spam>

    Exemplo da resposta:

    ```Json
    {
	    "funcionarios": [
		    {
			"id": 1,
			"nome": "Mariana Silveira",
			"email": "mariana_silveira@bol.com.br",
			"cargo": "Chef",
			"salario": 5,
			"contato": 99856847
		},
		{
			"id": 2,
			"nome": "Júlio Martins",
			"email": "julio_martins@gmail.com",
			"cargo": "Auxiliar de cozinha",
			"salario": 3,
			"contato": 465416541
		},
		{
			"id": 3,
			"nome": "Milena Gasparini",
			"email": "milena_gasparini@yahoo.com",
			"cargo": "Recepcionista",
			"salario": 2,
			"contato": 694164184796
		}
	    ],
	        "erro": false
    }
    ```

- <spam style="color: lightgreen">__GET  /funcionarios/contato/:contato__<spam>

    Exemplo da resposta

    ```Json
    {
	    "funcionarios": {
		"id": 1,
		"nome": "Mariana Silveira",
		"email": "mariana_silveira@bol.com.br",
		"cargo": "Chef",
		"salario": 5,
		"contato": 99856847
	    },
	    "msg": "o funcionário 99856847 esta no banco de dados",
	    "erro": false
    }
     ```
     
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: 9985684 não encontrado!",
	    "erro": true
    }
    ```
---

- <spam style="color: orange">__POST /funcionarios__<spam>

    Exemplo de requisição:

    ```Json
    {
		"nome": "Min-hee",
		"email": "kimminhee@yahoo.com",
		"cargo": "Gerente",
		"salario": 500,
		"contato": 125698546
	}
    ```

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Funcionário inserido com sucesso",
	    "funcionarios": {
		"nome": "Min-hee",
		"email": "kimminhee@yahoo.com",
		"cargo": "Gerente",
		"salario": 500,
		"contato": 125698546
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: preencha todos os campos",
	    "erro": true
    }
    ```

---

- <spam style="color: dodgerblue">__PUT /funcionarios/id/:id__</spam>

    Exemplo de requisição:

    ```Json
    {
		"id": 4,
		"nome": "Kim Min-hee",
		"email": "kimminhee@yahoo.com",
		"cargo": "Gerente",
		"salario": 500,
		"contato": 125698546
	}
    ```

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Funcionários atualizado com sucesso",
	    "funcionariosValidados": {
		"id": 4,
		"nome": "Kim Min-hee",
		"email": "kimminhee@yahoo.com",
		"cargo": "Gerente",
		"salario": 500,
		"contato": 125698546
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Não foi possivel atualizar essa informação!",
	    "erro": true
    }
    ```
---

- <spam style="color: gray">__DELETE  /funcionarios/contato/:contato__</spam>

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Funcionário deletado com sucesso",
	    "Funcionários": {
		"id": 4,
		"nome": "Kim Min-hee",
		"email": "kimminhee@yahoo.com",
		"cargo": "Gerente",
		"salario": 500,
		"contato": 125698546
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: 13 não existente",
	    "erro": true
    }
    ```

---

## Reservas

- <spam style="color: lightgreen">__GET  /reservas__</spam>

    Exemplo da resposta:

    ```Json
    {
	    "reservas": [
		{
			"idReserva": 1,
			"nomeCliente": "Sr. João Pedro de Moura",
			"data": "29/08/2022",
			"hora": 19,
			"lugares": 4,
			"mesa": 8
		},
		{
			"idReserva": 2,
			"nomeCliente": "Maria da Conceição",
			"data": "29/08/2022",
			"hora": 21,
			"lugares": 6,
			"mesa": 15
		},
		{
			"idReserva": 3,
			"nomeCliente": "Joana Costa",
			"data": "29/08/2022",
			"hora": 19,
			"lugares": 2,
			"mesa": 6
		}
	        ],
	    "erro": false
    }
    ```

- <spam style="color: lightgreen">__GET  /reservas/idReserva/:idReserva__<spam>

    Exemplo da resposta

    ```Json
    {
	    "reserva": {
		"idReserva": 1,
		"nomeCliente": "Sr. João Pedro de Moura",
		"data": "29/08/2022",
		"hora": 19,
		"lugares": 4,
		"mesa": 8
	    },
	    "msg": "A reserva 1 foi agendada",
	    "erro": false
    }   
     ```
     
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: 13 não encontrado!",
	    "erro": true
    }
    ```
---

- <spam style="color: orange">__POST /reservas__<spam>

    Exemplo de requisição:

    ```Json
    {
		"nomeCliente": "King Princess",
		"data": "26/11/2022",
		"hora": 17,
		"lugares": 2,
		"mesa": 13
	}
    ```

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Reserva agendada com sucesso!",
	    "reserva": {
		"nomeCliente": "King Princess",
		"data": "26/11/2022",
		"hora": 17,
		"lugares": 2,
		"mesa": 13
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: preencha todos os campos",
	    "erro": true
    }
    ```

---

- <spam style="color: dodgerblue">__PUT /reservas/idReserva/:idReserva__</spam>

    Exemplo de requisição:

    ```Json
    {
		"idReserva": 4,
		"nomeCliente": "Ms. King Princess",
		"data": "26/08/2022",
		"hora": 17,
		"lugares": 2,
		"mesa": 13
	}
    ```

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Reserva atualizada com sucesso",
	    "nome": {
		"idReserva": 4,
		"nomeCliente": "Ms. King Princess",
		"data": "26/08/2022",
		"hora": 17,
		"lugares": 2,
		"mesa": 13
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Não foi possivel atualizar essa informação!",
	    "erro": true
    }
    ```
---

- <spam style="color: gray">__DELETE  /reservas/idReserva/:idReserva__</spam>

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Reserva deletada com sucesso",
	    "Reserva": {
		"idReserva": 4,
		"nomeCliente": "Ms. King Princess",
		"data": "26/08/2022",
		"hora": 17,
		"lugares": 2,
		"mesa": 13
	        },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: 13 não existente",
	    "erro": true
    }
    ```

---

## Fornecedores

- <spam style="color: lightgreen">__GET  /fornecedores__</spam>

    Exemplo da resposta:

    ```Json
    {
	    "fornecedores": [
		{
			"id": 1,
			"nome": "Casa das massas",
			"email": "casadasmassas@gmail.com",
			"contato": 1535001010
		},
		{
			"id": 2,
			"nome": "Peixaria bons mares",
			"email": "pbonsmares@hotmail.com",
			"contato": 1432302020
		},
		{
			"id": 3,
			"nome": "Hortifruti verdurão",
			"email": "hverdurao@outlook.com",
			"contato": 1535320000
		},
		{
			"id": 4,
			"nome": "Distribuidora nosso tempero",
			"email": "dtnossotempero@outlook.com",
			"contato": 4135350000
		},
		{
			"id": 5,
			"nome": "Carnes rei",
			"email": "carnesrei@hotmail.com.br",
			"contato": 1133330000
		}
	    ],
	    "erro": false
    }
    ```

- <spam style="color: lightgreen">__GET  /fornecedores/contato/:contato__<spam>

    Exemplo da resposta

    ```Json
    {
	    "Fornecedor": {
		"id": 1,
		"nome": "Casa das massas",
		"email": "casadasmassas@gmail.com",
		"contato": 1535001010
	    },
	    "erro": false
    }   
     ```
     
- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: 13 não encontrado!",
	    "erro": true
    }
    ```
---

- <spam style="color: orange">__POST /fornecedores__<spam>

    Exemplo de requisição:

    ```Json
    {
		"nome": "Girls Generation",
		"email": "girlsbringtheboys@gmail.com",
		"contato": "08052007"
	}
    ```

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Fornecedor inserido com sucesso",
	    "fornecedor": {
		"nome": "Girls Generation",
		"email": "girlsbringtheboys@gmail.com",
		"contato": "08052007"
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: preencha todos os campos",
	    "erro": true
    }
    ```

---

- <spam style="color: dodgerblue">__PUT /fornecedores/id/:id__</spam>

    Exemplo de requisição:

    ```Json
    {
		"id": 6,
		"nome": "Right Now Girls Generation",
		"email": "girlsbringtheboys@gmail.com",
		"contato": 8052007
	}
    ```

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Fornecedor atualizado com sucesso",
	    "fornecedorValidado": {
		"id": 6,
		"nome": "Right Now Girls Generation",
		"email": "girlsbringtheboys@gmail.com",
		"contato": 8052007
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Não foi possivel atualizar essa informação!",
	    "erro": true
    }
    ```
---

- <spam style="color: gray">__DELETE  /fornecedores/contato/:contato__</spam>

    Exemplo da resposta:

    ```Json
    {
	    "msg": "Fornecedor com o contato 8052007 deletado com sucesso",
	    "deletaFornecedor": {
		"id": 6,
		"nome": "Right Now Girls Generation",
		"email": "girlsbringtheboys@gmail.com",
		"contato": 8052007
	    },
	    "erro": false
    }
    ```

- <spam style="color: red">__ERROS__</spam> Exemplo da resposta:

    ```Json
    {
	    "msg": "Aviso: 13 não existente",
	    "erro": true
    }
    ``` 

---
## :robot: Colaboradores:

<table align='center'>
  <tr>
    <td align="center"><a href="https://github.com/BarbaraGuimaraes21"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102765523?v=4" width="100px;" alt=""/><br /><sub><b>Bárbara Guimarães</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/brendatondin"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102706943?v=4" width="100px;" alt=""/><br /><sub><b>Brenda Tondin</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/Dev-DaMata"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102765157?v=4" width="100px;" alt=""/><br /><sub><b>Guilherme Cordeiro</b></sub></a><br /></td>
     <td align="center"><a href="https://github.com/Henry-Januario"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102758431?v=4" width="100px;" alt=""/><br /><sub><b>Henry Januário</b></sub></a><br /></td>
       <td align="center"><a href="https://github.com/joao-pedro-de-moura"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102768045?v=4" width="100px;" alt=""/><br /><sub><b>João Pedro de Moura</b></sub></a><br /></td>
    <td align="center"><a href="https://github.com/luiseduardot17"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/102761201?v=4" width="100px;" alt=""/><br /><sub><b>Luís Eduardo Gonçalves</b></sub></a><br /></td>
  </tr>
