import express from 'express';
import {connectToDatabase} from "./dbconnection.js";
import { fetchBooks, addBook } from './api.js';
import cors from 'cors';

const app = express(); //creates instance of Express app
const PORT = 3000; //sets port number from .env

app.use(cors());
app.use(express.json()); //middleware setup - converts JSON to JS object

connectToDatabase(); //connects to Mongo

app.get('/api/books', async(req, res) => {
    const books = await fetchBooks(); //retrieve books from database
    res.json(books); //sends books to client (frontend)
});

app.post('/api/books', async(req, res) => {
    const newBook = req.body;

    try {
        const result = await addBook(newBook);
        res.status(201).json(result);
    } catch(error) {
        console.error("Error adding book:", error);
        res.status(500).json({message: "Failed to add book"});
    }
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});