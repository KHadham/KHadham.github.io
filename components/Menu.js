import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faUser, faFile, faBriefcase, faAddressBook } from '@fortawesome/free-solid-svg-icons'

const Menu = ({active}) => {
  const menuList = [{
    name: 'Home',
    route: '/',
    icon: faHouse
  }, {
    name: 'Profile',
    route: '/profile',
    icon: faUser
  }, {
    name: 'Resume',
    route: '/resume',
    icon: faFile
  }, {
    name: 'Portfolio',
    route: '/portfolio',
    icon: faBriefcase
  }, {
    name: 'Contact',
    route: '/contact',
    icon: faAddressBook
  }]

  return (
    <div className="flex lg:justify-center space-x-4 p-5 bg-orange-50 shadow-sm overflow-x-auto">
      { menuList.map((item, index) => (
        <Link key={`menu_${index}`} href={item.route}>
          { active == item.route ? (
            <div className="cursor-pointer rounded-lg px-3 py-2 flex justify-center items-center gap-x-3 text-orange-700 text-sm lg:text-base bg-orange-200 hover:bg-orange-200 hover:text-orange-900">
              <FontAwesomeIcon className='text-orange-500 text-xs' icon={item.icon} />
              <div className='font-bold text-orange-500'>{ item.name }</div>
            </div>
          ) : ( 
            <div className="cursor-pointer rounded-lg px-3 py-2 flex justify-center items-center gap-x-3 text-orange-700 text-sm lg:text-base hover:bg-orange-200 hover:text-orange-900">
              <FontAwesomeIcon icon={item.icon} className="text-xs" />
              <div className='font-medium'>{ item.name }</div>
            </div>
          )}
        </Link>
      ))}
    </div>
  )
}

export default Menu