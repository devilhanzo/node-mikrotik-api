module.exports = {
    router: {
      host: process.env.ROUTER_HOST,
      port: process.env.ROUTER_PORT,
      user: process.env.ROUTER_USERNAME,
      password: process.env.ROUTER_PASSWORD,
    },
    secret: process.env.SECRET,
  };