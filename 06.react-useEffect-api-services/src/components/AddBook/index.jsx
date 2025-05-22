import { useState } from "react";
import { addNewBook, getAllBooks } from "../../api/services/bookService";

const AddBook = ({books, setBooks}) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState("");


    const handleSubmit = async (event) => {
        event.preventDefault()

        const newBook = {
            title: title,
            price: price,
            coverImageURL: imageUrl
        }

        const response = await addNewBook(newBook)

        if(response.status===201){
            // setBooks([...books, newBook])
          const updatedBooks = await getAllBooks()
          setBooks(updatedBooks)
        }

        console.log(response);

        setTitle("")
        setPrice(0)
        setImageUrl("")
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Add Book Form:</legend>
                    <label htmlFor="title">Book Title</label>
                    <input value={title} onChange={(e) => {
                        setTitle(e.target.value);
                    }} type="text" id="title" name="title" />
                    <br />
                    <br />
                    <label htmlFor="price">Price</label>
                    <input value={price} onChange={(e) => {
                        setPrice(+e.target.value);
                    }} type="number" id="price" name="price" />
                    <br />
                    <br />
                    <label htmlFor="photo">Photo</label>
                    <input value={imageUrl} onChange={(e) => {
                        setImageUrl(e.target.value);
                    }} type="url" id="photo" name="photo" />
                    <br />
                    <br />
                    <input type="submit" defaultValue="Submit" />
                </fieldset>
            </form>

        </div>
    )
}

export default AddBook
