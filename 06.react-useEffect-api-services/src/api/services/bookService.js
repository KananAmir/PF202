import { ENDPOINTS } from "../../constants";
import instance from "../axiosInstance";

//get all books
const getAllBooks = async () => {
    try {
        const response = await instance.get(`${ENDPOINTS.BOOKS}`);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
}

//get book by id
const getBookById = async (id) => {
    try {
        const response = await instance.get(`${ENDPOINTS.BOOKS}/${id}`)
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}

//delete book by id
const deleteBookById = async (id) => {
    try {
        const response = instance.delete(`${ENDPOINTS.BOOKS}/${id}`)
        return response
    } catch (error) {
        throw new Error(error)
    }
}

//add new book
const addNewBook = async (book) => {
    try {
        const response = await instance.post(`${ENDPOINTS.BOOKS}`, book)
        return response
    } catch (error) {
        throw new Error(error)
    }
}

//edit book by id

const editBookById = async (id, book) => {
    try {
        const response = await instance.put(`${ENDPOINTS.BOOKS}/${id}`, book)
        return response

    } catch (error) {
        throw new Error(error)
    }
}



export { getAllBooks, getBookById, deleteBookById, addNewBook, editBookById }