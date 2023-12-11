import { useState } from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import '../../App.css'
import Customers from '../Customers'
import NewCustomer from '../NewCustomer'

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: '/',
      element: <Customers />
    },
    {
      path: '/new',
      element: <NewCustomer />
    }
  ])

  return routes
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes/>
    </BrowserRouter>
  )
}

export default App
