import React from 'react';
import { useState,useEffect } from 'react' ;
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import img from "./image/profile.jpg";
import '../Style/admincontent/trainer.css' ;
import axios from 'axios';

function Students() {
    const [listStudents,setListStudents] = useState([]) ;
    let [addNewStudent, setAddNewStudent] = useState(false) ;
    window.localStorage.setItem('slength',listStudents.length);

    let [addStudent, setAddStudent] = useState({
        name:"",email:"", number:"", course:""
    })
    const navigate = useNavigate() ;

    const handleNavigate = () =>{
        navigate('/admin') ;
    }
   
    let fetchStudents= async() =>{
        let response = await fetch('https://offiz-backend.onrender.com/studentlist') ;
        let result = await response.json();

        setListStudents(result);
    }

    useEffect(()=>{
        fetchStudents() ;
    },[listStudents])

    let handleNewStudent = async(e) =>{
        e.preventDefault() ;

        let newObject = {
            name:addStudent.name,
            email:addStudent.email,
            number:addStudent.number,
            course:addStudent.course
        }

        let newresponse = await fetch('https://offiz-backend.onrender.com/studentlist',{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(newObject)
        })

        let data = await newresponse.json() ;

        if(newresponse.status === 200){
            alert("new student added success");
            console.log(data);

            setAddStudent({
                name:"",
                email:"",
                number:"",
                course:""
            });

            setAddNewStudent(false);
            fetchStudents() ;
        }else{
            alert("new student add failed");
            console.log(data);
        }
    }

    let handleDelStudent = async(id) =>{
        console.log(id) ;

        try{
            
            let results = await axios.delete(`https://offiz-backend.onrender.com/studentlist/${id}`);
            console.log("student delete success",results);
            alert("Student deleted success");
            fetchStudents();


        }catch(error){
            console.log("failed delete student",error);
            
        }
    }

  return (
    <div className='container-full bg-dark text-light'>
        <div className='student-nav d-flex justify-content-around bg-danger align-items-center'>
            <FaArrowCircleLeft onClick={handleNavigate}/>
            <p className='my-1 p-1'>Students Details Here</p>
            <button className='bg-info p-1 m-1 border border-red rounded-1 text-light fs-6' onClick={()=>setAddNewStudent(!addNewStudent)}>Add New Student</button>
            <p className='my-1 p-1'>Total : <span className='fs-5 text-light'>{listStudents.length}</span></p>
        </div>
        <div className='border border-light'>
            {
                addNewStudent ? (
                    <div className='bg-dark m-2'>
                        <h4 className='mx-3'>New Students Form</h4>
                        <form onSubmit = {handleNewStudent} className='snew-form mx-5 '>
                        <div className='inputs '>
                            <input
                                type='text'
                                placeholder="Enter student Name"
                                onChange={(e)=>setAddStudent({
                                    ...addStudent, name:e.target.value
                                })}
                                value={addStudent.name}
                                required
                            />
                        </div>
                        <div className='inputs '>
                            <input
                                type='email'
                                placeholder='Enter student Email'
                                onChange={(e)=>setAddStudent({
                                    ...addStudent, email:e.target.value
                                })}
                                value={addStudent.email}
                                required
                            />
                        </div>
                           <div className='inputs '>
                            <input
                              type='text'
                              placeholder='Enter Mobile Number.'
                              onChange={(e)=>setAddStudent({
                                ...addStudent, number:e.target.value
                            })}
                            value={addStudent.number}
                              required
                            />
                        </div>
                        <div className='inputs '>
                            <input
                                type='text'
                                placeholder='Enter course details '
                                onChange={(e)=>setAddStudent({
                                    ...addStudent, course:e.target.value
                                })}
                                value={addStudent.course}
                                required
                            />
                        </div>
                        <div>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
                ):(
                    null
                )
            }
        </div>
        <div className='table-responsive'>
        <table className='table overflow-scroll'>
                    <thead className='table table-info'>
                    <tr>
                        <th>Profile</th>
                        <th>StudentName</th>
                        <th>StudentEmail</th>
                        <th>Contact</th>
                        <th>Joincourse</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody className='table table-secondary'>
                        {
                            listStudents.map((student)=>(
                            <tr key={student._id}>
                                <td><img src={img} width={'80px'} height={'80px'}/></td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.number}</td>
                                <td>{student.course}</td>
                                <td ><button onClick={()=>handleDelStudent(student._id)} className='del bg-danger text-light border border-danger p-2 rounded-2'>Delete</button></td>
                            </tr>
                            ))
                        }
        
                    </tbody>
                </table>
         </div>
    </div>
  )
}

export default Students;
