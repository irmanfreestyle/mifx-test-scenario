import NavDots from "./NavDots"

export default () => {
  return (
    <div className="col quote-section d-flex align-items-center justify-content-center">
      <div className="card-wrapper">
        <h2 className="text-center">Reviews</h2>
        <div className="d-flex justify-content-center">
          <div className="line my-3" />
        </div>

        <div className="card">
          <div className="card-title text-center my-3">Best PRICE</div>
          <div className="quote-mark text-center">&#8221;</div>
          <div className="quote-text text-center my-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit consequatur voluptatibus, voluptas, excepturi sed, alias veritatis deserunt quo eveniet voluptatem et aut molestiae incidunt! Autem excepturi voluptate qui possimus.
          </div>
          <div className="quote-name text-center">- Peter Amar</div>
          <NavDots/>
        </div>
      </div>
    </div>
  )
}