import React from 'react'

const NoteCard = () => {
  return (
    <div class="max-w-sm mx-auto">
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
            <img class="w-full h-32 object-cover" src="https://via.placeholder.com/600x200" alt="Card"/>
            <div class="p-4">
                <h2 class="font-bold text-xl mb-2 text-black">Card Title</h2>
                <p class="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                <div class="mt-4">
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default NoteCard
