import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

const StudentDashboard = () => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-screen text-black">
        <h2 className='text-xl font-bold '>course not available</h2>
      </div>
      <Footer/>
    </div>
  )
}

export default StudentDashboard
