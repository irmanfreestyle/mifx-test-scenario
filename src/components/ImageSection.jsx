import { useContext, useEffect, useState } from 'react'
import { appContext } from '../context/appContext'

export default () => {
  const [{ activePos, reviews }, setContext] = useContext(appContext)
  const image = reviews[activePos].image

  useEffect(() => {
    document.querySelector('.image').classList.add('fade-in')
  })

  return (
    <div className="col image-section">
      <img
        key={image}
        src={`/images/${image}`}
        alt={ image }
        className='image'
      />
    </div>
  )
}