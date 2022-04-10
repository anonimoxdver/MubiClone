import React from 'react'

export const Linkjsx = ({name}) => {
  return (
    <div className='link_main' >     
      <a href="https://mubi.com/showing" className='a_link'><span>{name}</span>  </a>
    </div>
  )
}
