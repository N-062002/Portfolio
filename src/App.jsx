import React from 'react';
import {Route,Routes} from "react-router-dom";
import './App.css'
// import { Home } from '@mui/icons-material'
import { Home }  from './components/pages/home'
import { Skills } from './components/layouts/skills'; 
import { Projects } from  './components/layouts/projects';
import { Certificate } from './components/layouts/certificate';
// import { Certificate } from './components/layouts/certificate';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/skills" element={<Skills />} />
       <Route path="/projects" element={<Projects />} />
       <Route path="/certificate" element={<Certificate />} />
       
     </Routes>
    </>
  )
}

export default App
