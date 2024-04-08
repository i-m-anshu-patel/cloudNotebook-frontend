import React from 'react'

const NoteCard = ({note}) => {
  return (
    <div className="max-w-md mx-auto">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4">
                <h2 className="font-bold text-xl mb-2 text-black">{note.title}</h2>
                <p className="text-gray-700">{note.description}</p>
                <button type='button'className='mt-3 mx-1 px-1 py-1 rounded-xl text-gray-700 border border-gray-500'>#{note.tag}</button>
                <div className="mt-4">
                   <button type='button' className='bg-yellow-500 rounded-md px-2 py-1 mx-1'>Edit</button>
                   <button type='button' className='bg-red-500 rounded-md px-2 py-1 mx-1'>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NoteCard
