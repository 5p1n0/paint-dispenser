import * as React from 'react'
import { useState } from 'react'
import { RefreshCcw, Check, XCircle } from 'react-feather'
import { Progress } from 'flowbite-react'
import { isEmpty } from 'lodash'
import { Spinner } from 'flowbite-react'

const ColorsField = ({stateParams: {colorsData, message, actualParam, productParam, colorCardParam, colorQueryParam}, updateParams: {product, card, query, colors, selected}}) => {

  const [toggle, setToggle] = useState(0)
  const [value, setValue] = useState(0)
  
  const handleClick = (selectedColor, rgbValue) => {
    actualParam?.name === selectedColor ? selected({}) : selected({name: selectedColor, rgb: rgbValue})
  }

  const handleToggle = () => {

    if (toggle) {
      
      setToggle(0)
      setValue(0)
    }
    else {
      
      setToggle(1)
      for (let i = 0; i <= 100; i+=0.05) {
        setTimeout(() => setValue(i), 1000)
      }
    }
    
  }

  return (
    <div className='relative row-start-4 md:row-start-3 self-start col-start-1 md:col-span-2 mt-4 h-[30.5rem] bg-[#CAC5B9] rounded-md'>
      <div className='h-[80%] p-5 flex flex-wrap gap-4 justify-center items-center overflow-y-auto'>
        {
          colorsData.length !== 0 ?            
            colorsData.map((c, i) => {
              return (
                <div 
                  className={actualParam?.name === c.name ? 'ring-blue-300 ring-4 border-blue-500 border bg-white color-card' : 'opacity-75 bg-slate-50 color-card'}
                  onClick={() => handleClick(c.name, c.rgb)}
                  onKeyDown={(e) => e.key === 'Enter' ? handleClick(c.name) : null}
                  role="button"
                  tabIndex={0}
                  key={i}
                >
                  <span style={{ backgroundColor: c.rgb }} className='w-9 sm:w-11 h-9 sm:h-11 rounded-md'></span>
                  <p className="text-sm">
                    <span className='font-semibold'>{c.name}</span> <br />
                    <span className='font-extralight text-gray-500'>{c.code}</span>
                  </p>
  
                </div>
              )
            })
          :
            <p className='text-lg font-semibold'>
              <Spinner color="info" aria-label='info spinner' /> <span className='ml-2'>{message}</span>
            </p>
        }
      </div>
      <div className='flex flex-wrap mt-5 place-content-center items-center gap-4 md:gap-6'>
        <button
          type="button"
          className="flex items-center gap-3 disabled:opacity-30 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 md:px-4 py-2 md:py-3"
          onClick={() => {
            product('%20')
            card('%20')
            query('%20')
            colors([])
            selected(null)
          }}
          disabled={!(Boolean(productParam.localeCompare('%20')) || Boolean(colorCardParam.localeCompare('%20')) || Boolean(colorQueryParam.localeCompare('%20')))}
        >
          Reset <RefreshCcw className='inline-block' size={16} />
        </button>
        <button
          type="button"
          className={toggle ? 'bg-red-700 hover:bg-red-800 focus:ring-red-300 serve-btn' : 'bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 serve-btn' }
          onClick={() => handleToggle()}
          disabled={isEmpty(actualParam)}
        >
          {toggle?'Close':'Serve'} <Check className={toggle? 'hidden' : 'inline-block'} size={18} /> <XCircle className={toggle? 'inline-block' : 'hidden'} size={18} /> 
        </button> 
        <div className={toggle? 'block w-56 order-last' : 'hidden'}>
          <Progress progress={value} />
        </div> 
      </div>
    </div>
  )
}

export default ColorsField