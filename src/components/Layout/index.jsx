import React from 'react'
import Header from './Header'
import { usePathname, useRouter } from 'next/navigation'
export default function Layout({ children }) {
  const path = usePathname()
  const route = useRouter()
  const [select, setSelect] = React.useState(path || '/')
  const onChangePath = (path) => {
    setSelect(path)
    route.push(path)
  }
  const menu = [
    {
      name: 'Home',
      key: '/',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25'
          />
        </svg>
      ),
    },
    {
      name: 'Menu 1',
      key: '/menu1',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
          />
        </svg>
      ),
    },
    {
      name: 'Menu 2',
      key: '/menu2',
      icon: (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75'
          />
        </svg>
      ),
    },
  ]

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
          {menu.map((item) => (
            <li>
              <a
                className={`${select === item.key && 'active'}`}
                onClick={() => onChangePath(item.key)}
              >
                {item.icon}
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
