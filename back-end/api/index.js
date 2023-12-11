const express = require('express');
const routes = require('./routes');
const { swaggerUi, specs } = require('./swagger');

const app = express();

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(specs));

app.use(express.json());

app.use('/', routes);

module.exports = app;
