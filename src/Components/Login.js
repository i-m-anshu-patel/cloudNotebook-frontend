import React from 'react'

const Login = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-500  to-pink-500 w-1/3 ms-auto me-auto py-5 ps-4 pe-4 mt-24 shadow-inner'>
      <p className='text-center font-bold text-xl mb-2'>Login</p>
      <form>
        <label for="email">Email:</label><br />
        <input type="text" id="email" name="email"  className='border w-full bg-black bg-opacity-60 p-1 my-2'/><br />
        <label for="password">Password:</label><br />
        <input type="password" id="password" name="password"  className='border w-full bg-black bg-opacity-60 p-1 my-2'/>
        <div className='mt-4 text-center'>
          <button type='submit' className='p-2 bg-red-600 m-1 border-white rounded-md'>Login</button>
          <button type='submit' className='p-2 bg-yellow-500 m-1 border-white rounded-md text-black'>SignUp</button>
        </div>
      </form>
    </div>
  )
}

export default Login
