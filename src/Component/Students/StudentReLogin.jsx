
import React, { useState } from 'react';
import "../Style/login/student.css" ;
import { FaEye } from "react-icons/fa";


function StudentReLogin({setStudentToken, setStudentUser, setShow, show}) {

    const [reStudent,setReStudent] = useState({
        email:"", password:"" 
    })

    const handleStudentLogin = async(event) =>{
        event.preventDefault() ;

        console.log("student login start");

        let response = await fetch('https://offiz-backend.onrender.com/student/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(reStudent)
        });

        let studentData = await response.json() ;

        if(response.status === 200){
            console.log("student login success") ;
            console.log("login data",studentData);

            setReStudent({
                email:"",
                password:""
            });

            setStudentToken(studentData.token);
            setStudentUser(studentData);

            window.localStorage.setItem('studentToken', studentData.token);
            window.localStorage.setItem('studentUser', JSON.stringify(studentData)) ;
        }else {
            console.log("student login failed");
            console.log('login data',studentData) ;
            alert('Enter correct'+ JSON.stringify( studentData));
        }
    }

  return (
    <div className='container-full '>
        <div className='s-form'>
            <h4>login students to view details</h4>
            <div className='notification w-50 text-light p-2 mt-2'>
                <marquee bgColor='green' behavior='alternate' direction='left'>
                    Notification : {window.localStorage.getItem('notification') || "welcome Tes DB PVT Limited.."}
                </marquee>
            </div>
            <form onSubmit={handleStudentLogin}>
                <div className='sform-input-e'>
                    <input
                        type='email'
                        placeholder='Enter Your Email'
                        onChange={(e)=>setReStudent({...reStudent, email:e.target.value})}
                        value={reStudent.email}
                        required
                    />
                </div>
                <div className='sform-input-p'>
                    <input
                        type={`${show ? "text" : "password"}`}
                        placeholder='Enter Your Password'
                         onChange={(e)=>setReStudent({...reStudent, password:e.target.value})}
                        value={reStudent.password}
                        required
                    />
                    <div className='hidden'>
                        <FaEye onClick={()=>setShow(!show)}/>
                    </div>
                </div>
                <div>
                    <button className='s-btn' type='submit'>Login_Student</button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default StudentReLogin;
