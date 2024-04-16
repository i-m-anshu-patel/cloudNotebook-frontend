import React from 'react';
import { useSelector } from "react-redux";


const NoteCard = ({ note, setNotesUpdated, setNotesModal }) => {
  const authToken = useSelector((store) => store.user.user);
  const handleNoteDelete = (noteId) => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", authToken);

    const requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("http://localhost:5000/api/notes/deleteNote/"+noteId, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        alert(result.message);
        setNotesUpdated("delete"+Math.random() * 100);
  })
      .catch((error) => alert(error));
  }

  return (
    <div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden  h-full">
        <div className="p-4 h-full">
          <h2 className="font-bold text-xl mb-2 text-black">{note.title}</h2>
          <p className="text-gray-700">{note.description}</p>
          <button type='button' className='mt-3 mx-1 px-1 py-1 rounded-xl text-gray-700 border border-gray-500'>#{note.tag}</button>
          <div className="mt-4">
            <button type='button' className='bg-yellow-500 rounded-md px-2 py-1 mx-1' onClick={() => setNotesModal(true)}>Edit</button>
            <button type='button' className='bg-red-500 rounded-md px-2 py-1 mx-1' onClick={() => handleNoteDelete(note._id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NoteCard
