const express = require('express');
const app = express();
const articleRoutes = require('./routes/articleRoutes');
require('./config/db');

const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
app.use(express.static('public'));

app.use(express.json());

// Configuration Swagger
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Blog API',
            version: '1.0.0',
            description: 'API pour gérer des articles de blog'
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Serveur de développement'
            }
        ]
    },
    apis: ['./routes/*.js']  // ← ICI : on dit à Swagger de lire les routes
};

const swaggerSpec = swaggerJsdoc(options);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api', articleRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Serveur lancé sur port ${PORT}`);
    console.log(`Swagger disponible sur http://localhost:${PORT}/api-docs`);
});