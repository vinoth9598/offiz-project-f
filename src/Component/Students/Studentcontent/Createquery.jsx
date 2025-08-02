
import React from 'react' ;
import { useState } from 'react';

function Createquery(){


        let [ queryStudent, setQueryStudent] = useState({
            name:"", email:"", title:"", category:"", description:""
        });

        let handleQueryStudent = async(e) =>{
            e.preventDefault() ;

            let queryObject = {
                name:queryStudent.name,
                email:queryStudent.email,
                title:queryStudent.title,
                category:queryStudent.category,
                description:queryStudent.description
            };

            let response = await fetch('https://offiz-backend.onrender.com/studentquery',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(queryObject)
            });

            let data = await response.json() ;

            if(response.status === 200){
                alert("student query created success") ;
                console.log(data) ;

                setQueryStudent({
                    name:"",
                    email:"",
                    title:"",
                    category:"",
                    description:""
                });
            }else {
                alert('Error student query ');
                console.log(data) ;
            }
        }   
    
    return(
       
        <div className='container-full w-100 h-100 bg-secondary '>
            <div className='create border-secondary d-flex flex-column-reverse '>
                <div className='adminquery mx-3 border w-75 h-75 p-3'>
                    <h4 className='text-dark p-2 bg-info fs-6'>Create Query to Admin </h4>
                    <form onSubmit={handleQueryStudent} className='form-query bg-light w-100 m-2 p-2 px-3 overflow-auto'>
                        <div className='query-input p-1'>
                            <input
                                type='text'
                                placeholder='Enter Name'
                                className='p-1 fs-6 '
                                onChange={(e)=>setQueryStudent({
                                    ...queryStudent, 
                                    name:e.target.value
                                })}
                                value={queryStudent.name}
                                required
                            />
                        </div>
                        <div className='query-input p-1'>
                            <input
                                type='email'
                                className='p-1 fs-6 '
                                placeholder='Enter Email'
                                onChange={(e)=>setQueryStudent({
                                    ...queryStudent, 
                                    email:e.target.value
                                })}
                                value={queryStudent.email}
                                required
                            />
                        </div>
                        <div className='query-input p-1'>
                            <input 
                                type="text"
                                className='p-1 fs-6 '
                                placeholder='Query Title'
                                onChange={(e)=>setQueryStudent({
                                    ...queryStudent, 
                                    title:e.target.value
                                })}
                                value={queryStudent.title}
                                required
                            />
                        </div>
                        <div className='query-input p-1'>
                            <label htmlFor='category'>Category : </label>
                            <select 
                                  onChange={(e)=>setQueryStudent({
                                    ...queryStudent, 
                                    category:e.target.value
                                })}
                                value={queryStudent.category}
                                id='category'
                            >
                                <option disabled>--select--</option>
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
                                cols={'20'}
                                onChange={(e)=>setQueryStudent({
                                    ...queryStudent, 
                                    description:e.target.value
                                })}
                                value={queryStudent.description}
                                required
                            />
                        </div>
                        <button className='mx-2 px-2 bg-info border-info' style={{width:100}} type='submit'>send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Createquery ;