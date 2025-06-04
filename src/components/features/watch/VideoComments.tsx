'use client'
import React, { useRef, useState } from 'react';
import { AlignLeft, ChevronDown, ThumbsDown, ThumbsUp } from 'lucide-react';
import { Smile } from 'lucide-react';
interface Comment {
  id: string;
  author: string;
  avatar: string;
  text: string;
  timestamp: string;
  likes: number;
  replies?: Comment[];
}

const VideoComments = () => {
    const [comments, setComments] = useState<Comment[]>([
        {
            id: '1',
            author: 'Tech Enthusiast',
            avatar: '',
            text: 'This video was really helpful! Thanks for the clear explanation.',
            timestamp: '2 days ago',
            likes: 24,
            replies: [
                {
                    id: '1-1',
                    author: 'Video Creator',
                    avatar: '',
                    text: 'Glad you found it useful!',
                    timestamp: '1 day ago',
                    likes: 5,
                },
            ],
        },
        {
            id: '2',
            author: 'React Developer',
            avatar: '',
            text: 'Could you make a follow-up about advanced hooks?',
            timestamp: '1 day ago',
            likes: 12,
        },
    ]);

    const [newComment, setNewComment] = useState<string>('');
    const [showCommentActions, setShowCommentActions] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const comment: Comment = {
            id: Date.now().toString(),
            author: 'Current User',
            avatar: '',
            text: newComment,
            timestamp: 'Just now',
            likes: 0,
        };

        setComments([comment, ...comments]);
        setNewComment('');
        setShowCommentActions(false);
    };

    const handleCancelComment = () => {
        setNewComment('');
        setShowCommentActions(false);
    };

    const handleInputClick = () => {
        setShowCommentActions(true);
    };

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-start gap-x-4 items-center'>
                <span className='font-medium'>{comments.length} Comments</span>
                <div className='flex items-center gap-x-2 text-sm text-gray-600 hover:text-black cursor-pointer'>
                    <AlignLeft size={16} />
                    <span className='font-medium'>Sort by</span>
                    <ChevronDown size={16} />
                </div>
            </div>

            <form onSubmit={handleAddComment} className='flex flex-col gap-2'>
                <div className='flex gap-x-2 items-center'>
                    <div className='h-9 w-9 bg-gray-300 rounded-full flex-shrink-0' />
                    <div className='w-full'>
                        <input
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            onClick={handleInputClick}
                            placeholder='Add a comment...'
                            ref={inputRef}
                            className='w-full border-b border-gray-300 pb-1 focus:outline-none focus:border-black'
                        />
                    </div>
                </div>

                {showCommentActions && (
                    <div className='flex justify-between gap-x-2 ml-11 items-center'>
                        <div>
                            <Smile size={20} className='cursor-pointer'/>
                        </div>
                        <div className='flex gap-x-2 ml-11'>
                            <button
                                type='button'
                                onClick={handleCancelComment}
                                className='px-3 py-1 rounded-full text-sm text-black hover:bg-gray-100 flex items-center'
                            >
                                Cancel
                            </button>
                            <button
                                type='submit'
                                className={`px-3 py-2 rounded-full text-sm ${newComment.trim() ? 'bg-blue-700 text-white font-medium' : 'bg-blue-200 text-white cursor-not-allowed'}`}
                                disabled={!newComment.trim()}
                            >
                                Comment
                            </button>
                        </div>
                    </div>
                )}
            </form>

            <div className='flex flex-col gap-6 mt-4'>
                {comments.map((comment) => (
                    <div key={comment.id} className='flex gap-x-3'>
                        <div className='h-9 w-9 bg-gray-300 rounded-full flex-shrink-0' />
                        <div className='flex-1'>
                            <div className='flex items-center gap-x-2'>
                                <span className='font-medium text-sm'>{comment.author}</span>
                                <span className='text-gray-500 text-xs'>{comment.timestamp}</span>
                            </div>
                            <p className='text-sm my-1'>{comment.text}</p>
                            <div className='flex items-center gap-x-4 text-xs'>
                                <div className='flex items-center gap-x-2'>
                                    <button className='flex items-center gap-1 '>
                                        <ThumbsUp size={32} className='p-2 hover:bg-gray-200 hover:rounded-full'/> 351
                                    </button>
                                    <button className=''>
                                        <ThumbsDown size={32} className='p-2 hover:bg-gray-200 hover:rounded-full'/>
                                    </button>
                                </div>
                                <button className='hover:bg-gray-200 hover:rounded-full p-2'>Reply</button>
                            </div>

                            {comment.replies && comment.replies.length > 0 && (
                                <div className='mt-3'>
                                    {comment.replies.map((reply) => (
                                        <div key={reply.id} className='flex gap-x-3 py-2'>
                                            <div className='h-7 w-7 bg-gray-300 rounded-full flex-shrink-0' />
                                            <div className='flex-1'>
                                                <div className='flex items-center gap-x-2'>
                                                    <span className='font-medium text-sm'>{reply.author}</span>
                                                    <span className='text-gray-500 text-xs'>{reply.timestamp}</span>
                                                </div>
                                                <p className='text-sm my-1'>{reply.text}</p>
                                                <div className='flex items-center gap-x-2'>
                                                    <button className='flex items-center gap-1 '>
                                                        <ThumbsUp size={32} className='p-2 hover:bg-gray-200 hover:rounded-full'/> 351
                                                    </button>
                                                    <button className=''>
                                                        <ThumbsDown size={32} className='p-2 hover:bg-gray-200 hover:rounded-full'/>
                                                    </button>
                                                    <button className='hover:text-gray-800'>Reply</button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoComments;





















