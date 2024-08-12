import Head from "next/head";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";
import Checkbox from "../components/ui/Checkbox";

import { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
export default function GetStarted() { 
  const [fullName, setfullName] = useState('')
  const [emailID, setemailID] = useState('')
  const [concern, setInfo] = useState('')

  const {register, handleSubmit, reset, formState:{errors}} = useForm()
 

  function submitHandler(data){
    console.log(data)
    fetch('/api/regform', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type' : 'application/json'
      }
    }
    )
  }
  return (
    <>
      <Head>
        <title>RSVP</title>
      </Head>
      <div className='pt-28 pb-12'>
        <div className='custom-screen text-gray-600'>
          <div className='max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none'>
            <div className='max-w-lg sm:text-center lg:text-left'>
              <h1 className='text-gray-800 text-3xl font-semibold sm:text-4xl'>
                Get notified
              </h1>
              <p className='mt-3'>
              We're excited to share that our new website is coming soon! We're integrating real-life doctor databases and enhancing our appointment form for a seamless experience. <strong>Fill out the form below to stay updated!</strong>
              {/* <a
                  href='mailto:support@blinder.com'
                  target='_blank'
                  rel='noreferrer'
                  className='text-indigo-600 hover:text-indigo-400 font-medium duration-150'>
                  support@blinder.com.
                </a> */}
              </p>
            </div>
            <div className='flex-1 mt-12 sm:max-w-lg lg:max-w-md lg:mt-0'>
              <form
              onSubmit= {handleSubmit(submitHandler)}
               
                className='space-y-5 font-medium'>
                <div>
                  <label>Full name</label>
                  <input type='text' 
                   style={{
                    padding: '10px',
                    fontSize: '16px',
                    border: '2px solid #ccc',
                    borderRadius: '5px',
                    width: '100%',
                    marginBottom: '10px',
                  }}
                  id='Name'
                  {...register('Name',{ required:'Pleae enter name'})}
                  />
                  {errors.Name && errors.Name.message}
                </div>
                <div>
                  <label>Email</label>
                  <input type='text'  
                  id='Email'

                  style = {{
                    padding: '10px',
                    fontSize: '16px',
                    border: '2px solid #ccc',
                    borderRadius: '5px',
                    width: '100%',
                    marginBottom: '10px',
                  }}

                  {...register('Email', {required:'Please enter email'})}
                  />
                  {errors.Email  && errors.Email.message}
                </div>
 
                 
                <div className='pt-1'>
                  <button className='w-full text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 ring-offset-2 ring-indigo-600 focus:ring' >
                    Submit
                  </button>
                </div>
                       <div style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}>
  <a
    href="/" 
    style={{
      color: "black",
      textDecoration: "none",
      padding: "10px 20px",
      fontSize: "16px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
    }}
  >
    <span style={{ marginRight: "8px" }}>&larr;</span> {/* Back arrow symbol */}
    Back to Home
  </a>
</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
