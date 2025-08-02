
import axios from 'axios';
import React, { useEffect, useState } from 'react' ;
import { useNavigate } from 'react-router-dom';

function Placement(){

    let [updateStudent,setUpdateStudent] = useState([]) ;
    let [ report , setReport ] = useState('') ;


    let placementStudent = async() =>{
        let response = await fetch('https://offiz-backend.onrender.com/studentlist') ;

        let data = await response.json() ;

        setUpdateStudent(data) ;
        
    }
    useEffect(()=>{
        placementStudent() ;
    },[]) ;

    let updateStudents = async(id) =>{
       
        let updateReport = {
            status : report 
        }

        await axios
                .put(`https://offiz-backend.onrender.com/studentlist/update/${id}`,updateReport)
                .then((response)=>{
                    console.log(response) ;
                    placementStudent() ;
                    
                })
                .catch((error)=>{
                    console.log("Error in updating student status",error) ;

                })
    }
    
    let navigate = useNavigate() ;

    return(
        <div className='container-full w-100 h-100 bg-dark text-light'>
            <div className='d-flex flex-row justify-content-around bg-secondary align-items-center  '>
                <h3 className=' text-danger'>Placement Students</h3>
                <button className='bg-dark text-light p-1 m-1 border border-dark rounded-2 ' onClick={()=>navigate('/employee')}>Back</button>
            </div>
            <div className=' d-flex flex-row flex-wrap justify-content-around align-items-center gap-4 p-2'>
              
               {
                updateStudent.map((item,index)=>(
                    
                   <div key = {index} className='border p-3 bg-light text-dark rounded-3 '>
                        <div>
                            <p>Name : {item.name}</p>
                            <p>Email : {item.email}</p>
                            <p>Course : {item.course}</p>
                        </div>
                        <div className='bg-primary p-2'>
                        <form onSubmit={()=>updateStudents(item._id)}>
                            <div>
                                <label className='px-1'>update</label>
                                <select className='fs-6 p-1' onChange={(e)=>setReport(e.target.value)}>
                                    <option >--result--</option>
                                    <option value="completed">Completed</option>
                                    <option value="not-completed">Not Completed</option>
                                </select>
                            </div>
                            <div className='btn m-1 w-50'>
                                <button className='button w-100 bg-info text-light rounded-2' type='submit'>Update</button>
                            </div>
                        </form>
                        <p>status:{item.status == null ? "not update" : item.status}</p>
                        </div>
                   </div>
                ))
               }
               </div>
        </div>
    )
}

export default Placement ;