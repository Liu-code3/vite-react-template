import { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import { routes } from './router/inde'

const App = memo(() => {
  return (
    <div>
      { useRoutes(routes) }
    </div>
  )
})

export default App