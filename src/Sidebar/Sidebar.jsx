import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  const MenuItems=[
    {
      path:"/",
      name:"Dashboard",
      icon:""
    }
  ]
  return (
    <>
    <div>
        <div className='sidebar'>
            <div className='section'>
                <div className='navigation'><i class="fa-solid fa-bars"></i></div>
            <h2>CafeBar</h2>    
            <div className='search'><i class="fa-solid fa-magnifying-glass"></i><input type="text" placeholder="Search.." id="search"/></div>
            <div className='elements'><li><i class="fa-solid fa-house"></i>Dashboard</li>
            <li><i class="fa-solid fa-user"></i>Users</li>
            <li><i class="fa-solid fa-message"></i>Messages</li>
            <li><i class="fa-solid fa-chart-line"></i>Analytics</li>
            <li><i class="fa-regular fa-file"></i>File Manager</li>
            <li><i class="fa-solid fa-cart-shopping"></i>Order</li>
            <li><i class="fa-solid fa-gear"></i>Setting</li>
            <li><i class="fa-solid fa-heart"></i>Saved</li>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Sidebar