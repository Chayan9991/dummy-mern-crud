import express from 'express';
import mongoose from 'mongoose';
import { PORT, mongoDBURL } from './config.js';
import {Book} from './models/bookModel.js'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();
app.use(express.json())


//setup cors
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'PUT', 'POST', 'DELETE'], 
    allowedHeaders: ['Content-Type'], 
}))

// Sample route
app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome');
});

app.use('/books', booksRoute)

// Connect to MongoDB
mongoose.connect(mongoDBURL)
.then(() => {
    console.log("App connected to DB..."); 
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`);
    }); 
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
