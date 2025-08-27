// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Bus Management API',
      version: '1.0.0',
      description: 'API documentation for the Bus Management system'
    },
    servers: [
      { url: `http://localhost:5000` } // Change if you use other PORT
    ],
  },
  apis: ['./routes/**/*.js'],  // <-- Point to your routes for annotations
};

const specs = swaggerJsdoc(options);

module.exports = { swaggerUi, specs };
