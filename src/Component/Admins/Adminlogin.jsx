
import  { useEffect, useState } from 'react';
import '../Style/register/admin.css';
import AdminReLogin from './AdminReLogin';
import Admin from '../image/admin.jpg';
import Admindashboard from './Admindashboard';
import { FaEye } from "react-icons/fa";

function Adminlogin() {

    const [ admin,setAdmin] = useState({
        username:"", email:"", password:""
    });

    const [ loginUser ,setLoginUser ] = useState(false);

    let [ adminToken, setAdminToken ] = useState(null) ;
    let [ adminUser, setAdminUser ] = useState(null) ;

    let [show, setShow] = useState(false)

    const adminLogin =async(event) =>{
        event.preventDefault() ;

        let newAdmin = {
            username:admin.username,
            email:admin.email,
            password:admin.password
        }

        let response = await fetch('https://offiz-backend.onrender.com/admin',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(newAdmin)
        });

        let data = await response.json() 

        if(response.status === 200){
            console.log("admin created success");
            console.log(data);

            setAdmin({
                username:"",
                email:"",
                password:""
            });
        setLoginUser(true);
            
        }else{
            console.log("admin login failed");
            console.log(data);
        }
    }

    useEffect(()=>{
        let token = window.localStorage.getItem('adminToken');
        let user = window.localStorage.getItem('adminuser');

        if(token && user){
            setAdminUser(JSON.parse(user));
            setAdminToken(token);
        }
    },[]) 
   
  return (
    <div>
        {
            adminUser ? (
            <Admindashboard
                setLoginUser = {setLoginUser}
                setAdminToken = {setAdminToken}
                setAdminUser = {setAdminUser}
            />
            ):(
                loginUser ? (
                    <AdminReLogin
                        setAdminUser = {setAdminUser}
                        setAdminToken = {setAdminToken}
                        setShow = {setShow}
                        show = {show}
                    />

                ):(
                <div className='admin'>
                    <div className='bg-danger text-white px-3'>
                        <h3>Management users only!</h3>
                    </div>
                    <div className='admin-content'>
                        <div className='admin-form '>
                            <h3>Register</h3>
                            <form onSubmit={adminLogin}>
                                <div className='input'>
                                    <input
                                        type="text"
                                        placeholder='Enter your Username..'
                                        onChange={(e)=>setAdmin({...admin, username:e.target.value})}
                                        value={admin.username}
                                        required
                                    />
                                </div>
                                <div className='input'>
                                    <input
                                        type="email"
                                        placeholder='Enter your Email..'
                                        onChange={(e)=>setAdmin({...admin, email:e.target.value})}
                                        value={admin.email}
                                        required
                                    />
                                </div>
                                <div className='ainputpass'>
                                    <input
                                        type={`${show ? 'text' : 'password'}`}
                                        placeholder='Enter your password'
                                        onChange={(e)=>setAdmin({...admin, password:e.target.value})}
                                        value={admin.password}
                                        required
                                    />
                                    <div className='hidden'>
                                        <FaEye onClick={()=>setShow(!show)}/>
                                    </div>

                                </div>
                                <div className='admin-btn'>
                                    <button className='admin-button' type='submit'>
                                        Register
                                    </button>
                                </div>
                            </form>
                            <span>
                                 <p>Already register  
                                    <button className='bg-white text-dark fw-semibold' onClick={()=>setLoginUser(true)}>
                                        Go_Login
                                    </button>
                                </p>
                            </span>
                        </div>
                        <div className='adminimage '>
                            <img src={Admin} alt={'working'} width={'400'} height={'350'} title='administactive system'/>
                        </div>
                    </div>
                    
                </div>
                )

            )
            
        }
    </div>
  )
}

export default Adminlogin ;