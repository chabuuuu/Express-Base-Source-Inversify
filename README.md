# EXpressJS Base Source Apply DI With Inversify - Using Repository Pattern with TypeORM

- Flow: Controller --> Service --> Repository --> TypeORM Entity

- We combine all dependency in "container", then resolve and export the controller to use in routes

ORM: TypeORM

## Usage

### Development:
```
npm run start:dev
```

### Production:
```
npm run build
npm run start:prod
```

## Migration:
### Auto genrate migration file to /src/database/migration
```
npm run migration:generate
```

### Apply migration
```
npm run migration:start
```



## How to create new API Endpoint:
- 1. Create new Entity Class in src/models
- 2. Create new repository in src/repository
- 3. Create new Serviec in src/service
- 4. Combine all to container in src/container
- 5. Create new route in src/route
