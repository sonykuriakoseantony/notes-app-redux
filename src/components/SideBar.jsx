import React from 'react'
import { useSelector } from 'react-redux'
import NotesCount from './NotesCount';

function SideBar() {
  const { allNotes } = useSelector((state) => state.noteReducer)

  const tagCountSet = allNotes.reduce((acc, note) => {
    acc[note.tag] = (acc[note.tag] || 0) + 1;
    return acc;
  }, {});


  return (
    <>
      <div className='border-r border-gray-300 bg-white h-full sticky'>
        {
          Object.entries(tagCountSet).map(([tag, count]) =>(
            <NotesCount key={tag} tagName={tag} notesCount={count} />
          ))
        }
        
      </div>
    </>
  )
}

export default SideBar