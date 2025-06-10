/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from 'react'
import { SquarePlay, Users } from 'lucide-react'
interface VideoDescriptionProps {
    title: string;
    views: string;
    uploadTime: string;
    description: string;
    author: string;
    authorAvatar?: string;
    subscriber?: string;
}

const VideoDescription = ({ views, uploadTime, description, author, authorAvatar,subscriber,title }: VideoDescriptionProps) => {
    const [showFullContent, setShowFullContent] = useState(false)


    const handleContainerClick = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement
        if (!target.closest('button') && !target.closest('a')) {
            if (!showFullContent) {
                setShowFullContent(true)
            }
        }
    }

    return (
        <div 
            className={`flex flex-col ${!showFullContent && 'cursor-pointer'} `} 
            onClick={handleContainerClick}
        >
            <div className="flex flex-wrap gap-x-2 text-sm">
                <span className="font-medium">{views} views</span>
                <span className="font-medium">{uploadTime}</span>
                <div className="flex gap-1">
                {['#공부할때', '#애니ost', '#jpop'].map((tag) => (
                    <span
                    key={tag}
                    className="text-blue-600 hover:text-blue-800 cursor-pointer text-sm"
                    >
                    {tag}
                    </span>
                ))}
                </div>
            </div>

            <div className="text-lg break-words mt-1">
                {title}
            </div>

            <div className="mt-1 text-sm leading-relaxed relative">
                {showFullContent ? (
                    description
                ) : (
                    <>
                        {description.slice(0, 100)}
                        <button
                            onClick={(e) => {
                            e.stopPropagation()
                            setShowFullContent(true)
                            }}
                            className="text-sm text-black font-medium ml-1 w-fit"
                        >
                            ... more
                        </button>
                    </>
                )}
            </div>

            {showFullContent && (
                <>
                    <div className="flex flex-col gap-2 mt-2">
                        <div className="flex items-center gap-2">
                         <div className='w-8 h-8 rounded-full'>
                            <img 
                                src={authorAvatar}
                                alt={author}
                                className='w-full h-full object-cover rounded-full'
                            />
                        </div>
                        <div>
                            <p className="font-medium text-sm">{author}</p>
                            <p className="text-gray-600 text-xs">{subscriber} subscribers</p>
                        </div>
                        </div>

                        <div className="flex gap-1">
                        <button 
                        className="flex items-center px-2 gap-1 bg-gray-100 hover:bg-gray-200 border border-gray-300 font-medium py-1 rounded-full text-xs"
                        onClick={(e) => e.stopPropagation()}
                        >
                            <SquarePlay size={14} /> Videos
                        </button>
                        <button 
                        className="flex items-center gap-1 px-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 font-medium py-1 rounded-full text-xs"
                        onClick={(e) => e.stopPropagation()}
                        >
                            <Users size={14} /> About
                        </button>
                        </div>
                    </div>
                    <button
                        onClick={(e) => {
                            e.stopPropagation()
                            setShowFullContent(false)
                        }}
                        className="text-sm text-black font-medium mt-1 w-fit"
                    >
                        Show less
                    </button>
                </>
            )}
        </div>
    )
}

export default VideoDescription