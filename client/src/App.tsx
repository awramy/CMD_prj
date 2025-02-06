import './App.scss'
import {Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Profile from "./pages/Profile.tsx";
import * as React from "react";

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App
