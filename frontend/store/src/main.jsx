import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createRoutesFromElements} from 'react-router'
import { createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import PrivateRoutes from './components/PrivateRoutes.jsx'
import Profile from './components/Profile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App />}>
     <Route path='' element = {<PrivateRoutes />}>
        <Route path = "/profile" element = {<Profile />} />
      </Route>
       <Route path='/login' element = {<Login />} />   
       <Route path='/register' element = {<Register />} />
 
    </Route>
   
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router = {router} />
    </Provider>
  </StrictMode>,
)
