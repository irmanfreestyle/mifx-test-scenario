import { appContext } from "../context/appContext"
import { useContext } from "react"

export default () => {
  const [{ activePos, reviews, slideCard }, setContext] = useContext(appContext)
  const setActivePos = pos => {
    if (activePos !== pos) {
      document.querySelector('.image').classList.add('fade-out')
    }

    setTimeout(() => {
      setContext(item => ({ ...item, activePos: pos }))
      slideCard(pos)
    }, 100)
  }

  return (
    <div className="nav-dots d-flex justify-content-center">
      {
        reviews.map(({ author }, index) => (
          <div
            className={`dot ${index === activePos && 'active'}`}
            key={author}
            onClick={() => setActivePos(index)}
          ></div>
        ))
      }
    </div>
  )
}