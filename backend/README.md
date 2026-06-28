# Backend - Flow Store

## Instalación

```bash
cd backend
npm install
```

## Configuración

1. Copiar `.env.example` a `.env`:
```bash
cp .env.example .env
```

2. Llenar las variables de entorno:
- `DATABASE_URL` - Conexión a PostgreSQL
- `JWT_SECRET` - Clave secreta para JWT
- `STRIPE_SECRET_KEY` - Clave secreta de Stripe

## Migraciones de BD

```bash
npm run migrate
```

## Desarrollo

```bash
npm run dev
```

API estará disponible en: `http://localhost:5000`

## Compilar para Producción

```bash
npm run build
npm start
```

## API Endpoints

### Autenticación
- `POST /api/auth/register` - Registrar usuario
- `POST /api/auth/login` - Iniciar sesión
- `GET /api/auth/me` - Obtener perfil (requiere token)

### Productos
- `GET /api/products` - Obtener todos los productos
- `GET /api/products/:id` - Obtener producto por ID
- `POST /api/products` - Crear producto (admin)

### Órdenes
- `POST /api/orders` - Crear orden (requiere token)
- `GET /api/orders` - Obtener órdenes del usuario (requiere token)
- `GET /api/orders/:id` - Obtener orden por ID (requiere token)

## Estructura de Carpetas

```
backend/
├── src/
│   ├── index.ts                  # Archivo principal
│   ├── database/
│   │   ├── db.ts                # Conexión a BD
│   │   └── migrations.ts        # Migraciones
│   ├── middleware/
│   │   └── auth.ts              # Middleware de autenticación
│   └── routes/
│       ├── auth.ts              # Rutas de autenticación
│       ├── products.ts          # Rutas de productos
│       └── orders.ts            # Rutas de órdenes
├── dist/                        # Compilado
└── package.json
```

## Tecnologías Usadas

- Express.js
- TypeScript
- PostgreSQL
- JWT (autenticación)
- Bcrypt (encriptación)
- Stripe (pagos)
