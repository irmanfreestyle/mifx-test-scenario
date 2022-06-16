import NavDots from "./NavDots"
import { useContext } from "react"
import { appContext } from "../context/appContext"

export default () => {
  const [{ activePos, reviews, slideCard }, setContext] = useContext(appContext)

  const slide = (pos) => {
    const calculated = activePos + pos
    if ((calculated >= 0) && (calculated < reviews.length)) {
      setContext(item => ({ ...item, activePos: item.activePos + pos }))
      slideCard(calculated)
    }
  }

  const CardList = () => {
    return reviews.map(({ label, desc, author }) => (
      <div className="card" key={author}>
        <div className="card-title text-center my-3">{ label }</div>
        <div className="quote-mark text-center">&#8221;</div>
        <div className="quote-text text-center my-3">
          { desc }
        </div>
        <div className="quote-name text-center">- { author }</div>
      </div>
    ))
  }

  return (
    <div className="col quote-section d-flex align-items-center justify-content-center">
      <div className="reviews-wrapper">
        <div className="nav-prev d-flex align-items-center" onClick={() => slide(-1)}>&#x25C0;</div>
        <div className="nav-next d-flex align-items-center" onClick={() => slide(1)}>&#9654;</div>

        <h2 className="text-center">Reviews</h2>
        <div className="d-flex justify-content-center">
          <div className="line my-3" />
        </div>
        <div className="cards-wrapper">
          <CardList />
        </div>
        <NavDots/>
      </div>
    </div>
  )
}