import { useState } from 'react'
import { ImageSection, QuoteSection } from './components'
import { appContext } from './context/appContext'

function App() {
  const [context, setContext] = useState({
    activePos: 0,
    reviews: [
      {
        label: 'Best PRICE',
        desc: 'Number 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit consequatur voluptatibus, voluptas, excepturi sed, alias veritatis deserunt quo eveniet voluptatem et aut molestiae incidunt! Autem excepturi voluptate qui possimus.',
        author: 'Peter Amar',
        image: 'sample1.jpeg'
      },
      {
        label: 'Best TASTE',
        desc: 'Number 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit consequatur voluptatibus, voluptas, excepturi sed, alias veritatis deserunt quo eveniet voluptatem et aut molestiae incidunt! Autem excepturi voluptate qui possimus. admada adlamdlad lamdlamd ladaada adadada efefefefef efefefe fefefef efefefefenniini nininini in in ininininininininini',
        author: 'Peter Parker',
        image: 'sample2.jpeg'
      },
      {
        label: 'Best PRICE',
        desc: 'Number 3 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque impedit consequatur voluptatibus, voluptas, excepturi sed, alias veritatis deserunt quo eveniet voluptatem et aut molestiae incidunt! Autem excepturi voluptate qui possimus.',
        author: 'Jhony',
        image: 'sample3.jpeg'
      }
    ],
    slideCard: pos => {
      document.querySelector('.cards-wrapper').scrollLeft = document.querySelector('.card').clientWidth * pos
    }
  })

  return (
    <appContext.Provider value={[context, setContext]}>
      <div className="container d-flex align-items-center justify-content-center">
        <ImageSection />
        <QuoteSection />
      </div>
    </appContext.Provider>
  )
}

export default App
