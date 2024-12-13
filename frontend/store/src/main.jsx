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
import Home from './components/Home.jsx'
import AdminRoutes from './pages/admin/AdminRoutes.jsx'
import UserList from './pages/admin/UserList.jsx'
import BlogList from './pages/admin/BlogList.jsx'
import BlogUpdate from './pages/admin/BlogUpdate.jsx'
import AllBlogs from './pages/admin/AllBlogs.jsx'
import Blogs from './components/Blogs.jsx'
import BlogDetail from './components/BlogDetail.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
   
      <Route index element={<Home />} />
      <Route path='' element={<PrivateRoutes />}>
        <Route path='/profile' element={<Profile />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route path='/blogs' element = {<Blogs />} />
      <Route path='/blogs/detail/:id' element = {<BlogDetail />} />
      
      

      <Route path = '/admin' element = {<AdminRoutes />}>
        <Route path = 'userlist' element = {<UserList />} />
        <Route path = 'bloglist' element = {<BlogList />} />
         <Route path = 'allBlogs' element = {<AllBlogs />} />
        <Route path = 'blog/update/:id' element = {<BlogUpdate /> } />
      </Route>
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
