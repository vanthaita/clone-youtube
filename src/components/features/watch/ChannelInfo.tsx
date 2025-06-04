import React from 'react'
import { ThumbsDown, ThumbsUp, CornerUpRight, ArrowDownToLine, Ellipsis } from 'lucide-react';

const ChannelInfo = () => {
  return (
    <div className='flex md:flex-row flex-col justify-between md:items-center gap-y-1'>
      <div className='flex items-center gap-3'>
        <div className='w-8 h-8 rounded-full bg-gray-300' />
        <div>
          <p className='font-medium text-sm'>Sangeo Of Music</p>
          <p className='text-gray-700 text-xs'>97.9k subscribers</p>
        </div>
        <button className='bg-black text-white rounded-full px-4 py-1.5 text-sm font-medium'>
          Subscribe
        </button>
      </div>

      <div className='flex gap-1.5'>
        <div className='flex'>
          <button className='flex items-center gap-1 px-3 bg-gray-100 hover:bg-gray-300 py-1.5 rounded-l-full text-sm'>
            <ThumbsUp size={14} /> 351
          </button>
          <div className='h-7 border-r border-gray-300' />
          <button className='px-3 bg-gray-100 hover:bg-gray-300 py-1.5 rounded-r-full'>
            <ThumbsDown size={14} />
          </button>
        </div>

        <button className='flex items-center gap-1 px-3 bg-gray-100 hover:bg-gray-300 text-sm font-medium py-1.5 rounded-full'>
          <CornerUpRight size={14} /> Share
        </button>
        
        <button className='flex items-center gap-1 px-3 bg-gray-100 hover:bg-gray-300 text-sm font-medium py-1.5 rounded-full'>
          <ArrowDownToLine size={14} /> Download
        </button>

        <button className='p-2 bg-gray-100 hover:bg-gray-300 rounded-full'>
          <Ellipsis size={14} />
        </button>
      </div>
    </div>
  )
}

export default ChannelInfo