import React from 'react'
import Crud from './Crud'
import Edit from './Edit'
import Add from './Add'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return(
     <Router>
        <Routes>
            <Route path="/" element={<Crud/>}/>
            <Route path="/edit" element={<Edit/>}/>
            <Route path="/add" element={<Add/>}/>
        </Routes>
     </Router>
    )
}

export default App;