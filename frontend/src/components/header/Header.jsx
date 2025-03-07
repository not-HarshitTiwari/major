import React from 'react'
import {NavLink} from 'react-router'
import Switch from './Switch';

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
    <div className="bg-secondary-light dark:bg-secondary-dark dark:text-gray-50  h-16 flex justify-between items-center py-6 px-10 z-10">
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
      <Switch />
    </div>
  );
}

export default Header