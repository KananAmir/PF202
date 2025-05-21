import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const StudentTable = ({ students, setStudents }) => {

    const [searchValue, setSearchValue] = useState("")

    const handleDelete = (id)=>{
        // const idx = students.findIndex((q)=>q.id === id)
        // students.splice(idx, 1)
                
        // setStudents([...students])

        // const updatedStudents = students.filter((q)=>q.id !== id)
        // console.log(updatedStudents);
        setStudents(students.filter((q)=>q.id !== id))
    }


    const filteredStudents = students.filter((student) => student.studentName.toLowerCase().includes(searchValue))
    
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div><input type="search" className="border-3 px-3 py-1" onChange={(e)=>{
                        setSearchValue(e.target.value.toLowerCase())
                    }}/></div>
                    <div className="overflow-hidden">
                        {
                            students.length > 0 ? (
                                <table className="min-w-full">
                                    <thead className="bg-white border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                ID
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                Student Name
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                GPA
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                University
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                                ACTIONS
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {filteredStudents.map((s) => {
                                                return (
                                                    <tr className="bg-gray-100 border-b" key={s.id}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            {s.id}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {s.studentName}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {s.gpa}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {s.universityName}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            <button onClick={()=>{
                                                                handleDelete(s.id)
                                                            }}>
                                                                <FaTrashAlt className="text-red-700"/>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            ) : <p className='text-red-600'>There is no info!</p>
                        }


                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentTable
