import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NotesCount from './NotesCount';
import { filterNotes } from '../redux/slices/noteSlice';

function SideBar() {
  const dispatch = useDispatch();
  const { allNotes, backupNotes, activeFilter } = useSelector((state) => state.noteReducer)

  const allNotesCount = backupNotes?.length;

  const tagCountSet = backupNotes.reduce((acc, note) => {
    acc[note.tag] = (acc[note.tag] || 0) + 1;
    return acc;
  }, {});


  return (
    <>
      <div className='border-r border-gray-300 bg-white h-full sticky'>
        <div className={`flex items-center justify-between border-b py-2 px-3 border-gray-300 cursor-pointer 
          ${activeFilter.toLowerCase() == "all" ? "bg-green-700/75" : "hover:bg-gray-50"}`} onClick={() => dispatch(filterNotes('All'))}>
          <div className="rounded-full bg-gray-200" style={{ width: '18px', height: '18px' }}></div>
          <div className="flex-1 pl-4">
            <p className="font-semibold text-md">All</p>
          </div>
          <div className="rounded-md bg-gray-200 text-gray-900 px-4 py-1 text-xs font-bold">{allNotesCount}</div>
        </div>
        {
          Object.entries(tagCountSet).map(([tag, count]) => (
            <NotesCount key={tag} tagName={tag} notesCount={count} activeTag={activeFilter}/>
          ))
        }

      </div>
    </>
  )
}

export default SideBar