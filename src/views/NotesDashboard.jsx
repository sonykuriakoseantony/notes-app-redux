import React, { useEffect, useState } from 'react'
import NoteCard from '../components/NoteCard'
import { useSelector } from 'react-redux'
import { FaPlus } from 'react-icons/fa'
import { HiClipboardDocumentList } from 'react-icons/hi2'
import NotesForm from '../components/NotesForm'

function NotesDashboard() {
  const [open, setOpen] = useState(false);
  const { allNotes, backupNotes } = useSelector((state) => state.noteReducer)

  const recentFirsNotes = [...allNotes].reverse()

  return (
    <>
      {
        recentFirsNotes?.length > 0 ?
          <div className='grid grid-cols-2 gap-4'>
            {
              recentFirsNotes?.map(note => (
                <div key={note.id} className='col-span-1'>
                  <NoteCard noteData={note} />
                </div>
              ))
            }
          </div>
          :
          backupNotes.length > 0 ?

          <div className='flex flex-col justify-center items-center text-center' style={{ minHeight: '600px' }}>
            <h4 className='text-xl text-gray-500 font-semibold'>No matching notes found!</h4>
            <p className='my-3'>Search with a different keyword</p>
          </div>
          :
          <div className='flex flex-col justify-center items-center text-center' style={{ minHeight: '600px' }}>
            <HiClipboardDocumentList className="text-blue-900" size={100} />
            <h4 className='text-xl text-gray-500 font-semibold'>No notes yet!</h4>
            <p className='my-3'>Create your first note to get started organizing your thoughts</p>
            <button
              onClick={() => { setOpen(true) }}
              className="flex gap-2 items-center bg-blue-900 text-white py-2 px-4 rounded-md shadow-lg cursor-pointer" >
              Create your First Note <FaPlus />
            </button>

            <NotesForm open={open} handleClose={() => setOpen(false)} note={null} />
          </div>
      }
    </>
  )
}

export default NotesDashboard