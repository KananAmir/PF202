import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../Loading';
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2'

const Categories = () => {

    const [categories, setCategories] = useState(null)

    const BASE_URL = "https://northwind.vercel.app/api"


    // axios(apiUrl).then((res)=>{
    // //    setCategories(res.data)
    // }).catch((err)=>{
    //     console.log(err);

    // })

    const getCategories = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/categories`);

            setCategories(response.data)

        } catch (error) {
            console.log(error);
        } finally {
            console.log("finally");
        }
    }


    useEffect(() => {
        getCategories()
    }, [])


    // if(categories === null){
    //     return <Loading/>
    // }


    const handleDelete =  (id) => {
        try {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then( async (result) => {
                if (result.isConfirmed) {
                    const response = await axios.delete(`${BASE_URL}/categories/${id}`)
                    //    console.log(response);
                    //    getCategories()
                    if (response.status === 200) {
                        setCategories(categories.filter((q) => q.id !== id))
                    }
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            });


        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            {categories ?
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categories.map((category) => {
                                return (
                                    <tr key={category.id}>
                                        <td>{category.id}</td>
                                        <td>{category.name}</td>
                                        <td>{category.description}</td>
                                        <td>
                                            <button onClick={() => handleDelete(category.id)}>
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
                :
                <Loading />
            }
        </div>
    )
}

export default Categories
