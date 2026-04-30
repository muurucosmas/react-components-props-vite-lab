import React from 'react'

const defaultImage = "https://via.placeholder.com/215";

export default function About({image,about}) {


  return (
    <aside>
      <img src={image || defaultImage} alt="blog logo" />
      <p>{about}</p>
    </aside>
  )
}
