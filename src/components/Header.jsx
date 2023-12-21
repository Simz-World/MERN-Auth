import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-500'>
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3"><Link to={'/'}>
      <h1 className='font-bold'>Auth App</h1>
      </Link>
      <ul className='flex gap-5'>
        <Link to={'/'}>
        <li>home</li>
        </Link>

        <Link to={'/About'}>
        <li>About</li>
        </Link>

        <Link to={'/Sign-In'}>
        <li>Sighn In</li>
        </Link>
      </ul>
    </div>
    </div>
  )
}
