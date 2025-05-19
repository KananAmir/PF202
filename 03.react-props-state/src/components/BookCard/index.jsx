import PropTypes from 'prop-types'; 

const BookCard = ({book}) => {
    console.log(book);
    
    return (
        <>
            <div className="antialiased text-gray-900" style={{maxWidth:"300px"}}>
                <div className="bg-gray-200 flex items-center justify-center">
                    <div className="bg-white rounded-lg overflow-hidden shadow-2xl group overflow-hidden transition-transform duration-300 hover:translate-y-[-10px]">
                        <div className="h-48 w-full overflow-hidden">
                            <img
                                className="h-full w-full object-cover transform overflow-hidden transition-transform duration-[300ms] group-hover:scale-125 object-end"
                                src={book.coverImageURL}
                                alt="Home in Countryside"
                            />
                        </div>
                        <div className="p-6 pb-4 group-hover:bg-gray-700 duration-[0.3s]">
                            <div className="mt-1">
                                <span className="text-2xl font-semibold">$ {book.price}</span>
                                <span className="text-gray-600 text-sm">/ wk</span>
                            </div>
                            <h4 className="mt-1 font-semibold text-xl leading-tight truncate group-hover:text-teal-600 duration-[0.3s]">
                                {book.title}
                            </h4>
                            <p className="Card-info text-gray-500 mt-2 group-hover:text-white">
                                {book.description}
                            </p>
                         
                            <div className="mt-2 flex items-center justify-between">
                                <span className="text-teal-600 font-semibold">
                                    <span className="flex gap-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={16}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="feather feather-star"
                                        >
                                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                        </svg>
                                    </span>
                                </span>
                                <span className="ml-2 text-gray-600 text-sm">34 reviews</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


// BookCard.propTypes = {
//     book: PropTypes.object.isRequired,
// }
BookCard.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        coverImageURL: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    })
}

export default BookCard