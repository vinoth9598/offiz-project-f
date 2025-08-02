
import React, { useEffect, useState } from 'react' ;
import js from "../image/js.png";
import html from "../image/html.png";
import css from "../image/css.png" ;
import java from "../image/java.png";
import python from "../image/python.png";
import react from "../image/react.png";
import { useNavigate } from 'react-router-dom';

function Mentorship(){
     let [ course, setCourse] = useState([]) ;

     let fetchData = async() =>{
          let data = await fetch('https://offiz-backend.onrender.com/studentlist') ;
          let res = await data.json() ;
          setCourse(res) ;
         
     }
     useEffect(()=>{
          fetchData();
     },[]) ;
     let navigate = useNavigate() ;
    return (
     <div className='container-full text-light '>
           <div className='d-flex flex-row justify-content-around  '>
               <h3>Mentorship Details</h3>
               <button className='bg-dark text-light p-1 m-1 border border-dark rounded-2 ' onClick={()=>navigate('/employee')}>Back</button>
            </div>
        <div className='sep d-flex bg-light p-2 justify-content-around align-items-center flex-wrap'>
               {   
                    course.map((item)=>{
                         if(item.course == 'java'){
                              return (
                                   <div className='d-flex flex-row bg-dark p-2 m-1 rounded-2'>
                                        <div >
                                             <h4>Java</h4>
                                             <img src={java} title='java' width={'100px'}  height={'100px'}/>
                                             <p className='text-danger' >Students Details</p>
                                             <hr></hr>
                                             <p>Name: {item.name}</p>
                                             <p>Email: {item.email}</p>
                                        </div>
                                   </div>
                              )
                         }else if(item.course == 'python'){
                              return(
                                   <div  className='d-flex flex-row bg-dark p-2 m-1 rounded-2'>
                                        <div>
                                             <h4>Python</h4>
                                             <img src={python} title='java' width={'100px'}  height={'100px'}/>
                                             <p className='text-danger' >Students Details</p>
                                             <hr></hr>
                                             <p>Name: {item.name}</p>
                                             <p>Email: {item.email}</p>
                                        </div>
                                   </div>
                              )
                         }else if(item.course == 'javascript'){
                              return(
                                   <div  className='d-flex flex-row bg-dark p-2 m-2 rounded-2'>
                                        <div>
                                             <h4>Javascript</h4>
                                             <img src={js} title='java' width={'100px'}  height={'100px'}/>
                                             <p className='text-danger' >Students Details</p>
                                             <hr></hr>
                                             <p>Name: {item.name}</p>
                                             <p>Email: {item.email}</p>
                                        </div>
                                   </div>
                              )
                         }else if(item.course == 'react'){
                              return(
                                   <div  className='d-flex flex-row bg-dark p-2 m-2 rounded-2'>
                                        <div>
                                             <h4>React</h4>
                                             <img src={react} title='java' width={'100px'}  height={'100px'}/>
                                             <p className='text-danger' >Students Details</p>
                                             <hr></hr>
                                             <p>Name: {item.name}</p>
                                             <p>Email: {item.email}</p>
                                        </div>
                                   </div>
                              )
                         }else if(item.course == 'html'){
                              return(
                                   <div  className='d-flex flex-row bg-dark p-2 m-2 rounded-2'>
                                        <div>
                                        <h4>HTML</h4>
                                        <img src={html} title='java' width={'100px'}  height={'100px'}/>
                                        <p className='text-danger' >Students Details</p>
                                        <hr></hr>
                                        <p>Name: {item.name}</p>
                                        <p>Email: {item.email}</p>
                                        </div>
                                   </div>
                              )
                         }else if(item.course == 'css'){
                              return (
                                   <div  className='d-flex flex-row bg-dark p-2 m-2 rounded-2'>
                                        <div>
                                        <h4>CSS</h4>
                                        <img src={css} title='java' width={'100px'}  height={'100px'}/>
                                        <p className='text-danger' >Students Details</p>
                                        <hr></hr>
                                        <p>Name: {item.name}</p>
                                        <p>Email: {item.email}</p>
                                        </div>
                                   </div>
                              )
                         }else if(item.course == 'full stack developer'){
                              return(
                                   <div  className='d-flex flex-row bg-dark p-2 m-2 rounded-2'>
                                       <div>
                                        <h4>Full Stack Developer</h4>
                                        <hr></hr>
                                        <p>Name: {item.name}</p>
                                        <p>Email: {item.email}</p>
                                        </div>
                                   </div>
                              )
                         }
                    })
               }
        </div>
     </div>
    )
}

export default Mentorship ;