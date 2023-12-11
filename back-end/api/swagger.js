const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const {
  SwaggerUIBundle, SwaggerUIStandalonePreset, absolutePath, getAbsoluteFSPath,
} = require('swagger-ui-dist');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
      description: 'Documentation for your API',
    },
  },
  apis: ['api/routes.js'],
};

const specs = swaggerJSDoc(options);

module.exports = {
  swaggerUi,
  specs,
};
