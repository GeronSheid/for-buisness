import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../../pages/MainPage'
import { Suspense } from 'react'
import { AuthPage } from '../../pages/AuthPage'

export const AppRouter = () => {

    interface IRoute {
        path: string,
        element: JSX.Element
    }

    

    const routes: IRoute[] = [
        {path: '/', element: <MainPage/>},
        {path: '/auth', element: <AuthPage/>}
    ]

    return (
        <Routes>
            {routes.map(route => 
                (<Route 
                    key={route.path} 
                    path={route.path} 
                    element={
                        <Suspense fallback={'Идёт загрузка...'}>
                            {route.element}
                        </Suspense>
                    }/>)
            )}
        </Routes>
    )
}
