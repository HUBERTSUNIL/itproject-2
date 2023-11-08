import React from 'react'
import Form from './Form'
import Navbar from './Navbar';
import Log from './Log';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='d-flex-column justify-content-between align-items-center p-3  bg-body-secondary'>
        <Form />
        <Log />
      </div>

    </>
  )
}

export default Home
