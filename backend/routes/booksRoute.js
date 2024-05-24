import express from 'express'
import {Book} from '../models/bookModel.js'

const router = express.Router(); 



//post
router.post('/', async (request, response) => {
    try {
        const { title, author, publishYear } = request.body;

        if (!title || !author || !publishYear) {
            return response.status(400).send({ message: "Send all required fields: title, author, publishYear" });
        }

        const book = await Book.create({ title, author, publishYear });
        return response.status(201).send(book);

    } catch (err) {
        console.error(err.message);
        return response.status(500).send({ message: err.message });
    }
});

//get all
router.get('/', async(request, response)=>{
    try{
          const books = await Book.find({}); 
          return response.status(200).json({
            count : books.length, 
            data: books
          }); 
    }catch(err){
        console.log(err.message);
        return response.status(500).send({ message: err.message }); 
    }
}); 

//get by id
router.get('//:id', async(request, response)=>{
    try{
          const{id} = request.params; 
          const book = await Book.findById(id); 
          return response.status(200).json(book); 
    }catch(err){
        console.log(err.message);
        return response.status(500).send({ message: err.message }); 
    }
}); 

//update
router.put('//:id', async (request, response) => {
    try {
        const { title, author, publishYear } = request.body;

        if (!title || !author || !publishYear) {
            return response.status(400).send({ message: "Send all required fields: title, author, publishYear" });
        }

        const { id } = request.params;
        console.log(id);

        const result = await Book.findByIdAndUpdate(
            id,
            { title, author, publishYear },
            { new: true, runValidators: true }
        );

        if (!result) {
            return response.status(404).json({ message: "Book not found" });
        }

        return response.status(200).send({ message: "Book updated successfully", book: result });

    } catch (err) {
        console.log(err.message);
        return response.status(500).send({ message: err.message });
    }
});


//delete a book
router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params;
        const result = await Book.findByIdAndDelete(id);

        if (!result) {
            return response.status(404).json({ message: "Book not found" });
        }

        return response.status(200).send({ message: 'Book deleted successfully', book: result });
    } catch (err) {
        console.log(err.message);
        return response.status(500).send({ message: err.message });
    }
});

export default router; 