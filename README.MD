# **BackendJS** 🎢💻

## **Rotas**

_👌 AS ROTAS SEMPRE TERÃO: **/api/v1/** 👌_

----
### **📍Rota de Criação de usuario:** --_/api/v1/CreateUser_

<br>

>💂‍♀️**CORPO DA REQUISIÇÃO:**
>    
>```json
>
>{
>	"name":"Example",
>	"email":"example@gmail.com",
>	"password":"123",
>	"plan":"Free"
>}
>
>```

<br>

>🤯**CABEÇARIO DA REQUISIÇÃO:**
>
>**🤠NÃO PRECISA🤠**

<br>

>😋**RETORNO:**
>```json
>
>{
>	"user": {
>		"id": "6217b618b1d3e6fdfbfeb42b",
>		"name": "Example",
>		"email": "example@gmail.com",
>		"password": "$2b$04$Z1LLiJog5mFBOkiqPr5.gOF/jetRJ037CLIp3o1JIx4sbeqeHNCwa",
>		"plan": "Free",
>		"money": 0,
>		"create_at": "2022-02-24T16:45:12.378Z"
>	}
>}
>
>```

---
### **📍Rota de Autenticação/login do usuario:** --_/api/v1/authenticate_

<br>

>💂‍♀️**CORPO DA REQUISIÇÃO:**
>    
>```json
>
>{
>	"email":"example@gmail.com",
>	"password":"123"
>}
>
>```

<br>

>🤯**CABEÇARIO DA REQUISIÇÃO:**
>
>**🤠NÃO PRECISA🤠**

<br>

>😋**RETORNO:**
>```json
>
>{
>	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIxN2I2MThiMWQzZTZmZGZiZmViNDJiIiwiaWF0IjoxNjQ1NzIzNjU1LCJleHAiOjE2NDYzMjg0NTUsInN1YiI6IjYyMTdiNjE4YjFkM2U2ZmRmYmZlYjQyYiJ9.QnQid1IonxHVLySa541cRBwFdKFHm7sSpGbv-C8qnRA"
>}
>
>```
---
### **📍Rota de Troca de senha de usuario:** --_/api/v1/RecoveryPass_

<br>

>💂‍♀️**CORPO DA REQUISIÇÃO:**
>    
>```json
>
>{
>	"email":"example@gmail.com",
>	"password":"321"
>}
>
>```

<br>

>🤯**CABEÇARIO DA REQUISIÇÃO:**
>
>**🤠NÃO PRECISA🤠**

<br>

>😋**RETORNO:**
>```json
>
>{
>	"ok": "Senha Alterada! Senha Atual:321"
>}
>
>```
---
### **📍Rota de pegar informações do usuario:** --_/api/v1/PullUser_

<br>

>💂‍♀️**CORPO DA REQUISIÇÃO:**
>
>**🤠NÃO PRECISA🤠**

<br>

>🤯**CABEÇARIO DA REQUISIÇÃO:**
>
>```
>authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIxN2I2MThiMWQzZTZmZGZiZmViNDJiIiwiaWF0IjoxNjQ1NzIzNjU1LCJleHAiOjE2NDYzMjg0NTUsInN1YiI6IjYyMTdiNjE4YjFkM2U2ZmRmYmZlYjQyYiJ9.QnQid1IonxHVLySa541cRBwFdKFHm7sSpGbv-C8qnRA
>```

<br>

>😋**RETORNO:**
>```json
>
>{
>	"user": {
>		"id": "6217b618b1d3e6fdfbfeb42b",
>		"name": "Example",
>		"email": "example@gmail.com",
>		"password": "$2b$04$Z1LLiJog5mFBOkiqPr5.gOF/jetRJ037CLIp3o1JIx4sbeqeHNCwa",
>		"plan": "Free",
>		"money": 0,
>		"create_at": "2022-02-24T16:45:12.378Z"
>	}
>}
>
>```

### **📍Rota para dar dinherio ao usuario:** --_/api/v1/Gain_

<br>

>💂‍♀️**CORPO DA REQUISIÇÃO:**
>```json
>{
>	"gain":100000000
>}
>```


<br>

>🤯**CABEÇARIO DA REQUISIÇÃO:**
>
>```
>authorization = Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjIxN2I2MThiMWQzZTZmZGZiZmViNDJiIiwiaWF0IjoxNjQ1NzIzNjU1LCJleHAiOjE2NDYzMjg0NTUsInN1YiI6IjYyMTdiNjE4YjFkM2U2ZmRmYmZlYjQyYiJ9.QnQid1IonxHVLySa541cRBwFdKFHm7sSpGbv-C8qnRA
>```

<br>

>😋**RETORNO:**
>```json
>{
>	"ok":"example recebeu 10000R$"
>}
>```

