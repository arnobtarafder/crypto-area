import React from 'react'

const JapanAddress = () => {
  return (
    <div className='border p-8 bg-lime-100 w-full'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div>
          <h1>Street:  4-1, Hamamatsu-cho 2-chome</h1>
          <h1>City: Koto-ku</h1>
          <h1>Phone: +8149-548-3554</h1>
          <h1>Email: contact.japan@cc.com</h1>
        </div>
        <div>
          <h1 className='text-2xl'>JAPAN OFFICE</h1>
        </div>
      </div>
    </div>
  )
}

export default JapanAddress