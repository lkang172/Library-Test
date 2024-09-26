import express from 'express';
import {connectToDatabase} from "./dbconnection.js";
import { fetchFromDb, addBook } from './fetchFromDb.js';
import cors from 'cors';
import {fetchFromApi} from './fetchFromApi.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express(); //creates instance of Express app
const PORT = process.env.PORT; //sets port number from .env

app.use(cors());
app.use(express.json()); //middleware setup - converts JSON to JS object

connectToDatabase(); //connects to Mongo

app.get('/mongodb/books', async(req, res) => {
    const books = await fetchFromDb(); //retrieve books from database
    res.json(books); //sends books to client (frontend)
});

app.post('/mongodb/books', async(req, res) => {
    const newBook = req.body;

    try {
        const result = await addBook(newBook);
        res.status(201).json(result);
    } catch(error) {
        console.error("Error adding book:", error);
        res.status(500).json({message: "Failed to add book"});
    }
});

app.get('/googleBooksApi/books', async(req, res) => {
    try {
        const books = await fetchFromApi();
        res.json(books);
    } catch(error) {
        console.error("Error fetching books from API:", error);
        res.status(500).json({message: "Failed to fetch books from API"});
    }
});

app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}');
});