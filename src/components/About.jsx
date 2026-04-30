import React from 'react'

export default function About({data}) {
  return (
    <aside>
      <img src={data.image} alt="blo logo" />
      <p>{data.about}</p>
    </aside>
  )
}
