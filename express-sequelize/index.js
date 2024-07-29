import express from 'express';
import sequelize from './database.js';
import router from './routers/index.js';
import * as dotenv from 'dotenv';
import bodyParser from 'body-parser';
import errorHandlerMiddleware from './middlewares/erros.middleware.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use the router for routing
app.use('', router);

// 404 handler for unknown routes
app.use('*', (req, res) => {
  res.status(404).json({ msg: 'Not found' });
});

// Error handling middleware
app.use(errorHandlerMiddleware);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    // Sync all models
    await sequelize.sync(); // Consider adding { force: false } if you don't want to drop and recreate tables
    console.log('All models were synchronized successfully.');

    app.listen(port, () => {
      console.log(`App is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startServer();
