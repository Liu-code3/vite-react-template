import React, { Suspense }  from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'

import Loading from '@/components/loading/Loading.jsx'

// fallback后面是文字或者组件(加载组件)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <HashRouter>
        <App />
      </HashRouter>
    </Suspense>
  </React.StrictMode>,
)
