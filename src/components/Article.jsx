import React from 'react'

const defaultDate = "January 1, 1970";
export default function Article({title, date, preview}) {
    
  return (
    <div>
     <article>
    <h3>{title}</h3>
    <small>{date || defaultDate}</small>
    <p>{preview}</p>
 
    </article>
    </div>
  )
}
