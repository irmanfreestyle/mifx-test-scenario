import { appContext } from "../context/appContext"
import { useContext } from "react"

export default () => {
  const [{ activePos, reviews, slideCard }, setContext] = useContext(appContext)
  const setActivePos = pos => {
    setContext(item => ({ ...item, activePos: pos }))
    slideCard(pos)
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