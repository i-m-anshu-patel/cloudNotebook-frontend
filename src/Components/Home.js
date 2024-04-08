import React, { useState } from 'react'
import NoteCard from './NoteCard'
import sample from '../utils/sample'

const Home = () => {
  const records = sample.notes;
  const [notes, setNotes] = useState(records);
  return (
    <div className='mt-5'>
      <div className='flex my-5 ms-8'>
        <p className='text-xl text-blue-950'>All Notes</p>
        <div className='ms-auto me-3'>
          <button type='button' className='bg-blue-500 mx-2 px-2 py-1 rounded'>Create Note</button>
          <input type='text' className='rounded py-1 px-1' placeholder='Search' />
        </div>
      </div>

     

      <div className='grid grid-cols-4 gap-4'>
      {notes && notes.map((record) => 
         (<NoteCard key={record._id} note={record}/>)
        )}
      </div>
    </div>

  )
}

export default Home
