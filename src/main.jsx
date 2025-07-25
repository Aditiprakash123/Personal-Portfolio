import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import {Route ,RouterProvider , createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contact from './components/Contact/Contact.jsx'

import Education from './components/Education/Education.jsx'
import Skills from './components/Skills/Skills.jsx'
import DSA from './components/DSA/Dsa.jsx'
import Projects from './components/Projects/Projects.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children :[
//       {
//         path:"",
//         element: <Home/>
//       },
//       {
//         path: "about",
//         element: <About/>
//       },
//       {
//        path: '*',
//        element: <h1>404 Not Found</h1>
//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }

//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = '/' element = {<Layout/>}>
      <Route path = '' element= {<Home/>} />
       <Route path = 'about' element= {<About/>} />
        <Route path = 'contact' element= {<Contact/>} />
        <Route path = 'education' element= {<Education/>} />
        <Route path = 'skills' element= {<Skills/>} />
        <Route path = 'Dsa' element= {<DSA/>} />
        <Route path = 'Projects' element= {<Projects/>} />
        
  
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
