
import { Link } from 'react-router-dom';
import "../Style/employcontent/employdashboard.css";
import { SiGoogleclassroom } from "react-icons/si";
import { SiCodementor } from "react-icons/si";
import { MdOutlineAssignment } from "react-icons/md";
import { SiGooglebigquery } from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";
import { RiFindReplaceFill } from "react-icons/ri";
import { useState } from 'react';

function Employeedashboard({setEmployedLogin, setEmployeeUser, setEmployeeToken}){

    let handleEmployLogout =() =>{
        setEmployedLogin(true) ;

        window.localStorage.removeItem('employeeToken');
        window.localStorage.removeItem('employeeuser') ;
        setEmployeeToken(null);
        setEmployeeUser(null) ;
    }

    
    let [view, setView] = useState(1);

    return (
        <div className='container-full w-100 '>
            <div className='content-employ'>
                <div className='employ-nav bg-dark text-light '>
                        <Link to='/employee' className='em-link '>
                            <SiGoogleclassroom className='img fs-3'/>
                            <p>Class</p>
                        </Link>
                        <Link to='/mentor' className='em-link '>
                            <SiCodementor className='img fs-3' />
                            <p>Mentorship</p> 
                        </Link> 
                        <Link to='/assignments' className='em-link'>
                            <MdOutlineAssignment className='img fs-3' />
                            <p>Assignments</p>
                        </Link>
                        <Link to='/managequery' className='em-link'>
                            <SiGooglebigquery className='img fs-3'/>
                            <p>Managequeries</p>
                        </Link>
                        <Link to='/syallabus' className='em-link'>
                            <FaDatabase className='img fs-3'/>
                            <p>Syallabus</p> 
                        </Link>
                        <Link to='/placement' className='em-link'>
                            <RiFindReplaceFill className='img fs-3'/>
                            <p>Placement</p>
                        </Link>
                        <div className='em-link'>
                            <button className='p-1 bg-danger text-light rounded-2 'onClick={handleEmployLogout} style={{width:100}}>Logout</button>
                        </div>
                </div>
               
                <div className='syall bg-secondary d-flex flex-row w-100 flex-wrap p-3 '>
                    <div className='buttons border bg-light p-3 justify-content-between rounded-3 ' style={{width:400}}>
                        <h4 className='text-primary fw-bold bg-dark p-2'>Session Roadmap</h4>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(1)}>1</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(2)}>2</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(3)}>3</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(4)}>4</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(5)}>5</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(6)}>6</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(7)}>7</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(8)}>8</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(9)}>9</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(10)}>10</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(11)}>11</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(12)}>12</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(13)}>13</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(14)}>14</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(15)}>15</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(16)}>16</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(17)}>17</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(18)}>18</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(19)}>19</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(20)}>20</button>
                        <button className='btn border px-3 rounded-2 m-1 fs-5 bg-primary' onClick={()=>setView(21)}>21</button>
                    </div>
                    <div className='bg-secondary p-3 h-50' style={{width:500}}>
                    {
                       view == 1 ? (
                        <div className='first border border-black bg-light p-2 w-100'>
                            <h3 className='text-primary fs-5'>day-1 Javascript Inroduction</h3>
                            <p>Introduction - var, let, const difference- Datatypes-TYpe Conversion</p>
                            <p>Type corection - operators - hosting </p>
                            <p>statements if ,if else ,else - Ternary Operator</p>
                        </div>
                       ):(
                        null
                       )   
                    }
                    <div>
                        {
                            view == 2 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3  className='text-primary fs-5'>day-2 Javascript function and methods</h3>
                                    <p>Math functions- string functions - array functions</p>
                                    <p>array and object-destructure </p>
                                    <p>array methods and string methods</p>
                                </div>
                            ):(null)
                        }
                       
                    </div>
                    <div>
                        {
                            view == 3 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-3 Javascript Objects and scoping</h3>
                                    <p>create Objects - Dot Notation and Bracket Notation </p>
                                    <p>Spread Operator - rest operators  </p>
                                    <p>function scope and block scope</p>
                                </div>
                            ):(null)
                        }
                       
                    </div>
                    <div>
                        {
                            view == 4 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-4 Javascript Functions</h3>
                                    <p>Functions - callback functions - closure functions</p>
                                    <p>Arrow function vs this keyword </p>
                                    <p>call apply and Bind Methods</p>
                                </div>
                            ):(null)
                        }
                       
                    </div>
                   
                    <div>
                        {
                            view == 5 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-5 Javascript map,filter-reduce</h3>
                                    <p>forEach practical samples</p>
                                    <p>map practical samples , filter practical samples </p>
                                    <p>reduce practical samples</p>
                                </div>
                            ):(null)
                        }
                       
                    </div>
                    <div>
                        {
                            view == 6 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-6 Javascript class and prototype inheritence </h3>
                                    <p>Class and Inheritance in JavaScript</p>
                                    <p>Getter and Setter in JavaScript</p>
                                    <p>Static Methods and Properties</p>
                                    <p>Sets in Javascript</p>
                                </div>
                                
                            ):(null)

                            
                        }
                    </div>
                    <div>
                        {
                            view == 7 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-7 HTML forms</h3>
                                    <p>What is HTML & why to use - Basic tags </p>
                                    <p>html vs html 5 difference -forms - tables</p>
                                </div>
                            ):(null)
                        }
                       
                    </div>
                    <div>
                        {
                            view == 8 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-8 HTML links</h3>
                                    <p>Links - anchor tags - dropdown </p>
                                    <p>navigation-images-videos</p>
                                </div>
                            ):(null)
                        }
                       
                    </div>
                    <div>
                        {
                            view == 9 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-9 Css </h3>
                                    <p>Introduction - selectors - colors -backgrounds</p>
                                    <p>Borders - margins - width - height - position </p>
                                    <p>text - fonts - overflow - inline block - align </p>
                                </div>
                            ):(null)
                        }
                       
                    </div>
                    <div>
                        {
                            view == 10 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-10 Css pseudo class </h3>
                                    <p>active - link -visited - hover </p>
                                    <p>Grid - display - grid flow - wrap </p>
                                    <p>flex - display - flow - wrap - content </p>
                                </div>
                            ):(null)
                        }
                       
                    </div>
                    <div>
                        {
                            view == 11 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-11 Dom Introduction </h3>
                                    <p>Dom - methods - documents - Elements - html  </p>
                                    <p>Dom animations - Dom navigations </p>
                                </div>
                            ):(null)
                        }
                       
                    </div>
                    <div>
                        {
                            view == 12 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-12 promise and async</h3>
                                    <p>promises - async and await functions</p>
                                    <p>synchronous and asynchronous </p>
                                    <p>fetch api - axios api methods </p>
                                </div>
                            ):(null)
                        }
                   
                    </div>
                    <div>
                        {
                            view == 13 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-13 Practice and overview</h3>
                                    <p>Dom with examples and practice</p>
                                    <p>javascript recall links with css </p>
                                </div>
                            ):(null)
                        }
                   
                    </div>
                    <div>
                        {
                            view == 14 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-14 Bootstrap </h3>
                                    <p>Introduction - How to use - cdn -styles</p>
                                    <p>bg colors - cards - width - display</p>
                                    <p>breakpoints - responsive web design</p>
                                </div>
                            ):(null)
                        }
                   
                    </div>
                    <div>
                        {
                            view == 15 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-15 React</h3>
                                    <p>react - how to create file</p>
                                    <p>Basic cleanup and project setup</p>
                                </div>
                            ):(null)
                        }
                   
                    </div>
                    <div>
                        {
                            view == 16 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                   <h3 className='text-primary fs-5'>day-16 React Components</h3>
                                    <p>components - html tags - props </p>
                                    <p>handle with multiple components</p>
                                </div>
                            ):(null)
                        }
                   
                    </div>
                    <div>
                        {
                            view == 17 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                     <h3 className='text-primary fs-5'>day-17 React props drilling</h3>
                                    <p>props drilling - buttons - inputs</p>
                                    <p>react styles - css and bootstrap</p>
                                </div>
                            ):(null)
                        }
                   
                    </div>
                    <div>
                        {
                            view == 18 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-18 React Hooks</h3>
                                    <p>useState - useEffect - useContext</p>
                                    <p>state management with examples</p>
                                </div>
                            ):(null)
                        }
                   
                    </div>
                    <div>
                        {
                            view == 19 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-19 React Hooks</h3>
                                    <p>navigation - react-router-dom</p>
                                    <p>useReducers - useParams - react redux</p>
                                </div>
                            ):(null)
                        }
                   
                    </div>
                    <div>
                        {
                            view == 20 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-20 React practice</h3>
                                    <p>form - inputs and get values</p>
                                    <p>API - fetch and axios methods </p>
                                </div>
                            ):(null)
                        }
                   
                    </div>
                    <div>
                        {
                            view == 21 ?(
                                <div className='first border border-black bg-light p-2 w-100'>
                                    <h3 className='text-primary fs-5'>day-21 font Awasome and react-icons</h3>
                                    <p>cdn - How to use - icons </p>
                                    <p>example to import icons and font awasome in react</p>
                                </div>
                            ):(null)
                        }
                   
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employeedashboard ;