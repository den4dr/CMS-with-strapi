module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'db'),
        port: env.int('DATABASE_PORT', 5433),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi_sr_dev'),
        password: env('DATABASE_PASSWORD', 'm9X4dPX5YV9khu'),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
