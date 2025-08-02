
import React from 'react'
import { useState , useEffect} from 'react';
import Employeedashboard from './Employeedashboard';
import EmployeeReLogin from './EmployeeReLogin';
import Employ from '../image/employee.jpg' ;
import { FaEye } from "react-icons/fa";
import "../Style/register/employ.css";

function Employeelogin() {

    const [employee, setEmployee] = useState({
        username:"",
        email:"",
        password:""
    });

    const [employedLogin,setEmployedLogin] = useState(false) ;

    const [ employeeToken, setEmployeeToken ] = useState(null);
    const [ employeeUser, setEmployeeUser ] = useState(null);
    const [show ,setShow ] = useState(false) ;

    const addEmployee = async(event)=>{
        event.preventDefault() ;

        let newEmployee = {
            username:employee.username,
            email:employee.email,
            password:employee.password
        };

        let response = await fetch('https://offiz-backend.onrender.com/employee',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newEmployee)
        });

        let data = await response.json() ;

        if(response.status === 200){
            console.log("employee created successfully.");
            console.log(data);

            setEmployee({
                username:"",
                email:"",
                password:""
            });
            
            setEmployedLogin(true) ;

        }else{
            console.log("failed to employee login");
            console.log(data);
        }

    }

    useEffect(()=>{
        let employtoken = window.localStorage.getItem('employeeToken');
        let employuser = window.localStorage.getItem('employeeuser') ;

        if(employtoken && employuser){
            setEmployeeToken(employtoken);
            setEmployeeUser(JSON.parse(employuser)) ;
          
        }
    },[]);

  return (
    <div>
        {
            employeeUser ? (
                <Employeedashboard
                    setEmployedLogin={setEmployedLogin}
                    setEmployeeToken={setEmployeeToken}
                    setEmployeeUser={setEmployeeUser}
                />
            ):(
                 employedLogin ? (
                <EmployeeReLogin
                    setEmployeeToken={ setEmployeeToken }
                    setEmployeeUser = { setEmployeeUser }
                    setShow = {setShow}
                    show = {show}
                />
            ):(
            <div className='employee bg-primary'>
        
                <div className='bg-danger text-white px-3'>
                    <h3>Employees Users Only!</h3>
                </div>
                    <div className='employ-content'>
                        <div className='employee-form'>
                            <h3>Register</h3>
                            <form onSubmit={addEmployee}>
                                <div className='input'>
                                    <input
                                        type="text"
                                        placeholder='Enter your Name'
                                        onChange={(e)=>setEmployee({
                                            ...employee, 
                                            username:e.target.value
                                        })}
                                        value={employee.username}
                                        required
                                    />
                                </div>
                                <div className='input'>
                                    <input
                                        type='email'
                                        placeholder='Enter your Email'
                                        onChange={(e)=>setEmployee({...employee, email:e.target.value})}
                                        value={employee.email}
                                        required

                                    />
                                </div>
                                <div className='einputpass'>
                                    <input
                                        type={`${show ? "text" : "password"}`}
                                        placeholder='Enter Your Password'
                                        onChange={(e)=>setEmployee({...employee, password:e.target.value})}
                                        value={employee.password}
                                        required
                                    />
                                    <div className='hidden'>
                                        <FaEye onClick={()=>setShow(!show)}/>
                                    </div>
                                </div>
                                <div className='employee-btn'>
                                    <button className="employee-button" type='submit'>Employee_Register</button>
                                </div>
                            </form>
                            <p>Already register ? 
                                <button className='bg-white text-dark fw-semibold' onClick={()=>setEmployedLogin(true)}>
                                    Go_Login
                                </button>
                            </p>
                        </div>

                        <div className='employ-image'>
                            <img src={Employ} width={"600px"} height={"350px"} alt='employee' title='Employement system'/>
                        </div>
                    </div>
                   
            </div>
            
            )
            )
           
        }
    </div>
  )
}

export default Employeelogin ;
