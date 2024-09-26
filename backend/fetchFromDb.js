import {connectToDatabase, getDb} from './dbconnection.js';

export const fetchFromDb = async () => {
    try {
        const db = getDb();
        const booksCollection = db.collection("books");
        const books = await booksCollection.find().toArray();
        return books;
    } catch (error) {
        console.log("Error fetching books: ", error);
    }
};

export const addBook = async(book) => {
    try {
        const db = getDb();
        const booksCollection = db.collection("Library");
        const result = await booksCollection.insertOne(book);
        console.log("Book inserted with ID:", result.insertedId);
        return result;
    } catch (error) {
        console.log("Error adding book: ", error);
    }
};