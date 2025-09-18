# Hotel Rooms API

CRUD de quartos de hotel usando **NestJS + TypeORM + PostgreSQL**, com **Swagger** para testes.

---

## 🚀 Como rodar o projeto

### 1. Clonar e instalar dependências
```bash
git clone <seu-repo>
cd hotel-rooms-api
npm install
````

### 2. Configurar variáveis de ambiente

Copie o arquivo `.env.example` para `.env` e ajuste valores conforme necessário:

```env
PORT=3000
DB_HOST=db
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=hotel_db
DB_SYNCHRONIZE=true
```

### 3. Rodar com Docker Compose

```bash
docker compose up --build
```

* API: [http://localhost:3000](http://localhost:3000)
* Swagger: [http://localhost:3000/api/docs](http://localhost:3000/api/docs)
* PostgreSQL: `localhost:5432`

---

## 📖 Endpoints

Base: `http://localhost:3000`

### 🔹 GET /rooms

Retorna todos os quartos.

```bash
curl http://localhost:3000/rooms
```

### 🔹 GET /rooms/\:id

Retorna um quarto por id.

```bash
curl http://localhost:3000/rooms/1
```

### 🔹 POST /rooms

Cria um quarto.
**Body (JSON):**

```json
{
  "room_number": 101,
  "floor": 1,
  "type": "single",
  "occupied": false
}
```

Exemplo:

```bash
curl -X POST http://localhost:3000/rooms \
  -H "Content-Type: application/json" \
  -d '{"room_number":101,"floor":1,"type":"single","occupied":false}'
```

### 🔹 PUT /rooms/\:id

Atualiza um quarto (parcial ou total).

```bash
curl -X PUT http://localhost:3000/rooms/1 \
  -H "Content-Type: application/json" \
  -d '{"occupied":true}'
```

### 🔹 DELETE /rooms/\:id

Remove um quarto.

```bash
curl -X DELETE http://localhost:3000/rooms/1
```

---

## 🛠️ Tecnologias utilizadas

* [NestJS](https://nestjs.com/)
* [TypeORM](https://typeorm.io/)
* [PostgreSQL](https://www.postgresql.org/)
* [Swagger](https://swagger.io/)
* [Docker](https://www.docker.com/)

---

## ✅ Critérios atendidos

* API rodando e conectada ao PostgreSQL.
* CRUD funcional de quartos (`rooms`).
* DTOs com validação básica (`class-validator`).
* Conexão configurada via variáveis de ambiente (`.env`).
* Dockerfile e docker-compose configurados.
* Swagger acessível em `/api/docs`.
* README com rotas e exemplos.