import * as React from "react"
import { useState, useEffect } from "react"
import { getAccordionData } from '../services/paintsService'
import useMediaQuery from '../hooks/useMediaQuery'
import { Accordion, Carousel } from 'flowbite-react'

const ColorCardsAccordion = ({ updateParam, actualParam }) => {

  const [colorCards, setColorCards] = useState([])

  useEffect(() => {
    getAccordionData('color_card=*').then(
      (data) => setColorCards(data.facets.color_card)
    )
  }, [])

  const handleClick = (code) => {
    if (actualParam === code) {
      updateParam('%20')
    }
    else if (actualParam.replace('%26', '&') === code) {
      updateParam('%20')
    }
    else {
      let newCode = code.replace('&','%26')
      updateParam(newCode)
    }  
  }

  const slides = []
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const offset = isDesktop ? 2 : 1

  for (
    let i = 0, start = 0, end = offset, keyIndex = 0;
    i < Math.ceil(colorCards.length / offset);
    i++, start = end, (end + offset) >= colorCards.length ? end = colorCards.length : end += offset
  ) {
    slides.push(
      <div key={i} className="h-80 lg:h-96 flex justify-center lg:justify-evenly items-center">
        {
          colorCards.slice(start, end).map((cc, i) => {
            keyIndex++
            return (
              <div
                className={actualParam && actualParam.replace('%26', '&') === cc.code ? 'ring-blue-300 ring-4 border-blue-500 border bg-white card' : 'opacity-75 bg-slate-50 card'}
                onClick={() => handleClick(cc.code)}
                onKeyDown={(e) => e.key === 'Enter' ? handleClick(cc.code) : null}
                role="button"
                aria-label="Accordion Color Card"
                tabIndex={0}
                key={keyIndex}
              >
                <img src={cc.image} alt={cc.name} />
                <p className="text-center text-sm lg:text-base font-semibold">{cc.name}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div className="col-start-1 md:col-start-2 row-start-3 md:row-start-2 mt-4">
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>
            Color Cards
          </Accordion.Title>
          <Accordion.Content>
            <div className="h-80 lg:h-96 bg-[#CAC5B9]">
              <Carousel slide={false}>
                {slides}
              </Carousel>
            </div>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}

export default ColorCardsAccordion