import React from 'react'
import SideBar from '../components/SideBar'
import NotesDashboard from './NotesDashboard'

function DasboardContainer() {
  return (
    <>
      <div className='w-full'>
        <div className='grid grid-cols-12'>
          <div className='col-span-3 sticky top-0 h-screen overflow-y-auto'>
            <SideBar />
          </div>
          <div className='col-span-9 py-5 px-8'>
            <NotesDashboard />
          </div>
        </div>
      </div>
    </>
  )
}

export default DasboardContainer