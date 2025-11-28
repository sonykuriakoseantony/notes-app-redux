import React, { useState } from 'react'
import { BiEditAlt } from 'react-icons/bi'
import { FaRegTrashAlt, FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux';
import NotesForm from './NotesForm';
import { removeNote } from '../redux/slices/noteSlice';

function NoteCard({ noteData }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const tagClasses = {
    Work: { bg: "bg-orange-200", text: "text-orange-900" },
    Wishlist: { bg: "bg-pink-200", text: "text-pink-900" },
    Personal: { bg: "bg-purple-200", text: "text-purple-900" },
    Todo: { bg: "bg-green-200", text: "text-green-900" },
    Assignment: { bg: "bg-blue-200", text: "text-blue-900" },
    Study: { bg: "bg-yellow-200", text: "text-yellow-900" },
    default: { bg: "bg-gray-200", text: "text-gray-900" },
  };

  const { bg, text } = tagClasses[noteData?.tag] || tagClasses.default;

  return (
    <>
      <div className='shadow-md rounded-2xl p-5 bg-white'>
        <div className='notes-header flex justify-between'>

          {noteData?.tag.length > 0 ? (
            <div className={`${bg} py-2 px-4 rounded-full flex items-center`}>
              <p className={`${text} text-xs font-semibold`}>
                {noteData?.tag}
              </p>
            </div>
          )
            : <p></p>}
          <div className='actions'>
            <div className='flex items-center justify-end gap-2'>
              <button className='cursor-pointer p-2 transition-all hover:rounded hover:bg-gray-100' onClick={() => { setOpen(true) }}><BiEditAlt className='text-blue-900' size={18} /></button>
              <button className='cursor-pointer p-2 transition-all hover:rounded hover:bg-gray-100' onClick={() => dispatch(removeNote(noteData.id))}><FaRegTrashAlt className='text-red-600' size={18} /></button>
            </div>
          </div>
        </div>
        <h3 className='text-lg font-bold my-3'>{noteData?.title}</h3>
        <p className='text-md'>{noteData?.description}</p>
        <div className='notes-footer flex justify-between items-center my-3 text-gray-500 text-sm font-semibold'>
          <p>{noteData?.date}</p>
          <p>{noteData?.time}</p>
        </div>
      </div>
      <NotesForm open={open} handleClose={() => setOpen(false)} note={noteData} />
    </>
  )
}

export default NoteCard