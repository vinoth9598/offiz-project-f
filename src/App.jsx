
import React from 'react' ;
import {Link, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Dashboard from './Component/Dashboard';
import Adminlogin from './Component/Admins/Adminlogin';
import Employeelogin from "./Component/Employees/Employeelogin";
import Studentlogin from "./Component/Students/Studentlogin";
import "./Style/App.css";
import { IoMenu } from "react-icons/io5";
import { MdLaptopChromebook } from "react-icons/md";
import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";

import Trainers from './Component/Admins/Trainers' ;
import Students from './Component/Admins/Students';
import Admindashboard from './Component/Admins/Admindashboard';
import Expensive from './Component/Admins/Expensive';
import Companyrequirement from './Component/Admins/Companyrequirement';
import Queryadmin from './Component/Admins/Queryadmin';

import Mentorship from './Component/Employees/EmployContent/Mentorship';
import Assignments from './Component/Employees/EmployContent/Assignments' ;
import Managequeries from './Component/Employees/EmployContent/Managequery';
import Syallabus from './Component/Employees/EmployContent/Syallabus' ;
import Placement from './Component/Employees/EmployContent/Placement';

import Tasks from './Component/Students/Studentcontent/Tasks' ;
import Createquery from './Component/Students/Studentcontent/Createquery' ;
import Projects from './Component/Students/Studentcontent/Project' ;
import Certificate from './Component/Students/Studentcontent/Certificate' ;
import Requirements from './Component/Students/Studentcontent/Requirements' ;
import Studentsyallabus from './Component/Students/Studentcontent/Studentsyallabus';
import Employeedashboard from './Component/Employees/Employeedashboard';
import Studentdashboard from './Component/Students/Studentdashboard';

function App(){
  const [ toggleMenu,setToggleMenu ] = useState(false)

  const hanldeNav = () =>{
    setToggleMenu(!toggleMenu) ;
  }
  return (
      <Router>
          <div className='container-full w-100 h-100'>

            <div className='nav-bar '>
                <div onClick={()=>setToggleMenu(!toggleMenu)} className="menu-nav" >
                  {
                     toggleMenu ? (<RxCross1/>) :  (<IoMenu />)
                  }
             
                </div>
                <div className='title'><p><MdLaptopChromebook /> Tes DB Academy </p></div>
                <Link to='/' className='link text-white fw-semibold p-1'>Home</Link>
                <Link to='/admin' className='link text-white fw-semibold p-1'>Admin Login</Link>
                <Link to='/employee' className='link text-white fw-semibold p-1'>Employees Login</Link>
                <Link to='/student' className='link text-white fw-semibold p-1'>Student Login</Link>
            </div>
                <div>
                  {
                    toggleMenu ? (
                        <div className='links-menu'>
                            <Link to='/' className='links fw-semibold p-2' onClick={hanldeNav}>Home</Link>
                            <Link to='/admin' className='links fw-semibold p-2' onClick={hanldeNav}>Admin Login</Link>
                            <Link to='/employee' className='links fw-semibold p-2' onClick={hanldeNav}>Employees Login</Link>
                            <Link to='/student' className='links fw-semibold p-2' onClick={hanldeNav}>Student Login</Link>
                        </div>
                    ):(
                      null
                    )
                   
                  }
                </div>
          </div>
          <Routes >
              <Route path='/' element={<Dashboard/>}/>
              <Route path='/admin' element={<Adminlogin/>}/>
              <Route path='/employee' element={<Employeelogin/>}/>
              <Route path='/student' element={<Studentlogin/>}/>
              
              <Route path='/admin' element={<Admindashboard/>}/>
              <Route path='/adminstaffs' element={<Trainers/>}/>
              <Route path='/adminstudents' element={<Students/>}/>
              <Route path='/viewqueries' element={<Queryadmin/>}/>
              <Route path='/expenses' element={<Expensive/>} />
              <Route path='/requirements' element={<Companyrequirement/>}/>

              <Route path='/employee' element={<Employeedashboard/>}/>
              <Route path='/mentor' element={<Mentorship/>}/>
              <Route path='/assignments' element={<Assignments/>}/>
              <Route path='/managequery' element={<Managequeries/>}/>
              <Route path='/syallabus' element={<Syallabus/>}/>
              <Route path='/placement' element={<Placement/>}/>

              <Route path='/student' element={<Studentdashboard/>}/>
              <Route path='/task' element={<Tasks/>}/>
              <Route path='/studentquery' element={<Createquery/>}/>
              <Route path='/project' element={<Projects/>}/>
              <Route path='/studentsyallabus' element={<Studentsyallabus/>}/>
              <Route path='/certificate' element={<Certificate/>}/>
              <Route path='/requirement' element={<Requirements/>}/>
          </Routes>
      </Router>
    
  )
}

export default App ;