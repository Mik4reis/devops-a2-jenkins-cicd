const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3000',
    // Este projeto nao usa arquivo de suporte (sem comandos customizados nem
    // hooks globais). Sem esta linha o Cypress 14 aborta exigindo
    // cypress/support/e2e.js.
    supportFile: false,
  },
});
