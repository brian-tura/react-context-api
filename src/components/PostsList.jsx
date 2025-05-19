import React from 'react'
import PostCard from './PostCard'
import { useContext } from 'react'
import PostListContext from '../contexts/PostListContext'

const PostsList = () => {

    const { posts } = useContext(PostListContext);

    return (
        <div className='row'>
            {posts.map((post) => (
            <PostCard id={post.id} title={post.title} content={post.content} category={post.category} />
            ))}
        </div>

    )
}

export default PostsList