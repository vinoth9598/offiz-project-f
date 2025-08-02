
import React from 'react';
import { useState } from 'react';
import "../Style/login/admin.css";
import { FaEye } from "react-icons/fa";

function AdminReLogin({setAdminUser, setAdminToken, setShow, show}) {

    const [reLoginAdmin, setReLoginAdmin] = useState({
        email:"" , password:""
    })

    const handleAdminLogin = async(event) =>{
        event.preventDefault() ;

        console.log("login admin start..");
        let response = await fetch('https://offiz-backend.onrender.com/admin/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(reLoginAdmin)
        });

        let data = await response.json() ;

        if(response.status === 200){
            console.log("admin login success") ;
            console.log("login data :",data);

            setReLoginAdmin({
                email:"",
                password:""
            })

            setAdminToken(data.token);
            setAdminUser(data);

            window.localStorage.setItem('adminToken',data.token);
            window.localStorage.setItem('adminuser',JSON.stringify(data));

        }else{
            console.log("admin login failed");
            console.log("login data",data);
            alert('Enter correct'+ JSON.stringify( data));
        }


    }

  return (
    <div className='loginRe container-full bg-danger bg-gradient'>
        <div className='login-form'>
            <h4>login admins to view details</h4>
            <form onSubmit={handleAdminLogin}>
                <div className='login-input-e'>
                    <input
                        type='email'
                        placeholder='Enter Your Email'
                        className='col-sm-4'
                        onChange={(e)=>setReLoginAdmin({...reLoginAdmin, email: e.target.value})}
                        value={reLoginAdmin.email}
                        required
                    />
                </div>
                <div className='login-input-p'>
                    <input
                        type={`${show ? "text" : "password"}`}
                        placeholder='Enter Your Password'
                        onChange={(e)=>setReLoginAdmin({...reLoginAdmin, password: e.target.value})}
                        value={reLoginAdmin.password}
                        required
                    />
                    <div className='hidden'>
                        <FaEye onClick={()=>setShow(!show)}/>
                    </div>
                </div>
                <div >
                   <button className='login-button' type='submit'>Login_Admin</button>
                </div>
            </form>
          
        </div>
    </div>
  )
}

export default AdminReLogin;
