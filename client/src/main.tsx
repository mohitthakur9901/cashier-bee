import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Provider from './Provider.tsx'
import { RouterProvider } from 'react-router-dom'
import router from './Routers.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
