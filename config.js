module.exports = {
    router: {
      host: process.env.ROUTER_HOST,
      port: process.env.ROUTER_PORT,
      user: process.env.ROUTER_USERNAME,
      password: process.env.ROUTER_PASSWORD,
    },
    router2: {
      host: process.env.ROUTER2_HOST,
      port: process.env.ROUTER2_PORT,
      user: process.env.ROUTER2_USERNAME,
      password: process.env.ROUTER2_PASSWORD,
    },
    secret: process.env.SECRET,
  };