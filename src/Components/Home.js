import React, { useEffect, useState } from 'react'
import NoteCard from './NoteCard'
import sample from '../utils/sample'
import NoteForm from './NoteForm';

const Home = () => {
  const records = sample.notes;
  const [previousNotes, setPreviousNotes] = useState(records);
  const [notes, setNotes] = useState(records);
  const [tagFilter, setTagFilter] = useState(null);
  const tagNames = [...new Set(previousNotes.map(notes => notes.tag))];
 
  const handleTagFilter = (tagName) => {
    if(tagName === 'clear'){
      setNotes(previousNotes);
      setTagFilter(null);
    }
    else{
      const newNotes = previousNotes.filter((note) => note.tag === tagName);
      setNotes(newNotes);
      setTagFilter(tagName);
    }
  }

  return (
    <div className='mt-5'>
      <div className='flex my-5 ms-8'>
        <div className='ms-auto me-3'>
          {tagNames && tagNames.map((tag, index) => (
             <button key={index} type='button' className={`mx-2 rounded-xl px-2 py-1 border border-gray-500 hover:border-white bg-${tagFilter === tag ? 'black border-white' : 'transparent'}`} onClick={() => handleTagFilter(tag)}>{tag}</button>
          ))}
          {tagFilter && 
          (<button type='button' className='bg-red-500 mx-2 px-2 py-1 rounded' onClick={() => handleTagFilter('clear')}>Clear All Filters</button>)
          }
          <button type='button' className='bg-blue-500 mx-2 px-2 py-1 rounded'>Create Note</button>
          <input type='text' className='rounded py-1 px-1' placeholder='Search' />
        </div>
      </div>
      <NoteForm />
      <div className='grid grid-cols-4 gap-4'>
        {notes && notes.map((record) =>
          (<NoteCard key={record._id} note={record} />)
        )}
      </div>
    </div>

  )
}

export default Home
