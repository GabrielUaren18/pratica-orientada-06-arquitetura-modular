# Modularização

O sistema foi reorganizado em módulos independentes:

- auth
- orders
- products
- payments

Cada módulo possui:

- controllers
- services
- repositories
- entities

Também foi criada uma camada shared para componentes compartilhados:

- middlewares
- utils
- config
- factories