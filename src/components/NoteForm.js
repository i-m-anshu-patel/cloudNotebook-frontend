import React, { useRef } from 'react';
import { useSelector } from "react-redux"

const NoteForm = ({ setNotesModal, setNotesUpdated }) => {
  const title = useRef(null);
  const description = useRef(null);
  const tag = useRef("General");
  const authToken = useSelector((store) => store.user.user);


  const handleSubmit = (e) => {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("auth-token", authToken);
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "title": title.current.value,
      "description": description.current.value,
      "tag": tag.current.value
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("http://localhost:5000/api/notes/createNote", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
        setNotesUpdated(true);
        setNotesModal(false);
      })
      .catch((error) => console.error(error));
  }
  return (
    <div className='fixed inset-0 z-50  bg-black bg-opacity-40 flex items-center justify-center'>
      <div className=' bg-white text-black w-96 p-6 rounded-lg'>
        <form onSubmit={handleSubmit}>
          <div className='flex items-center'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' name='title' className='border-2 w-full  p-1 my-2 mx-3' ref={title} />
          </div>
          <div className='flex items-center'>
            <label htmlFor='title'>Description</label>
            <input type='text' id='title' name='title' className='border-2 w-full  p-1 my-2 mx-2' ref={description} />
          </div>
          <div className='flex items-center'>
            <label htmlFor="tags">Select Tag:</label>
            <select name="tags" id="tags" className='mx-2 border-2 p-2' ref={tag}>
              <option value="General">General</option>
              <option value="Special">Special</option>
              <option value="Purple">Purple</option>
            </select>
          </div>
          <div className="flex items-center justify-center mt-4">
            <button type='submit' className='bg-blue-500 rounded-md px-2 py-1 mx-1 text-white'>Submit</button>
            <button type='button' className='bg-gray-500 rounded-md px-2 py-1 mx-1 text-white' onClick={() => setNotesModal(false)}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NoteForm
