import React from 'react'
import {NavLink} from 'react-router'

function Header() {
  const navList = [
    {
      name : "Home",
      slug : "/"
    },
    {
      name : "About",
      slug : "/about"
    },
    {
      name : "Profile",
      slug : "/profile"
    }
  ];
  return (
    <div className="bg-secondary-light dark:bg-secondary-dark dark:text-gray-50  h-12 flex justify-between items-center p-4">
      <div id="logo" className="">
        Logo
      </div>
      <div id="navbar">
        <ul className='flex gap-8'>
          {navList.map((item) => (
              <NavLink to={item.slug} key={item.name}>
                {item.name}
              </NavLink>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Header