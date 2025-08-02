
import React, { useState, useEffect } from 'react';
import './assign.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Assignments() {
    let navigate = useNavigate() ;

    let [newTitle, setNewTitle] = useState("") ;
    let [newFile, setNewFile ] = useState("") ;
    let [viewTask , setViewTask] = useState([]) ;
    let submitImage = async(e) =>{
        e.preventDefault();

        const formData = {
            title:newTitle,
            file:newFile
        };

        // console.log(formData);
        let result = await axios.post('https://offiz-backend.onrender.com/upload-files',formData,{
            headers:{
                'Content-Type' : 'multipart/form-data'
            }
        });

        console.log(result);

        if(result.status == 200 ){
            alert("upload pdf file success");
            console.log(result);
            fetchPdf() ;
        }else{
            alert("failed to upload pdf file")
        }
    }

    let fetchPdf = async() => {
        let result = await axios.get('https://offiz-backend.onrender.com/upload-files') ;

        setViewTask(result.data);
    };

    useEffect(()=>{
        fetchPdf();
    },[]);

    let viewPdf =(pdf) =>{
        window.open(`https://offiz-backend.onrender.com/files/${pdf}`, '_blank');
    };

    let handlePdfDelete = async(id) =>{
        let pdfDelete = await axios.delete(`https://offiz-backend.onrender.com/upload-files/${id}`);

        console.log("pdfDelete success",pdfDelete);
        alert('pdf Delete success');
        fetchPdf() ;


    }
  return (
    <div className='assign w-100 bg-dark text-light'>
        <div className='ass bg-primary w-100 h-auto border border-1 p-3 '>
            <div className='d-flex flex-row flex-wrap justify-content-around  '>
                <h3>Send Assessment Files</h3>
                <button className='bg-dark text-light p-1 m-1 border border-dark rounded-2 ' 
                    onClick={()=>navigate('/employee')}>
                    Back
                </button>
            </div>
            <div className='bg-secondary p-2 d-flex flex-row flex-wrap overflow-scroll '>
            <div className='assign-form m-3 bg-light ' style={{width:400}}>
                <form className='form-style border p-4' onSubmit={submitImage}>
                    <h5 className='text-light p-2 bg-dark w-100 rounded-3'>Upload Pdf</h5>
                    <div>
                        <input
                            type='text'
                            placeholder='Title'
                            className='form-control my-1 w-100'
                            onChange={(e)=>setNewTitle(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type='file'
                            placeholder='Choose File'
                            className='form-control my-1 w-100'
                            accept='application/pdf'
                            onChange={(e)=>setNewFile(e.target.files[0])}
                            required
                        />
                    </div>
                    <div>
                        <button className='btn btn-primary m-2 w-50' type='submit'>Submit</button>
                    </div>
                </form>
            </div>
            <div className='m-2 bg-dark w-auto p-2'>
                <h4>view Assignments </h4>
                <div className='d-flex flex-row flex-wrap'>
                   {
                    viewTask.map((task, index)=>{
                        return(
                           <div className='border-dark border-1 bg-primary p-3 m-1 rounded-2' key={index}>
                                <p>Task : {index + 1}</p>
                                <p>Title: {task.title}</p>
                                <button 
                                    className='p-1 border border-info rounded-2'
                                    onClick={()=>viewPdf(task.pdf)}>
                                    viewpdf
                                </button>
                                <button 
                                    onClick={()=>handlePdfDelete(task._id)}
                                className='bg-danger text-light p-1 m-1 border-danger rounded-2'>
                                    Delete
                                </button>
                            </div>
                        )
                    })
                   }
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Assignments;
