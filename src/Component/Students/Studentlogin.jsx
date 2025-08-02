
import React, { useEffect, useState } from 'react';
import Studentdashboard from './Studentdashboard' ;
import StudentReLogin from './StudentReLogin';
import Studentimage from '../image/student.jpg' ;
import { FaEye } from "react-icons/fa";
import "../Style/register/student.css" ;

function Studentlogin() {

    const [ student, setStudent] = useState({
        username:"" , email:"", password:""
    });

    const [studentsLogin, setStudentsLogin] = useState(false) ;

    const [studentToken , setStudentToken] = useState(null);
    const [studentUser,setStudentUser] = useState(null);
    const [show ,setShow ] = useState(false) ;
    
    const studentLogin =async(e) =>{
        e.preventDefault() ;

        let newStudent = {
            username:student.username ,
            email:student.email,
            password:student.password
        };

        let response = await fetch('https://offiz-backend.onrender.com/student',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newStudent)
        });

        let data = await response.json() ;

        if(response.status == 200){
            console.log("student login successfully..");
            console.log(data);

            setStudent({
                username:"",
                email:"",
                password:""
            });

            setStudentsLogin(true);

        }else{
            console.log("student login failed");
            console.log(data);
        }
    }

    useEffect(()=>{
        let token = window.localStorage.getItem('studentToken');
        let user = window.localStorage.getItem('studentUser') ;

        if( token && user){
            setStudentToken(token) ;
            setStudentUser(JSON.parse(user));
        }
    },[])

  return (
    <div>

        {
            studentUser ? (
                <Studentdashboard
                    setStudentsLogin= {setStudentsLogin}
                    setStudentUser = {setStudentUser}
                    setStudentToken={setStudentToken}
                />
            ):(
                 studentsLogin ? (
                <StudentReLogin
                    setStudentToken = {setStudentToken}
                    setStudentUser = {setStudentUser}
                    setShow = {setShow}
                    show = {show}
                />

            ):(
                <div className='student '>
                
                    <div className='bg-danger text-white px-3'>
                        <h3>Students Users Only!</h3>
                    </div>
                  <div className='student-content'>
                    <div className='studentimage'>
                        <img src={Studentimage} width={"500px"} height={"400px"} title='student system' alt="student"/>
                    </div>
                      <div className='student-form '>
                        <h3>Register</h3>
                        <form onSubmit={studentLogin}>
                            <div className='input '>
                                <input
                                    type="text"
                                    placeholder='Enter Your Name'
                                    onChange={(e)=>setStudent({...student, username:e.target.value})}
                                    value={student.username}
                                    required
                                />
                            </div>
                            <div className='input'>
                                <input
                                    type='email'
                                    placeholder='Enter your Email'
                                    onChange={(e)=>setStudent({...student, email:e.target.value})}
                                    value={student.email}
                                    required

                                />
                            </div>
                            <div className='sinputpass'>
                                <input
                                    type={`${show ? "text" : "password"}`}
                                    placeholder='Enter Your Password'
                                    onChange={(e)=>setStudent({...student, password:e.target.value})}
                                    value={student.password}
                                    required
                                />
                                <div className='hidden'>
                                    <FaEye onClick={()=>setShow(!show)}/>
                                </div>
                            </div>
                            <div className='student-btn'>
                            <button className='student-button' type='submit'>Student Register</button>
                            </div>
                        </form>
                        <p>Already register ? 
                            <button className='bg-white text-dark fw-semibold ' onClick={()=>setStudentsLogin(true)}>
                                Go_Login
                            </button>
                        </p>

                    </div>
                  </div>
            </div>
            
            )
            )
           
        }
    </div>
  )
}

export default Studentlogin ;
