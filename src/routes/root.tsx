import type { RouteObject } from 'react-router'

import Home from '@/pages/Home'

const rootRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
]

export default rootRoutes
