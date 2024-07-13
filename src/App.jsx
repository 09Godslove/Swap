//import React from "react"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import ListItem from './pages/ListItem'
import View from './pages/View' 
import ErrorPage from './pages/ErrorPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'



function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element ={<Home />} />
                <Route path="/SignIn" element ={<SignIn />} />
                <Route path="/SignUp" element ={<SignUp />} />
                <Route path="/View/:id" element ={<View />} />
                <Route path="/ListItem" element ={<ListItem />} />
                <Route path="" element ={<ErrorPage />} />
            </Routes>
        </Router>
    )
}
export default App