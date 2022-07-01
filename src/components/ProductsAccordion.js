import * as React from "react"
import { useState, useEffect } from "react"
import { getAccordionData } from '../services/paintsService'
import useMediaQuery from '../hooks/useMediaQuery'
import { Accordion, Carousel } from 'flowbite-react'

const ProductsAccordion = ({ updateParam, actualParam }) => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getAccordionData('product=*').then(
      (data) => setProducts(data.facets.product)
    )
  }, [])

  const handleClick = (code) => actualParam === code ? updateParam('%20') : updateParam(code)
  
  const slides = []
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const offset = isDesktop? 2 : 1

  for (
    let i = 0, start = 0, end = offset, keyIndex = 0; 
    i < Math.ceil(products.length / offset); 
    i++, start = end, (end + offset) >= products.length? end = products.length : end += offset
  ) 
  {
    slides.push(
      <div key={i} className="flex justify-center lg:justify-evenly items-center"> 
        {
          products.slice(start, end).map((p, i) => {
            keyIndex++
            return (
              <div 
                className={actualParam && actualParam === p.code ? 'ring-blue-300 ring-4 border-blue-500 border bg-white card' : 'opacity-75 bg-slate-50 card'}
                onClick={() => handleClick(p.code)}
                onKeyDown={(e) => e.key === 'Enter'? handleClick(p.code) : null}
                role="button"
                aria-label="Accordion Product Card"
                tabIndex={0}
                key={keyIndex}
              > 
                <img src={p.image} alt={p.name} />
                <p className="text-center text-sm lg:text-base font-semibold">{p.name}</p>
              </div>
            )
          })
        }
      </div>
    )
  }

  return (
    <div className="col-start-1 row-start-2 mt-4">
      <Accordion alwaysOpen={true}>
        <Accordion.Panel>
          <Accordion.Title>
            Products
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

export default ProductsAccordion