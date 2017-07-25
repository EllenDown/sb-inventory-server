// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection:
      'postgress://localhost/sb-inventory'

  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssL=true'
  }
};

//   staging: {
//     client: 'postgresql',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },
//
// production: {
//   client: 'pg',
//   connection: process.env.DATABASE_URL + '?ssL=true'
// }
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }
//
// };
