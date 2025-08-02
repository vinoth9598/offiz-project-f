import React from 'react' ;

function Project(){
    return(
        <div className='container-full bg-dark w-100 h-100 p-2 '>
            <div className='project w-75 h-100 mx-5 p-2 bg-light overflow-auto'>
                <p className='text-danger'>  Description :
                    To identify and implement the Capstone project as the title given below by meeting all the necessary requirements.
                </p>
                <h3 className='bg-dark text-light p-1 rounded-2'>Task Title: Your Wish (Web app)</h3>
                <p className='mx-4'>Any specifications on the design?</p>
                <div className='border p-2'>
                    <p className='text-primary'>Front-end :<span className='text-dark'>Reactjs or Angularjs</span> </p>
                    <p className='text-primary'>Back-end : <span className='text-dark'>Java or Python or Nodejs</span></p>
                    <p className='text-primary'>Database : <span className='text-dark'>MongoDB or Mysql</span></p>
                </div>
                <dl className='m-1'>
                    <dt>Requirements :</dt>
                    <dd>
                        The project should achieve the CODE QUALITY
                        Use fonts/icons if it’s required in the design.
                        The use of various charts is required in the design.
                        The use of bootstrap/ material CSS is required in the design
                        How do I submit my work?
                    </dd>
                    <dd>
                        Push all your work files to GitHub in two different repositories as given below
                        Front-end repo name project-name-frontend.
                        Back-end repo name project-name-backend.
                    </dd>
                </dl>
               <div className='bg-secondary m-1 p-2 text-light rounded-2'>
                    <p>Deploy your front-end application on Netlify(https://www.netlify.com) and back-end application on Render(https://render.com/).
                    Any basic hints/links/reference sites to solve?</p>
                    <p>https://getbootstrap.com/docs/4.4/getting-started/introduction/</p>
                    <p>https://www.chartjs.org/</p>
                    <p>https://jwt.io/introduction/</p>
                    <p>https://react-bootstrap.github.io/</p>
                    <p>https://materializecss.com/</p>
                    <p>https://tailwindcss.com/</p>
                    <p>https://expressjs.com/</p>
               </div>
                <dl className='bg-primary text-light p-2 m-1 rounded-2'>
                    <dt>Terms and Conditions?</dt>
                    <dd>
                        You agree to not share this confidential document with anyone. 
                        You agree to open-source your code (it may even look good on your profile!). Do not mention our company’s name anywhere in the code.
                        We will never use your source code under any circumstances for any commercial purposes; this is just a basic assessment task.
                        For capstone, the use case has to be identified by the developer.
                        NOTE: Any violation of Terms and conditions is strictly prohibited. You are bound to adhere to it.
                    </dd>
                </dl>
            </div>
        </div>
    )
}

export default Project ;