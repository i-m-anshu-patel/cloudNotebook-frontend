import React from 'react'

const NoteForm = () => {
  return (
    <div className='max-w-sm'>
      <form>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' name='title' className='border w-full bg-black bg-opacity-60 p-1 my-2' />
        
      </form>
    </div>
  )
}

export default NoteForm
