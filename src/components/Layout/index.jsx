import React from 'react'
import Header from './Header'
export default function Layout({ children }) {
  return (
    <div className='drawer rounded-r-lg lg:drawer-open'>
      <input id='drawer-open' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col items-center justify-center relative'>
        {/* Page content here */}
        <Header
          htmlFor='drawer-open'
          className='btn btn-square btn-ghost drawer-button lg:hidden'
        />
        {/* Page content here */}
        <div className='container h-full w-full'>{children}</div>
      </div>
      <div className='drawer-side'>
        <label htmlFor='drawer-open' className='drawer-overlay'></label>
        <ul className='menu p-4 pt-12 w-80 h-full bg-base-200 text-base-content'>
          {/* Sidebar content here */}
          <li>
            <a>Menu1</a>
          </li>
          <li>
            <a>Menu1</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
