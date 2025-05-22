import { useEffect, useState } from "react"
import { deleteBookById, editBookById, getAllBooks, getBookById } from "../../api/services/bookService";

const Books = ({ books, setBooks }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [imageUrl, setImageUrl] = useState("");
  const [editId, setEditId] = useState(null);


  const getData = async () => {
    try {
      const books = await getAllBooks()
      setBooks(books)

    } catch (error) {
      console.log(error);

    }
  }

  const handleBookInfo = async (id) => {
    try {
      const book = await getBookById(id)
      // console.log(book);

      window.alert(book.title)
    } catch (error) {
      console.log(error);

    }
  }

  const handleDelete = async (id) => {
    try {
      const res = await deleteBookById(id)
      if (res.status === 200) {
        // await getData()
        setBooks(books.filter((q) => q.id !== id))
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      const updatedBook = {
        title: title,
        price: price,
        coverImageURL: imageUrl
      }
      
      const response = await editBookById(editId, updatedBook)

      if(response.status===200){
       const allBooks = await getAllBooks()
       setBooks(allBooks)
      }

      console.log(response);
      
    } catch (error) {
      console.log(error);

    }
  }

    const handleFillEditForm = async (id) => {
      try {
        const book = await getBookById(id)

        setTitle(book.title)
        setPrice(book.price)
        setImageUrl(book.coverImageURL)

      } catch (error) {
        console.log(error);

      }
    }

    useEffect(() => {
      getData()
    }, [])

    return (
      <div>
        <form onSubmit={handleUpdate}>
          <fieldset>
            <legend>Edit Book Form:</legend>
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
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Book Title</th>
              <th>Price </th>
              <th>Rating</th>
              <th>Photo</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => {
              return (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.price}</td>
                  <td>{book.rating}</td>
                  <td>
                    <img src={book.coverImageURL} alt={book.title} width={100} />
                  </td>

                  <td>
                    <button onClick={() => {
                      handleBookInfo(book.id)
                    }}>Detail</button>
                    <button onClick={() => {
                      handleDelete(book.id)
                    }}>Delete</button>
                    <button onClick={() => {
                      handleFillEditForm(book.id)
                      setEditId(book.id)
                    }}>Edit</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    )
  }

export default Books
