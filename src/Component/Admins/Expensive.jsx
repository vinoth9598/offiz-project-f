
import React, { useEffect, useState } from 'react'

function Expensive(){

  let [staffSalary,setStaffSalary] = useState([]);

  let fetchStaff = async() =>{
    let res = await fetch('https://offiz-backend.onrender.com/newstaff')
    
    let data = await res.json() ;
    setStaffSalary(data);
  }

  useEffect(()=>{
    fetchStaff()
  },[staffSalary]) ;

  let d = new Date() ;
  let year = d.getFullYear() ;
  let displayDate = (date) =>{
    let joindate = new Date(date) ;
    let joinyear = joindate.getFullYear() ;
    let experience = year - joinyear ;
    return experience  ;
  }

  return(
    <div className='container-full bg-secondary w-100 p-2 text-light'>
        <div>
            <h3>Expenses Details </h3>
            <div>
              <h4>Staffs Salary </h4>
              <div className='table-responsive'>
                <table className='table m-3'>
                  <thead className='table-dark '>
                    <tr>
                      <th>Staff Name</th>
                      <th>JoinDate</th>
                      <th>Experience</th>
                      <th>Salary/Month</th>
                      <th>Increment</th>
                    </tr>
                  </thead>
                  <tbody className='table table-secondary text-dark'>
                    {
                      staffSalary.map((detail)=>(
                        <tr key={detail._id}>
                          <td>{detail.name}</td>
                          <td>{(detail.joindate)}</td>
                          <td>{displayDate(detail.joindate)} years</td>
                          <td>${detail.salary}/months</td>
                          <td>{}Bending</td>
                        </tr>
                      ))
                    }
                   
                  </tbody>
                </table>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default Expensive ;