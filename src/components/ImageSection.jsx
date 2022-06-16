import { useContext, useEffect, useState } from 'react'
import { appContext } from '../context/appContext'

export default () => {
  const [opacity, setOpacity] = useState(0)
  const [{ activePos, reviews }, setContext] = useContext(appContext)
  const image = reviews[activePos].image

  useEffect(() => {
    setOpacity(0)
    setTimeout(() => {
      setOpacity(1)
    }, 200)
  }, [image])

  return (
    <div className="col image-section">
      <img
        key={image}
        src={`/images/${image}`}
        alt={ image }
        className='image'
        style={{
          opacity,
          transition: '0.7s'
        }}
      />
    </div>
  )
}