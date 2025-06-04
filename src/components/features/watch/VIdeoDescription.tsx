'use client'
import React, { useState } from 'react'
import { SquarePlay, Users } from 'lucide-react'

const VideoDescription = () => {
    const [showFullContent, setShowFullContent] = useState(false)
    
    const descriptionText = `This 2-hour playlist features relaxing Japanese anime OST and J-pop
    piano covers perfect for studying. Includes music from Studio Ghibli
    films, popular anime series, and beautiful J-pop arrangements. Great
    background music for focus and concentration. You can enjoy calm piano
    instrumentals while doing homework, studying for exams, or reading. It's
    designed to help you focus without distraction and improve productivity.
    Thanks for listening!`

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
                <span className="font-medium">32,550 views</span>
                <span className="font-medium">Jun 20, 2024</span>
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
                【2Hour】 공부할 때 듣는 일본 애니ost, J-pop 피아노 모음 | 플레이리스트 ⛱️
            </div>

            <div className="mt-1 text-sm leading-relaxed relative">
                {showFullContent ? (
                    descriptionText
                ) : (
                    <>
                        {descriptionText.slice(0, 100)}
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
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0" />
                        <div>
                            <p className="font-medium text-sm">상어오브뮤직 / 𝙎𝙖𝙣𝙜𝙚𝙤 𝙊𝙛 �𝙪𝙨𝙞𝙘</p>
                            <p className="text-gray-600 text-xs">97.9k subscribers</p>
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