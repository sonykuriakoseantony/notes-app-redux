import React from 'react'

function NotesCount({tagName, notesCount}) {

  const tagClasses = {
    Work: { bg: "bg-orange-200", text: "text-orange-900" },
    Wishlist: { bg: "bg-pink-200", text: "text-pink-900" },
    Personal: { bg: "bg-purple-200", text: "text-purple-900" },
    Todo: { bg: "bg-green-200", text: "text-green-900" },
    Assignment: { bg: "bg-blue-200", text: "text-blue-900" },
    Study: { bg: "bg-yellow-200", text: "text-yellow-900" },
    default: { bg: "bg-gray-200", text: "text-gray-900" },
  };

  const { bg, text } = tagClasses[tagName] || tagClasses.default;

  return (
    <>
      <div className='flex items-center justify-between border-b py-2 px-3 border-gray-300 cursor-pointer hover:bg-gray-50'>
        {/* Color Dot */}
        <div className={`rounded-full ${bg}`} style={{ width: '18px', height: '18px' }}></div>
        {/* Tag name */}
        <div className='flex-1 pl-4'>
          <p className='font-semibold text-md'>{tagName}</p>
        </div>
        {/* Notes count Bubble */}
        <div className={`rounded-md ${bg} ${text} px-4 py-1 text-xs font-bold`} >{notesCount}</div>
      </div>
    </>
  )
}

export default NotesCount