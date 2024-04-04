import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../utils/redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": email.current.value,
      "password": password.current.value
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:5000/auth/signInUser", requestOptions)
      .then((response) => response.text())
      .then((result) => {
        dispatch(signIn(result));
        navigate("/home");
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className='bg-gradient-to-r from-indigo-500  to-pink-500 w-1/3 ms-auto me-auto py-5 ps-4 pe-4 mt-24 shadow-inner'>
      <p className='text-center font-bold text-xl mb-2'>Login</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label><br />
        <input type="text" id="email" name="email" className='border w-full bg-black bg-opacity-60 p-1 my-2' ref={email} />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" className='border w-full bg-black bg-opacity-60 p-1 my-2' ref={password} />
        <div className='mt-4 text-center'>
          <button type='submit' className='p-2 bg-red-600 m-1 border-white rounded-md'>Login</button>
          <button type='submit' className='p-2 bg-yellow-500 m-1 border-white rounded-md text-black'>SignUp</button>
        </div>
      </form>
    </div>
  )
}

export default Login
