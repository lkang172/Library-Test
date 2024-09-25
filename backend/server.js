import express from 'express';
import {connectToDatabase} from "./dbconnection.js";
import { fetchBooks, addBook } from './api.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectToDatabase();

app.get('api/books', async(req, res) => {
    const books = await fetchBooks();
    res.json(books);
});

app.post('api/books', async(req, res) => {
    const books = await fetchBooks();
    res.json(books);
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});