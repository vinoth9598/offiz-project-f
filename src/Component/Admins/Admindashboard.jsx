
import { Link } from 'react-router-dom';
import "../Style/admincontent/admindashboard.css" ;
import { GrSystem } from "react-icons/gr";
import { FaUserGroup } from "react-icons/fa6";
import { FaPeopleGroup } from "react-icons/fa6";
import { SiGooglebigquery } from "react-icons/si";
import { SiExpensify } from "react-icons/si";
import { MdOutlineEditCalendar } from "react-icons/md";
import { MdMobileFriendly } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { useState } from 'react';


function Admindashboard({setLoginUser, setAdminUser, setAdminToken}){
    
    let handleLogout = () =>{

        setLoginUser(true) ;

        window.localStorage.removeItem('adminuser') ;
        window.localStorage.removeItem('adminToken') ;
        setAdminToken(null);
        setAdminUser(null);
    }

    let [notify, setNotify] = useState(false);
    let [notification, setNotification] = useState('') ;

    let handleSend = () =>{
        window.localStorage.setItem('notification',notification) ;
        setNotify(false) ;
    }
    return (
        <div className='container-full w-100 bg-dark'>
            <div className='content-admin d-flex flex-row bg-dark'>
            <div className='admin-nav bg-dark p-2'>
                <Link to='/admin' className='admin-link'>
                    <GrSystem className='img fs-3'/>
                    <p>Management</p>
                </Link>
                <Link to='/adminstaffs' className='admin-link'>
                    <FaUserGroup className='img fs-3' />
                    <p>Staff_Details</p>
                </Link>
                <Link to='/adminstudents'className='admin-link' >
                    <FaPeopleGroup className='img fs-3'/>
                    <p>Student_Details</p>
                </Link>
                <Link to='/viewqueries' className='admin-link'>
                    <SiGooglebigquery className='img fs-3'/>
                    <p>View_Queries</p>
                </Link>
                <Link to='/expenses' className='admin-link'>
                    <SiExpensify className='img fs-3 ' />
                    <p>Expenses</p>
                </Link>
                <Link to='/requirements' className='admin-link'>
                    <MdOutlineEditCalendar className='img fs-3'/>
                    <p>JobRequirements</p>
                </Link>
                <div className='admin-link'>
                    <button onClick={handleLogout} className='alog bg-danger text-white mx-1 border border-none px-2 fs-6'>
                        logout
                    </button>
                </div>
            </div>
            <div className='ment bg-light w-100 text-dark'>
                <div className='border '>
                    <div className='head bg-dark text-light d-flex flex-row flex-wrap justify-content-around align-items-center'>
                        <h3 className='fw-semibold fs-5 text-danger'>Tes DB Placement System</h3>
                        <button className='send bg-primary p-2 text-light border border-dark rounded-2' onClick={()=>setNotify(!notify)}>Send Notification</button>

                    </div>
                    {
                        notify ? (
                            <div className='notify bg-danger text-light d-flex flex-row flex-wrap justify-content-around align-items-center p-2'>
                                <input type='text' 
                                    placeholder='send notification content'
                                    className='w-50 p-1 m-1 fs-6 rounded-2'
                                    onChange={(e) =>setNotification(e.target.value) } 
                                    required
                                />
                               <button className='p-1 w-25 bg-info text-light border' onClick={handleSend}>Send</button>
                            </div>
                        ):(null)
                    }
                    <div className='static border bg-secondary d-flex flex-row flex-wrap justify-content-around p-3 text-light'>
                        <div className='sta-content border d-flex p-2 justify-content-around align-items-end' style={{width:300, height:200}}>
                            <p className='h-25 bg-info p-1 m-1'>Mern</p>
                            <p className='h-50 bg-info p-1 m-1'>Python</p>
                            <p className='h-75 bg-info p-1 m-1'>Php</p>
                            <p className='h-100 bg-info p-1 m-1'>Java</p>
                        </div>
                        <div>
                        <h4 className='bg-dark p-1'>Departments</h4>
                        <ol>
                            <li>Java Full Stack Develment</li>
                            <li>Python Full Stack Development</li>
                            <li>PHP Full stack Development</li>
                            <li>Mern Stack Development</li>
                        </ol>
                        <h4 className='bg-dark p-1'>Features Development</h4>
                        <ul>
                            <li>AI Training and placements</li>
                            <li>Added more Department</li>
                        </ul>
                    </div>
                    </div>
                   <div className='bg-dark text-light border justify-content-around d-flex flex-row flex-wrap '>
                        <div className='py-1 fs-6' style={{width:400}}>
                            <p>Total Number of Staffs <span className=' text-danger m-2 p-2'>{window.localStorage.getItem('stlength')}</span></p>
                            <p>Total Number of Students <span className=' text-danger m-2 p-2'>{window.localStorage.getItem('slength')}</span></p>
                        </div>
                        <div className='py-1 fs-6' style={{width:400}}>
                            <div>
                                <p><CiLocationOn/> Ambattur,Chennai,India</p>
                                <p><MdMobileFriendly/>+91 9884062253 </p>
                                <p><MdEmail/> support@tesdbacademy.com</p> 
                            </div>
                        </div>
                   </div>
                </div>
            </div>
            </div>
            
        </div>      
        
    ) 
}


export default Admindashboard ;