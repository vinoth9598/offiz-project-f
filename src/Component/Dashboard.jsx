
import React from 'react';
import './Style/register/dash.css';
import image  from "../Image/dashboard.jpg" ;
import img from "../Image/dash.jpg";
import { MdLabelImportant } from "react-icons/md";


function Dashboard() {
  return (
    <div className='dash'>
        <div className='dashboard-content'>
          <div className='content'>
            <h1>IT PLACEMENTS & </h1> 
            <h1>TRAINING SUPPORT </h1>
            <h3><i>You Want get a Dream Job!</i></h3>
            <div className='img-content'>
              <div className='dash_image'>
                  <img src={img} width={"300px"} height={"250px"} alt='learn' title='development'/>
              </div>
              <div>
                <p><MdLabelImportant className="text-info fs-3" /> Data Science</p>
                <p><MdLabelImportant className="text-info fs-3" /> Machine Learning </p>
                <p><MdLabelImportant className="text-info fs-3" /> web Applications</p>
                <p><MdLabelImportant className="text-info fs-3" /> Desktop Applications</p>
                <p><MdLabelImportant className="text-info fs-3" /> Software Testing </p>
                <p><MdLabelImportant className="text-info fs-3" /> Manual Testing</p>

              </div>
            </div>
          </div>
          <div>
             <img src={image} width={'700px'} height={"550px"}/>
          </div>
        </div>
    </div>
  )
}

export default Dashboard ;
