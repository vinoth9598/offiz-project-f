import React from 'react' ;
import {useState, useEffect} from 'react' ;
import axios from "axios" ;

function Tasks(){

    let [allTasks, setAllTasks] = useState([]);

    const getPdf = async() =>{
        const result = await axios.get('https://offiz-backend.onrender.com/upload-files');
        console.log(result.data);

        setAllTasks(result.data);
    }

    useEffect(()=>{
        getPdf();
    },[]);

    const showPdf =(pdf) =>{
        window.open(`https://offiz-backend.onrender.com/files/${pdf}`, "_blank", 'noreferrer')
    }
    return (
        <div className ='container-full bg-dark text-light w-100 p-2'>
            <div className='task w-100 d-flex flex-direction-row flex-wrap p-2 m-1 '>
                <div className='question p-2 m-1'>
                    <h2 className='text-danger'>Task Details</h2>
                    <p>Assigments Questions</p>
                    <div>
                        {
                            allTasks.map((data,index)=>{
                                return(
                                    <div key={index} className='inner-dev border p-2 bg-light rounded-2'>
                                        <p className='text-primary'>Task : {index + 1}</p>
                                        <h5 className='text-primary'>Title :{data.title}</h5>
                                        <button className='btn btn-primary w-75' onClick={()=>showPdf(data.pdf)}>
                                            Show Pdf
                                        </button>
                                    </div>
                                )
                            })
                        }
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tasks ;