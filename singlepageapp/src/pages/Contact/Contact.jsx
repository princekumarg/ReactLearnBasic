import React from 'react'

const Contact = () => {
  return (
    <div name='conatct' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        {/* //action=https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c */}
        <form action="" method="POST">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'></p>
            </div>
            <input type="text" className='bg-[#ccd6f6] p-2' placeholder='Name' name='name'/>
            <input type="email" className='bg-[#ccd6f6] my-4 p-2' placeholder='Email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' placeholder='Message' name='message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collabrate</button>
        </form>
      
    </div>
  )
}

export default Contact

