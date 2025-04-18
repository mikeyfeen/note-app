import React from 'react'

const Notelist = () => {
  return (
    <>
        <div className="w-1/3 gap-4 flex self-center">
        <NotelistItem/>
        <NotelistItem/>
        <NotelistItem/>
        </div>
    </>
  )
}

const NotelistItem = () => {
    return (
        <div className="flex flex-col gap-2 rounded-lg border p-4 shadow-sm ease-in-out w-2xl">
        <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Note Title</h3>
            <button className="text-red-500 hover:text-red-700">Delete</button>
        </div>
        <p className="text-gray-600">This is a short description of the note.</p>
        <div className="flex justify-between text-sm text-gray-500">
            <span>Created: 2023-10-01</span>
            <span>Last Updated: 2023-10-02</span>
        </div>
        <div className="flex justify-end">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 ease-in-out">
                Edit
            </button>
        </div>
    </div>
    )
    }

export default Notelist