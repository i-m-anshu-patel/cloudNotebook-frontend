import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { signIn } from '../utils/redux/userSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [signInMode, setSignInMode] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if (signInMode) {
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
        .then((response) => {
          return Promise.all([response.status, response.json()]);
        })
        .then(([status, result]) => {
          if (status === 200) {
            dispatch(signIn(result.authToken));
            return navigate("/home");
          }
          else {
            throw new Error(result.errors)
          }

        })
        .catch((error) => {
          alert(error);
          navigate('/');
        });
    }
    if (!signInMode) {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const raw = JSON.stringify({
        "name": username.current.value,
        "email": email.current.value,
        "password": password.current.value
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch("http://localhost:5000/auth/createUser", requestOptions)
        .then((response) =>{
          return Promise.all([response.status, response.json()]);
        })
        .then(([status, result]) => {
          if (status === 200) {
            dispatch(signIn(result.authToken));
            return navigate("/home");
          }
          else {
            throw new Error(result.errors)
          }

        })
        .catch((error) => {
          alert(error);
          navigate('/');
        });
    }


  }
  return (
    <div className='bg-gradient-to-r from-indigo-500  to-pink-500 w-1/3 ms-auto me-auto py-5 ps-4 pe-4 mt-24 shadow-inner'>
      <p className='text-center font-bold text-xl mb-2'>{signInMode ? "Login" : "SignUp"}</p>
      <form onSubmit={handleSubmit}>
        {!signInMode && (
          <>
            <label htmlFor='username'>Username</label>
            <input type="text" id="username" name="username" className='border w-full bg-black bg-opacity-60 p-1 my-2' ref={username} />
          </>
        )}
        <label htmlFor="email">Email:</label><br />
        <input type="text" id="email" name="email" className='border w-full bg-black bg-opacity-60 p-1 my-2' ref={email} />
        <label htmlFor="password">Password:</label><br />
        <input type="password" id="password" name="password" className='border w-full bg-black bg-opacity-60 p-1 my-2' ref={password} />
        <div className='mt-4 text-center'>
          <button type='submit' className='p-2 bg-red-600 m-1 border-white rounded-md'>{signInMode ? "Login" : "SignUp"}</button>
          <button type='button' className='p-2 bg-yellow-500 m-1 border-white rounded-md text-black' onClick={() => setSignInMode(!signInMode)}>{signInMode ? "Don't have an account?" : "Go back to Login"}</button>
        </div>
      </form>
    </div>
  )
}

export default Login
