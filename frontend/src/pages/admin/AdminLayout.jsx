import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import AdminLogin from './AdminLogin'
import AdminPanel from './AdminPanel'

function AdminLayout() {
  const navigate = useNavigate();
  useEffect(()=>{
    navigate('/admin/login');
  },[])
  return (
    <>
    <Outlet />
    </>
  )
}

export default AdminLayout