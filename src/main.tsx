import './index.css'
import { RouteComponent } from './shared/routes/router'
import './shared/styles/theme.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <RouteComponent />
  </React.StrictMode>
)
