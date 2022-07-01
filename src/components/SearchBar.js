import * as React from 'react'
import { useMemo, useEffect } from 'react'
import debounce from 'lodash.debounce'

const SearchBar = ({updateColorQuery, actualQuery}) => {

  useEffect(() => {
    return () => debouncedChangeHandler.cancel()
  })

  const changeHandler = (e) => e.target.value === '' ? updateColorQuery('%20') : updateColorQuery(e.target.value)
  

  const debouncedChangeHandler = useMemo(() => debounce(changeHandler, 1000), [])
  
  return (
    <div className='row-start-1 col-span-full self-center mt-4'>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
      <label htmlFor="default-submit" className="mb-2 text-sm font-medium text-gray-900 sr-only">Submit</label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-[10%] md:left-[25%] items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input 
          type="search" 
          id="default-search" 
          className="block p-4 pl-10 w-[80%] md:w-[50%] mx-auto text-sm text-gray-900 bg-[#f3f4f6] rounded-lg border border-gray-300 focus:bg-white focus:ring-blue-500 focus:border-blue-500" 
          placeholder="Search Colors..."
          onChange={debouncedChangeHandler} 
        />
        <button 
          type="button" 
          id="default-submit" 
          className="text-white absolute right-[15%] md:right-[26%] bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          onClick={() => {
            actualQuery === actualQuery.toLowerCase() ?
            updateColorQuery(actualQuery.toUpperCase())
            :
            updateColorQuery(actualQuery.toLowerCase())
          }}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar