import React from 'react';
import { useState,useEffect } from 'react';
import { FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import img from "./image/profile.jpg";
import axios from 'axios';
import "../Style/admincontent/trainer.css";

function Trainers() {
    let navigate = useNavigate() ;

    const [listStaff,setListStaff] = useState([]) ;
    const [newStaff,setNewStaff] = useState(false) ;
    const [addNew,setAddNew] = useState({
        name:"", email:"", education:"", trainer:"",salary:"",joindate:""
    });
    window.localStorage.setItem('stlength',listStaff.length);

    let fetchStaffs = async() =>{

        let response = await fetch('https://offiz-backend.onrender.com/newstaff')
        let data = await response.json();

        setListStaff(data) ;

    }

     useEffect(()=>{
            fetchStaffs() ;
    },[listStaff]) ;

    let handleNavigate = () =>{
        navigate('/admin') ;
    }

    const handleNew = async(e) =>{
        e.preventDefault() ;

        let addNewStaff = {
            name:addNew.name,
            email:addNew.email,
            education:addNew.education,
            trainer:addNew.trainer,
            salary:addNew.salary,
            joindate:addNew.joindate
        }

        let newresponse = await fetch('https://offiz-backend.onrender.com/newstaff',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(addNewStaff)
        })

        let resData = await newresponse.json() ;

        if(newresponse.status === 200){

            alert('new staff added successfully') ;

            console.log(resData) ;

            setAddNew({
                name:"",
                email:"",
                education:"",
                trainer:"",
                salary:"",
                joindate:""
            });
            setNewStaff(false);
            fetchStaffs();
        }else {
            alert('Error in adding new staff') ;
            console.log(resData);
        }
    }
    
    let handleDelete = async(id) =>{

       try{
            let result = await axios.delete(`https://offiz-backend.onrender.com/newstaff/${id}`) 

            console.log("Delete staff successfully",result);
            alert("staff deleted successfully") ;
            fetchStaffs() ;

       }catch(error){
            console.log("Error delete new staff",error);
       }

    }

  return (
    <div className='container-full bg-dark w-100'>
        <div className='nav-staff d-flex justify-content-around align-items-center bg-primary text-white p-2'>
            <div className='back m-1'>
                <FaArrowCircleLeft onClick={()=>handleNavigate()}/>
            </div>
            <h4 className='m-2'>Employees Details here </h4>
            <button className='text-light p-1 m-1' onClick={()=>setNewStaff(!newStaff)}>Add New Members</button>
            <p className='bg-dark text-white p-1 my-2 rounded-2'>Total:<span className='border p-1 bg-white text-dark fw-bold rounded-1 mx-1'>{listStaff.length}</span></p>
        </div>
        
    <div>
        <div>
            {
                newStaff ? (
                    <div className='addnew border border-1 border-dark bg-secondary py-3'>
                        <div className='text-white fs-4 ps-3'>
                            <p>New Staffs Form</p>
                        </div>
                    <form className='formstaff ps-5' onSubmit={handleNew}>
                        <div className='inputs'>
                            <input
                                type='text'
                                placeholder="Enter staff Name"
                                onChange={(e)=>setAddNew({
                                    ...addNew, name:e.target.value

                                })}
                                value={addNew.name}
                                required
                            />
                        </div>
                           <div className='inputs'>
                            <input
                                type='email'
                                placeholder='Enter Email'
                                onChange={(e)=>setAddNew({
                                    ...addNew, email:e.target.value

                                })}
                                value={addNew.email}
                                required
                            />
                        </div>
                           <div className='inputs'>
                            <input
                              type='text'
                              placeholder='Enter Education.'
                              onChange={(e)=>setAddNew({
                                ...addNew, education:e.target.value

                            })}
                            value={addNew.education}
                              required
                            />
                        </div>
                        <div className='inputs'>
                            <input
                                type='text'
                                placeholder='Teching Department'
                                onChange={(e)=>setAddNew({
                                    ...addNew, trainer:e.target.value

                                })}
                                value={addNew.trainer}
                                required
                            />
                        </div>
                        <div className='inputs'>
                            <input
                                type='text'
                                placeholder='Salary/Month'
                                onChange={(e)=>setAddNew({
                                    ...addNew, salary:e.target.value

                                })}
                                value={addNew.salary}
                                required
                            />
                        </div>
                        <div className='inputs'>
                            <input
                                type='date'
                                placeholder='joindate (yyyy-mm-dd)'
                                onChange={(e)=>setAddNew({
                                    ...addNew, joindate:e.target.value

                                })}
                                value={addNew.joindate}
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
    </div>
        <div className='table-responsive my-3 p-2'>
        <table className='table'>
            <thead className='table table-dark'>
                <tr>
                    <th>Profile</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Education</th>
                    <th>Roll</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody className='table table-info fw-semibold'>
                    {
                        listStaff.map((value)=>(
                        <tr key={value._id}>
                            <td><img src={img} width={'80px'} height={'80px'}/></td>
                            <td>{value.name}</td>
                            <td><span>{value.email}</span></td>
                            <td>{value.education}</td>
                            <td>{value.trainer}</td>
                            <td>
                                <button onClick={()=>handleDelete(value._id)} className='staff-btn bg-danger text-light border border-danger rounded-2'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                        ))
                    }
                    
            </tbody>
        </table>
    </div>
    </div>
  )
}

export default Trainers;
