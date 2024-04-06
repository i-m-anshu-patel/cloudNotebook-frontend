import React from 'react'
import NoteCard from './NoteCard'

const Home = () => {
  return (
    <div className='mt-5'>
      <div className='flex my-5 ms-8'>
        <p>All Notes</p>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <div><NoteCard /></div>
        <div><NoteCard /></div>
        <div><NoteCard /></div>
        <div><NoteCard /></div>
      </div>
    </div>

  )
}

export default Home
