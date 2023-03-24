import React from 'react'
import Sidebar from './Sidebar/SidebarJS'
import Dashboard from './Pages/Dashboard/Dashboard'
import Users from './Pages/Users/Users'
import Messages from './Pages/Messages/Messages'
import Analytics from './Pages/Analytics/Analytics'
import Filemanager from './Pages/Filemanager/Filemanager'
import Order from './Pages/Order/Order'
import Setting from './Pages/Setting/Setting'
import Saved from './Pages/Saved/Saved'
import Contact from './Pages/Contact/Contact' 
import { BrowserRouter, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div>
        <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/messages" element={<Messages/>}/>
            <Route path="/analytics" element={<Analytics/>}/>
            <Route path="/filemanager" element={<Filemanager/>}/>
            <Route path="/order" element={<Order/>}/>
            <Route path="/setting" element={<Setting/>}/>
            <Route path="/saved" element={<Saved/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
          </Sidebar>
        </BrowserRouter>
    </div>     
  )
}

export default App
