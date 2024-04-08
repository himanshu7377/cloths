import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import jean from '../assets/jean.jpg'
import password from '../assets/password.png'

import usePasswordVisibility from '../hooks/usePasswordVisibility';

function Register() {

    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    })

    const navigate = useNavigate(); 

    const [showPassword,toggle]=usePasswordVisibility()
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    console.log("login successfulls")
    navigate('/login');
    
   
  };

  const handleChange=(e)=>{
      setFormData({...formData ,[e.target.name]:e.target.value})
     
  }

  return (
    <div className='flex justify-center items-center w-screen h-screen'>
      <div className=' text-center w-[500px] h-[350px] p-10 rounded-lg shadow-md' style={{ backgroundImage: `url(${jean})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className='text-3xl font-bold mb-10 text-white'>REGISTER</h1>
        <form onSubmit={handleSubmit} className='space-y-8'>
          <div className='mb-6 flex items-center'>
            <label htmlFor="name" className='w-24 text-white'>Name:</label>
            <input type="text" id="name" name="name" className='input-field flex-1' value={formData.name} onChange={handleChange} />
          </div>

          <div className='mb-6 flex items-center'>
            <label  className='w-24 text-white'>Email:</label>
            <input type="email" id="email" name="email" className='input-field flex-1' value={formData.email} onChange={handleChange} />
          </div>

          <div className='mb-6 flex items-center relative'>
            <label htmlFor="password" className='w-24 text-white'>Password:</label>
          
            <input type={showPassword? "text": "password"} id="password" name="password" className='input-field flex-1'  value={formData.password} onChange={handleChange}/>
            <img src={password} alt="Password icon" className='absolute top-0 right-0 h-5 w-5 mt-1 mr-3 cursor-pointer' onClick={toggle} />
          </div>
            <div className=' items-center'>
            
            <button type="submit" className='btn-submit text-white bg-green-700 p-2 rounded-md '>Register</button>
            </div>

        </form>
      </div>
    </div>
  );
}

export default Register;
