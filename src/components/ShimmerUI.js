import React from 'react'
import NoteForm from './NoteForm'

const ShimmerUI = ({ notesModal, setNotesModal, setNotesUpdated }) => {
  return (
    <>
    {notesModal && (<NoteForm setNotesModal={setNotesModal} setNotesUpdated={setNotesUpdated} />)}
    <div className='max-w-md bg-white text-black mx-auto mt-5 p-5'>
      <p className='text-center font-semibold text-lg my-3'>No Notes Present</p>
      <button type='button' className='bg-blue-500 px-2 py-1 rounded text-white mx-auto block' onClick={() => setNotesModal(true)}>Create A New Note</button>
    </div>
    </>
   
  )
}

export default ShimmerUI
