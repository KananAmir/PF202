import React, { useState } from 'react'
import { nanoid } from 'nanoid'

class Student {
    constructor(studentName, gpa, uniName) {
        this.studentName = studentName;
        this.gpa = gpa;
        this.universityName = uniName;
        this.id = nanoid();
    }
}


const StudentForm = ({ students, setStudents }) => {

    const [studentName, setStudentName] = useState("")
    const [gpa, setGpa] = useState(0)
    const [uniName, setUniName] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault()


        if (studentName !== "" && gpa !== 0 && uniName !== "") {
            const newStudent = new Student(studentName, gpa, uniName);

            setStudents([...students, newStudent]);

            setStudentName("");
            setGpa(0);
            setUniName("");
        }else{
            window.alert("fill all fields!!")
        }


    }
    return (
        <div>
            <form className='my-3' onSubmit={handleSubmit}>
                <div className='mb-3 '>
                    <input value={studentName} onChange={(e) => {
                        setStudentName(e.target.value)
                    }} className='border-2 p-2' type="text" placeholder='student name' />
                </div>
                <div className='mb-3 '>
                    <input value={gpa} onChange={(e) => {
                        setGpa(parseInt(e.target.value))
                    }} className='border-2 p-2' type="number" placeholder='gpa' />
                </div>
                <div className='mb-3 '>
                    <input value={uniName} onChange={(e) => {
                        setUniName(e.target.value)
                    }} className='border-2 p-2' type="text" placeholder='university name' />
                </div>
                <button className='border-2' type='submit'>submit</button>
            </form>
        </div>
    )
}

export default StudentForm
