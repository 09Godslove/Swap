import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ListItem from './pages/ListItem'
import View from './pages/View' 
import ErrorPage from './pages/ErrorPage'



function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path="/View" element ={<View />} />
                <Route path="/ListItem" element ={<ListItem />} />
                <Route path="" element ={<ErrorPage />} />
            </Routes>
        </Router>
    )
}
export default App