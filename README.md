## Arranque

Para correr la API, seguir los siguientes pasos:

1. Ejecutar `npm install` en el directorio raiz del proyecto
2. Crear variables de entorno `MONGO_URL` y `PORT` en el archivo `.env` (revisar la seccion de variables de entorno, por favor) 
3. Ejecutar `node --env-file .env index` desde el directorio raiz del proyecto (prestar atencion a la parte de `--env-file .env`, la cual carga las variables de entorno dentro del archivo `.env`)


## Variables de entorno

### MONGO_URL

String de conexión de MongoDB, la cual se puede obtener al crear una base de datos desde la pagina web de MongoDB, por ejemplo:

```
MONGO_URL=mongodb+srv://ejemplo:ejemplo@cluster0.ejemplo.mongodb.net/?retryWrites=true&w=majority
```

### PORT

Numero de puerto correra la API, por ejemplo:

```
PORT=8080
```

## Modelos

### Cliente

| Campo | Tipo de dato | Descripción |
| ----- | ------------ | ----------- |
| _id   | ObjectId     | ID único del cliente |
| nombre | String      | Nombre del cliente |
| avatarUrl  | String       | Direccion del avatar del cliente |
| no_cliente | String       | Numero identificador del cliente |

### CuentaPendiente

| Campo | Tipo de dato | Descripción |
| ----- | ------------ | ----------- |
| _id   | ObjectId     | ID único de la cuenta pendiente |
| id_cliente | ObjectId | ID del cliente asociado a la cuenta pendiente |
| monto_restante | Number       | Monto restante a pagar del cliente |

### Cobro

| Campo | Tipo de dato | Descripción |
| ----- | ------------ | ----------- |
| _id   | ObjectId     | ID único del cobro |
| id_cliente | ObjectId  | ID del cliente asociado al cobro |
| id_cuenta_pendiente | ObjectId       | ID de la cuenta pendiente asociada al cobro |
| monto_cobrado | Number         | Monto cobrado al cliente |


## API

Nota: los parámetros de búsqueda `nombre`, `gte` y `lt`, hacen referencia al nombre de un cliente especifico, `monto_restante` o `monto_cobrado` minimo, y `monto_restante` o `monto_cobrado` maximo, para cuentas pendientes y cobros, respectivamente.

### Clientes

| Método | Ruta | Body | Parámetros | Retorna |
| ------ | ---- | ---- | ---------- | ------- |
| GET    | /api/v1/clientes | - | - | clientes: Cliente[] |
| GET   | /api/v1/clientes/:id | - | id: ID de cliente | cliente: Cliente |
| POST    | /api/v1/clientes | cliente: Cliente | - | cliente: Cliente |
| PUT    | /api/v1/clientes/:id | cliente: Cliente | id: ID de cliente | cliente: Cliente |
| DELETE | /api/v1/clientes/:id | - | id: ID de cliente | cliente: Cliente |

### Cuentas pendientes

| Método | Ruta | Body | Parámetros | Parámetros de búsqueda opcionales | Retorna |
| ------ | ---- | ---- | ---------- | --------------------- | ------- |
| GET    | /api/v1/cuentas | - | - | nombre, gte, lt | cuentas: CuentaPendiente[] |
| GET    | /api/v1/cuentas/:id | - | id: ID de cuenta pendiente | - | cuenta: CuentaPendiente |
| POST   | /api/v1/cuentas | cuenta: CuentaPendiente | - | - | cuenta: CuentaPendiente |
| PUT    | /api/v1/cuentas/:id | cuenta: CuentaPendiente | id: ID de cuenta pendiente | - | cuenta: CuentaPendiente |
| DELETE | /api/v1/cuentas/:id | - | id: ID de cuenta pendiente | - | cuenta: CuentaPendiente |

### Cobros

| Método | Ruta | Body | Parámetros | Parámetros de búsqueda opcionales | Retorna |
| ------ | ---- | ---- | ---------- | --------------------- | ------- |
| GET    | /api/v1/cobros | - | - | nombre, gte, lt | cobros: Cobro[] |
| GET    | /api/v1/cobros/:id | - | id: ID de cobro | - | cobro: Cobro |
| POST   | /api/v1/cobros | cobro: Cobro | - | - | cobro: Cobro |
| PUT    | /api/v1/cobros/:id | cobro: Cobro | id: ID de cobro | - | cobro: Cobro |
| DELETE | /api/v1/cobros/:id | - | id: ID de cobro | - | cobro: Cobro |
