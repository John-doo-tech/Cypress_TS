module.exports = {
  env: {
    be: {
      host: "https://student-api-dev.kyons.vn",
      account: {
        system_admin: {
          email: "kyons.internal+auto_test_sa@gmail.com",
          password: "-ndR9yhE",
        },
      },
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};
