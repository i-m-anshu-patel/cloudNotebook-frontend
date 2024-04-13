import React, { useEffect, useState } from 'react';
import NoteCard from './NoteCard';
import NoteForm from './NoteForm';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import ShimmerUI from './ShimmerUI';


const Home = () => {
  const [previousNotes, setPreviousNotes] = useState(null);
  const [notes, setNotes] = useState(null);
  const [tagFilter, setTagFilter] = useState(null);
  const [notesModal, setNotesModal] = useState(false);
  const [notesUpdated, setNotesUpdated] = useState(false);
  const authToken = useSelector((store) => store.user.user);
  const tagNames = previousNotes ? [...new Set(previousNotes.map(notes => notes.tag))] : [];
  const navigate = useNavigate();
  

  const handleTagFilter = (tagName) => {
    if (tagName === 'clear') {
      setNotes(previousNotes);
      setTagFilter(null);
    }
    else {
      const newNotes = previousNotes.filter((note) => note.tag === tagName);
      setNotes(newNotes);
      setTagFilter(tagName);
    }
  }

  const fetchAllNotes = () => {
    const myHeaders = new Headers();
    myHeaders.append("auth-token", authToken);
    myHeaders.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    fetch("http://localhost:5000/api/notes/fetchAllNotes", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setPreviousNotes(result.notes)
        setNotes(result.notes)
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => { 
    if(!authToken){
      return navigate("/");
     }
    fetchAllNotes();
  }, [notesUpdated])

  return notes && notes.length> 0 ? (
    <div className='mt-5'>
      <div className='flex my-5 ms-8'>
        <div className='ms-auto me-3'>
          {tagNames && tagNames.map((tag, index) => (
            <button key={index} type='button' className={`mx-2 rounded-xl px-2 py-1 border border-gray-500 hover:border-white bg-${tagFilter === tag ? 'black border-white' : 'transparent'}`} onClick={() => handleTagFilter(tag)}>{tag}</button>
          ))}
          {tagFilter &&
            (<button type='button' className='bg-red-500 mx-2 px-2 py-1 rounded' onClick={() => handleTagFilter('clear')}>Clear All Filters</button>)
          }
          <button type='button' className='bg-blue-500 mx-2 px-2 py-1 rounded' onClick={() => setNotesModal(true)}>Create Note</button>
          <input type='text' className='rounded py-1 px-1' placeholder='Search' />
        </div>
      </div>
      {notesModal && (<NoteForm setNotesModal={setNotesModal} setNotesUpdated={setNotesUpdated} />)}
      <div className='grid grid-cols-4 gap-4'>
        {notes && notes.map((record) =>
          (<NoteCard key={record._id} note={record} />)
        )}
      </div>
    </div>

  ) : (<ShimmerUI notesModal={notesModal} setNotesModal={setNotesModal} setNotesUpdated={setNotesUpdated}/>)
}

export default Home
