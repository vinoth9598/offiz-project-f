import React, { useEffect } from 'react';
import '../Style/admincontent/queryadmin.css' ;
import { useState } from 'react';

function Queryadmin(){

  let [view,setView] = useState(false);
  let [ staffquery, setStaffquery] = useState([]) ;

  let handleView = () =>{
    setView(!view) ;
  }

  let fetchStaffQuery = async() =>{
    let querystaff = await fetch('https://offiz-backend.onrender.com/staffquery') ;

    let data = await querystaff.json() ;

    // console.log(data) ;
    setStaffquery(data) ;
    
  }

  useEffect(()=>{
    fetchStaffQuery();
  })
  
  return (
    <div className='container-full w-100 bg-dark '>
        <div className=' p-2'>
          <p className='text-light'>Raceive Any Queries From Staffs <button onClick={handleView} className='bg-warning border border-primary '>view</button></p>
          {
            view ? (
              <div className='container-full w-100 h-75 bg-light p-2 m-1'>
                <div>
                    {
                      staffquery ? (
                        <div>
                            {
                              staffquery.map((items, index)=>{
                                return (
                                  <div key={index} className='p-2 border '>
                                      <p className='text-dark fs-5 '>Details for Query : query resolve with in one day</p>
                                      <div className='bg-secondary w-75 h-25 d-flex flex-row flex-wrap justify-content-around ' >
                                        <div className='d-flex flex-column w-100  text-light  justify-content-around align-items-left p-2 fs-6'>
                                          <p>Query No : <span className='text-dark fw-bold '>{index + 1}</span></p>
                                          <p>Name : <span className='text-dark fw-bold '>{items.name}</span></p>
                                          <p>Email : <span className='text-dark fw-bold '>{items.email}</span></p>
                                          <p>Title : <span className='text-dark fw-bold '>{items.title}</span></p>
                                          <p>Category : <span className='text-dark fw-bold '>{items.category}</span></p>
                                          <p>Description: <span className='text-dark fw-bold '>{items.description}</span></p>
                                          <button className='bg-info p-1 w-25 text-light border-info rounded-2'>Resolved</button>
                                         
                                        </div>
                                      </div>
                                  </div>
                                )
                              })
                            }
                        </div>
                      ):(
                        <p className='text-primary fs-4 p-4 mx-4'>Not Any Queries From Staffs</p>
                      )
                    }
                </div>
              </div>

            ):(
              null
            )
          }
        </div>
    </div>
  )
}

export default Queryadmin ;