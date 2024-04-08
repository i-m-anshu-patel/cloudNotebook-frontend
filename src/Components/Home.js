import React, { useEffect, useState } from 'react'
import NoteCard from './NoteCard'
import sample from '../utils/sample'

const Home = () => {
  const records = sample.notes;
  const [previousNotes, setPreviousNotes] = useState(records);
  const [notes, setNotes] = useState(records);
  const [generalTag, setGeneralTag] = useState(false);
  const [specialTag, setSpecialTag] = useState(false);
 
  useEffect(()=>{
    if(generalTag){
      const newNotes = notes.filter((note) => note.tag === 'General');
      setNotes(newNotes);
    }
    else{
      setNotes(previousNotes);
    }
  }, [generalTag]);


  useEffect(()=>{
    if(specialTag){
      const newNotes = notes.filter((note) => note.tag === 'Special');
      setNotes(newNotes);
    }
    else{
      setNotes(previousNotes);
    }
  }, [specialTag])

  return (
    <div className='mt-5'>
      <div className='flex my-5 ms-8'>
        <div className='ms-auto me-3'>
        <button type='button' className={`mx-2 rounded-xl px-2 py-1 border border-gray-500 hover:border-white`} onClick={() => setSpecialTag(!specialTag)}>Special</button>
        <button type='button' className={`mx-2 rounded-xl px-2 py-1 border border-gray-500 hover:border-white`} onClick={() => setGeneralTag(!generalTag)}>General</button>
          <button type='button' className='mx-2 rounded-xl px-2 py-1 border border-gray-500 hover:border-white'>Sort by earliest</button>
          <button type='button' className='bg-blue-500 mx-2 px-2 py-1 rounded'>Create Note</button>
          <input type='text' className='rounded py-1 px-1' placeholder='Search' />
        </div>
      </div>



      <div className='grid grid-cols-4 gap-4'>
        {notes && notes.map((record) =>
          (<NoteCard key={record._id} note={record} />)
        )}
      </div>
    </div>

  )
}

export default Home
