var shared = {
  apiUrl: process.env.API_URL || "http://localhost:3000/api",
};

var environments = {
  development: {
    ENV_VARS: shared
  },
  staging: {
    ENV_VARS: shared
  },
  production: {
    ENV_VARS: shared
  }
};

module.exports = environments;