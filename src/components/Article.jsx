import React from 'react'

export default function Article({post}) {
  return (
    <div>
     <article key = {post.id}>
    <h3>{post.title}</h3>
    <small>{post.date}</small>
    <p>{post.preview}</p>
    <p>{post.minutes} </p>
    </article>
    </div>
  )
}
