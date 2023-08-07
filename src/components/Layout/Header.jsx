'use client'

import React from 'react'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
export default function Header(props) {
  const { data } = useSession()

  return (
    <div className='navbar  border-b-2 absolute top-0 left-0 right-0 fix bg-base-100'>
      <div className='flex-1  '>
        <label {...props}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M4 6h16M4 12h8m-8 6h16'
            />
          </svg>
        </label>
        <a className='btn btn-ghost normal-case text-xl'>Template</a>
      </div>

      <div className='flex-none'>
        <details className='dropdown'>
          <summary className='m-1 btn btn-ghost'>
            {data?.user?.name}
            <div className='w-10 rounded-full'>
              <img
                alt=''
                className='rounded-full'
                src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
              />
            </div>
          </summary>
          <ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
            <li>
              <a onClick={() => signOut()}>Logout</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  )
}
