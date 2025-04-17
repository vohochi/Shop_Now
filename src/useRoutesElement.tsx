import { useRoutes } from 'react-router-dom'
import ProductList from './pages/productList'
import Login from './pages/login'
import Register from './pages/register'
import RegisterLayout from './layouts/registerLayout/RegisterLayout'
import MainLayout from '@/layouts/mainLayout'

const useRoutesElement = () => {
  const routeElement = useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      )
    },
    {
      path: '/login',
      element: (
        <RegisterLayout>
          <Login />
        </RegisterLayout>
      )
    },
    {
      path: '/register',
      element: (
        <RegisterLayout>
          <Register />
        </RegisterLayout>
      )
    }
  ])
  return routeElement
}

export default useRoutesElement
