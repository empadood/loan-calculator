import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import { lazy, Suspense } from 'react'

import App from '../../App'
import { routes } from './routes'

const Calculator = lazy(async () => {
  return {
    default: (
      await import(
        /*webpackChunkName: 'Calculator' */ '../../app/calculator/views/CalculatorView'
      )
    ).CalculatorView
  }
})

const CalculatorWithLib = lazy(async () => {
  return {
    default: (
      await import(
        /*webpackChunkName: 'CalculatorWithLib' */ '../../app/calculator/views/CalculatorWithLibrary'
      )
    ).CalculatorWithLibView
  }
})

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: routes.Calculator,
        element: (
          <Suspense fallback="Loading">
            <Calculator />
          </Suspense>
        )
      },
      {
        path: routes.CalculatorWithLib,
        element: (
          <Suspense fallback="Loading">
            <CalculatorWithLib />
          </Suspense>
        )
      },
      {
        path: '',
        element: <Navigate to={routes.Calculator} />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to={routes.Calculator} />
  }
])

export const RouteComponent = () => {
  return <RouterProvider router={router} />
}
