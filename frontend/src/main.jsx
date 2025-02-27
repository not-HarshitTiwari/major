import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {createBrowserRouter, createRoutesFromElements,Route,RouterProvider} from 'react-router';
import Layout from './Layout'
import {AdminLogin, AdminPanel, Home} from './pages'
import AdminLayout from './pages/Admin/AdminLayout';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='admin' element={<AdminLayout />} >
        <Route path='login' element={<AdminLogin />} />
      </Route>
        <Route path='panel' element={<AdminPanel />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
