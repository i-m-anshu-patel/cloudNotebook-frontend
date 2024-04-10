import React from 'react'

const NoteForm = () => {
  return (
    <div className='max-w-sm bg-white text-black p-5 mx-auto z-20'>
      <span class="close">&times;</span>
      <form>
        <div className='flex items-center'>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' name='title' className='border-2 w-full  p-1 my-2 mx-2' />
        </div>
        <div className='flex items-center'>
          <label htmlFor='title'>Description</label>
          <input type='text' id='title' name='title' className='border-2 w-full  p-1 my-2' />
        </div>
        <div className='flex items-center'>
          <label for="tags">Select Tag:</label>
          <select name="tags" id="tags">
            <option value="General">General</option>
            <option value="Special">Special</option>
            <option value="Purple">Purple</option>
          </select>
        </div>
        <div className='flex items-center'>
          <label htmlFor='title'>Description</label>
          <input type='text' id='title' name='title' className='border-2 w-full  p-1 my-2' />
        </div>

      </form>
    </div>
  )
}

export default NoteForm
