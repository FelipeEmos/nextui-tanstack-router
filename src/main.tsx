import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { NextUIProvider } from '@nextui-org/react'
import { RouterProvider } from '@tanstack/react-router'
import { router } from './navigation/router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider navigate={(value) => console.log(value)}>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>,
)
