import React, { useEffect, useState } from 'react' ;
import { useNavigate } from 'react-router-dom';

function Managequeries (){

    let [view,setView] = useState(false);
    let [studentQuery, setStudentQuery] = useState([]) ;
    let navigate = useNavigate() ;

    let [queryStaff, setQueryStaff] = useState({
        name:"",email:"",title:"",category:"",description:""
    });

    let handleQueryStaff = async(e) =>{
        e.preventDefault() ;
        let queryObject = {
            name:queryStaff.name,
            email:queryStaff.email,
            title:queryStaff.title,
            category:queryStaff.category,
            description:queryStaff.description
        };
        console.log(queryObject) ;

        let response = await fetch('https://offiz-backend.onrender.com/staffquery',{
            method:'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify(queryObject)
        });

        let data = await response.json() ;

        if(response.status === 200){
            console.log("query send success") ;
            alert("success to send query to admin") ;
            console.log(data) ;

            setQueryStaff({
                name:"",
                email:"",
                title:"",
                category:"",
                description:""
            });

        }else {
            alert("failed to send query to admin") ;
            console.log(response) ;
        }
    }

    let fetchStudentQuery = async() =>{
        let response = await fetch('https://offiz-backend.onrender.com/studentquery') ;

        let data = await response.json() ;

        setStudentQuery(data);
    }

    useEffect(()=>{
        fetchStudentQuery() ;
    },[studentQuery])
    
    return(
        <div className='container-full w-100 h-100 bg-secondary '>
               <div className='d-flex flex-row bg-secondary text-light justify-content-around align-items-center '>
                <h4>view students query and create query</h4>
                <button className='bg-dark text-light p-1 m-1 border border-dark rounded-2 ' onClick={()=>navigate('/employee')}>Back</button>
            </div>
            <div className='create border-secondary d-flex flex-column-reverse '>
                <div className='adminquery mx-3 border w-75 h-75 p-3'>
                    <h4 className='text-dark p-2 bg-info fs-6'>Create Query to Admin </h4>
                    <form onSubmit={handleQueryStaff} className='form-query bg-light w-100 m-2 p-2 px-3 overflow-auto'>
                        <div className='query-input p-1'>
                            <input
                                type='text'
                                placeholder='Enter Name'
                                className=' p-1 fs-6 '
                                onChange={(e)=>setQueryStaff({
                                    ...queryStaff, 
                                    name:e.target.value
                                })}
                                value={queryStaff.name}
                                required
                            />
                        </div>
                        <div className='query-input p-1'>
                            <input
                                type='email'
                                className=' p-1 fs-6 '
                                placeholder='Enter Email'
                                onChange={(e)=>setQueryStaff({
                                    ...queryStaff, 
                                    email:e.target.value
                                })}
                                value={queryStaff.email}
                                required
                            />
                        </div>
                        <div className='query-input p-1'>
                            <input 
                                type="text"
                                className=' p-1 fs-6 '
                                placeholder='Query Title'
                                onChange={(e)=>setQueryStaff({
                                    ...queryStaff, 
                                    title:e.target.value
                                })}
                                value={queryStaff.title}
                                required
                            />
                        </div>
                        <div className='query-input p-1'>
                            <label htmlFor='category'>Category : </label>
                            <select 
                                  onChange={(e)=>setQueryStaff({
                                    ...queryStaff, 
                                    category:e.target.value
                                })}
                                value={queryStaff.category}
                                id='category'
                            >
                                <option disabled >--select--</option>
                                <option value='class details'>Class Details</option>
                                <option value='leave application'>Leave application</option>
                                <option value='placement Related'>Placement Related </option>
                                <option value='others'>Others</option>
                            </select>
                        </div>
                        <div className='query-input p-1'>
                            <textarea
                                type="text"
                                className='p-2 fs-6 w-75 overflow-hidden '
                                placeholder='Description'
                                rows={'5'}
                                cols={'30'}
                                onChange={(e)=>setQueryStaff({
                                    ...queryStaff, 
                                    description:e.target.value
                                })}
                                value={queryStaff.description}
                                required
                            />
                        </div>
                        <button className='mx-2 px-2 bg-info border-info' style={{width:100}} type='submit'>send</button>
                    </form>
                </div>
               <div className='viewquery border p-3 mx-3 w-75'>
                    <p>View Students Query <button onClick={()=>setView(!view)}>view</button></p>
                    {
            view ? (
              <div className='container-full w-100 h-75 bg-light p-2 m-1 '>
                <div>
                    {
                      studentQuery ? (
                        <div>
                            {
                              studentQuery.map((items, index)=>{
                                return (
                                  <div key={index} className='p-2 border'>
                                      <p className='text-dark fs-5 '>Details for Query : query resolve with in one day</p>
                                      <div className='bg-secondary w-75 h-25 d-flex flex-row flex-wrap justify-content-around ' >
                                        <div className='d-flex flex-column w-100  text-light  overflow-scroll  justify-content-around align-items-left p-2 fs-6'>
                                          <p>Query No : <span className='text-dark fw-bold '>{index + 1}</span></p>
                                          <p>Name : <span className='text-dark fw-bold '>{items.name}</span></p>
                                          <p>Email : <span className='text-dark fw-bold '>{items.email}</span></p>
                                          <p>Title : <span className='text-dark fw-bold '>{items.title}</span></p>
                                          <p>Category : <span className='text-dark fw-bold '>{items.category}</span></p>
                                          <p>Description: <span className='text-dark fw-bold '>{items.description}</span></p>
                                          <button className='bg-info p-1 text-light border-info rounded-2' style={{width:100}}>Resolved</button>
                                         
                                        </div>
                                      </div>
                                  </div>
                                )
                              })
                            }
                        </div>
                      ):(
                        <p className='text-primary fs-4 p-4 mx-4'>Not Any Queries From Students</p>
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
        </div>
    )
}

export default Managequeries ;