import React from "react";
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('@/views/home/index'))
const Entire = React.lazy(() => import('@/views/entire/index'))
const Detail = React.lazy(() => import('@/views/detail/index'))

export const routes = [
    {
        path: '/',
        element: <Navigate to='/home' />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/entire',
        element: <Entire />
    },
    {
        path: '/detail',
        element: <Detail />
    }
]