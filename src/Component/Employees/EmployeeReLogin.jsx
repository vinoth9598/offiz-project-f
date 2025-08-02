
import React from 'react';
import { useState } from 'react';
import "../Style/login/employ.css" ;
import { FaEye } from "react-icons/fa";


function EmployeeReLogin({setEmployeeToken,setEmployeeUser, show,setShow}) {

    const [reEmployeeLogin,setReEmployeeLogin] = useState({
        email:"", password:""
    });

    const handleEmployeeLogin = async(event)=>{
        event.preventDefault() ;

        console.log("login employee start") ;

        let response = await fetch('https://offiz-backend.onrender.com/employee/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(reEmployeeLogin)
        });

        let employeeData = await response.json() ;

        console.log(employeeData);

        if(response.status === 200){
            console.log("employee login success");
            console.log('employee login data',employeeData);

            setReEmployeeLogin({
                email:"",
                password:""
            })

            setEmployeeUser(employeeData) ;
            setEmployeeToken(employeeData.token) ;

            window.localStorage.setItem('employeeToken',employeeData.token) ;
            window.localStorage.setItem('employeeuser', JSON.stringify(employeeData));


        }else{
            console.log("employee login failed");
            console.log("login emaployee ",employeeData) ;
            alert('Enter correct'+ JSON.stringify( employeeData));
        }

    }

  return (
    <div className='em container-full bg-info '>
        <div className='emlogin-form'>
            <h4>login employees to view details</h4>
            <div className='notification w-50 text-light p-2 mt-2'>
                <marquee bgcolor='green' behavior='alternate' direction='left'>
                    Notification : {window.localStorage.getItem('notification') || 'Welcome to Tes DB Pvt limited..'}
                </marquee>
            </div>
            <form onSubmit={handleEmployeeLogin}>
                <div className='em-input-e'>
                    <input
                        type='email'
                        placeholder='Enter Your Email'
                        onChange={(e)=>setReEmployeeLogin({...reEmployeeLogin, email:e.target.value})}
                        value={reEmployeeLogin.email}
                        required
                    />
                </div>
                <div className='em-input-p'>
                    <input
                        type={`${show ? "text": "password"}`}
                        placeholder='Enter Your Password'
                        onChange={(e)=>setReEmployeeLogin({...reEmployeeLogin, password:e.target.value})}
                        value={reEmployeeLogin.password }
                        required
                    />
                    <div className='hidden'>
                        <FaEye onClick={()=>setShow(!show)}/>
                    </div>
                </div>
                <div>
                    <button className='em-btn' type='submit'>Login_Employee</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EmployeeReLogin ;
