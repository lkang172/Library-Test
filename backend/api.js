import client from './server.js';

export const fetchBooks = async () => {
    try {
        await client.connect();
        const database = client.db("libraryDB");
        const booksCollection = database.collection("books");
        const books = await booksCollection.find().toArray();
        return books;
    } catch (error) {
        console.log("Error fetching books: ", error);
    } finally {
        await client.close();
    }
};

export const addBook = async(book) => {
    try {
        await client.connect();
        const database = client.db("LibraryCluster");
        const booksCollection = database.collection("books");
        const result = await booksCollection.insertOne({title: "Mossflower", author: "Brian Jacques"});
        return result;
    } catch (error) {
        console.log("Error adding book: ", error);
    } finally {
        await client.close();
    }
};