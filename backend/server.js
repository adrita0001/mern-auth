import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import userRoutes from '../backend/routes/userRoutes.js';
import { notFound, errorHandler } from './middlewire/errorMiddlewire.js';

dotenv.config(); // Load environment variables first
connectDb();

const app = express();

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running from port no ${port}`);
});

// Apply cookie-parser middleware before defining routes
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// userRoute
app.use('/api/users', userRoutes);

// default route
app.get('/', (req, res) => {
    res.send(`Server is ready for starting`);
});

app.use(notFound);
app.use(errorHandler);
