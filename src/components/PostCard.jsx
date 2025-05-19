import React from 'react'

const PostCard = ({ id, title, content, category }) => {
    return (
        <div className='card col-5' key={id}>
            <h3>{title}</h3>
            <p>{content}</p>
            <p>{category}</p>
        </div>
    )
}

export default PostCard