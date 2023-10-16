import React from 'react';
import CharityList from '../components/CharityList';
import banner from "../assets/banner.jpg"

const HomePage = () => {
  return (
    <div className='h-screen'>
      <div className='w-100 h-2/5 text-center'>
        <img src={banner} className='w-full' style={{ maxHeight:"100%"}}/>
        <h1 className='text-3xl mt-5 font-medium'>You may interest to</h1>
      </div>
      <CharityList initialPage/>
    </div>
  )
}

export default HomePage;