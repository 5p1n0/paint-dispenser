import * as React from 'react'
import { Link } from 'gatsby'

const Header = () => {
  return (
    <header className="bg-[#CAC5B9]">
      <div className="grid grid-cols-header items-baseline my-0 mx-4 max-w-[640px] py-4 px-0">
        <h1 className="m-0 text-2xl md:text-3xl my-1.5">
          <Link to="/" className="text-white hover:bg-white active:bg-white focus:bg-white hover:text-[#CAC5B9] active:text-[#CAC5B9] focus:text-[#CAC5B9] font-bold mt-0 p-1">
            Paint Dispenser
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header