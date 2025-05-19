import BookCard from "../BookCard"

const Books = () => {

    const books = [
        {
            "id": "1",
            "title": "The Pragmatic Programmer",
            "author": "Andrew Hunt, David Thomas",
            "price": 45,
            "description": "A comprehensive guide to becoming a pragmatic and effective programmer.",
            "stock": 30,
            "genre": "1",
            "language": "English",
            "coverImageURL": "https://m.media-amazon.com/images/I/61ztlXgCmpL._AC_UF1000,1000_QL80_.jpg",
            "rating": 4.8,
            "sold": 150
        },
        {
            "id": "2",
            "title": "Clean Code",
            "author": "Robert C. Martin",
            "price": 50,
            "description": "Learn how to write clean, maintainable, and scalable code.",
            "stock": 20,
            "genre": "1",
            "language": "English",
            "coverImageURL": "https://m.media-amazon.com/images/I/51E2055ZGUL.jpg",
            "rating": 4.9,
            "sold": 200
        },
        {
            "id": "3",
            "title": "1984",
            "author": "George Orwell",
            "price": 20,
            "description": "A dystopian novel depicting a totalitarian regime and its impact on society.",
            "stock": 15,
            "genre": "2",
            "language": "English",
            "coverImageURL": "https://cdn10.bigcommerce.com/s-g9n04qy/products/945036/images/967731/71eWYP9G57L._SL1500___23812.1719963918.1280.1280.jpg?c=2",
            "rating": 4.7,
            "sold": 120
        },
        {
            "id": "4",
            "title": "Sapiens: A Brief History of Humankind",
            "author": "Yuval Noah Harari",
            "price": 35,
            "description": "An exploration of the history and evolution of humankind.",
            "stock": 25,
            "genre": "3",
            "language": "English",
            "coverImageURL": "https://m.media-amazon.com/images/I/812lwsVN5kL._UF1000,1000_QL80_.jpg",
            "rating": 4.8,
            "sold": 300
        },
        {
            "id": "5",
            "title": "Atomic Habits",
            "author": "James Clear",
            "price": 28,
            "description": "A practical guide to building good habits and breaking bad ones.",
            "stock": 40,
            "genre": "4",
            "language": "English",
            "coverImageURL": "https://m.media-amazon.com/images/I/91bYsX41DVL.jpg",
            "rating": 4.9,
            "sold": 500
        },
        {
            "id": "6",
            "title": "The Subtle Art of Not Giving a F*ck",
            "author": "Mark Manson",
            "price": 22,
            "description": "A counterintuitive approach to living a good life.",
            "stock": 30,
            "genre": "4",
            "language": "English",
            "coverImageURL": "https://m.media-amazon.com/images/I/71QKQ9mwV7L.jpg",
            "rating": 4.6,
            "sold": 350
        },
        {
            "id": "7",
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "price": 18,
            "description": "A story of wealth, love, and the American dream in the 1920s.",
            "stock": 50,
            "genre": "2",
            "language": "English",
            "coverImageURL": "https://m.media-amazon.com/images/I/81af+MCATTL.jpg",
            "rating": 4.4,
            "sold": 400
        },
        {
            "id": "8",
            "title": "Guns, Germs, and Steel",
            "author": "Jared Diamond",
            "price": 30,
            "description": "A historical analysis of the factors that shaped the modern world, including geography, culture, and biology.",
            "stock": 20,
            "genre": "3",
            "language": "English",
            "coverImageURL": "https://m.media-amazon.com/images/I/71V0df6wu+L.jpg",
            "rating": 4.7,
            "sold": 250
        }
    ]


    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Books
            </h1>

            <div className="flex flex-wrap gap-4 justify-center">
                {books.length > 0 && books.map((book)=>{
                    return (
                        <BookCard key={book.id} book={book}/>
                    )
                })}
            </div>
        </>
    )
}

export default Books