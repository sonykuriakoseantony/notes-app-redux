import React, { useState } from 'react'
import { FaPlus, FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { searchNote } from '../redux/slices/noteSlice';
import NotesForm from './NotesForm';
import { LuNotebookTabs } from 'react-icons/lu';

function Header() {
 const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
 

  return (
    <div className="flex justify-between p-3 bg-gray-100 border border-gray-200">
      <div className="flex items-center">
        <LuNotebookTabs size={30} className='text-blue-900'/> <h1 className='text-blue-900 text-xl font-bold'>Notes App</h1>
      </div>
      <div className="flex items-center w-[50%]">
        <input placeholder="Search notes.." className=" border border-gray-200 py-2 px-3 w-full rounded-full bg-white placeholder-gray-500" type="text" onChange={(e) => dispatch(searchNote(e.target.value.toLowerCase()))} />
        <button className="bg-white" style={{marginLeft : '-30px', width : '20px', height : '20px'}}>
          <FaSearch size={14}/>
        </button>
      </div>
      <div>
        <button
          onClick={() => { setOpen(true) }}
          className="flex gap-2 items-center bg-blue-900 text-white py-2 px-4 rounded-md shadow-lg cursor-pointer" >
          Add Note <FaPlus />
        </button>

        <NotesForm open={open} handleClose={() => setOpen(false)} note={null} />
      </div>
    </div>
  )
}

export default Header