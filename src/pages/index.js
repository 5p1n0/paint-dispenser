import * as React from 'react'
import { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { getColors } from '../services/paintsService'
import ProductsAccordion from '../components/ProductsAccordion'
import ColorCardsAccordion from '../components/ColorCardsAccordion'
import ColorsField from '../components/ColorsField'
import SearchBar from '../components/SearchBar'

const IndexPage = () => {

  const [productParam, setProductParam] = useState('%20')
  const [colorCardParam, setColorCardParam] = useState('%20')
  const [colorQuery, setColorQuery] = useState('%20')
  const [colors, setColors] = useState([])
  const [selectedColor, setSelectedColor] = useState({})
  const [message, setMessage] = useState('Loading')

  const setters = {
    product: setProductParam,
    card: setColorCardParam,
    query: setColorQuery,
    colors: setColors,
    selected: setSelectedColor,
    message: setMessage
  }

  const states = {
    colorsData: colors,
    message: message,
    actualParam: selectedColor,
    productParam: productParam,
    colorCardParam: colorCardParam,
    colorQueryParam: colorQuery
  }

  useEffect( () => {
    setMessage('Loading...')    
    getColors(productParam, colorCardParam, colorQuery)
      .then((response) => {
        if (response.results.length === 0) setMessage('Not Found')
        setColors(response.results)
      })
    
  }, [productParam, colorCardParam, colorQuery, selectedColor])

  return (
    <Layout>
      <SearchBar updateColorQuery={setColorQuery} actualQuery={colorQuery} />
      <ProductsAccordion updateParam={setProductParam} actualParam={productParam} />
      <ColorCardsAccordion updateParam={setColorCardParam} actualParam={colorCardParam} />
      <ColorsField stateParams={states} updateParams={setters} />
    </Layout>
  )

}

export default IndexPage