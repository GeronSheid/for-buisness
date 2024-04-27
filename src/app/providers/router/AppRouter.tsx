import { Route, Routes } from 'react-router-dom'
import { MainPage } from '../../../pages/MainPage'
import { Suspense } from 'react'
import { AuthPage } from '../../../pages/AuthPage'
import { AuthRequired } from '../../../shared/utils/hoc/AuthRequired'
import { ProfilePage } from '../../../pages/ProfilePage'

export const AppRouter = () => {

    interface IRoute {
        path: string;
        element: JSX.Element;
        suspenseElement?: JSX.Element;
    }

    const privateRoutes: IRoute[] = [
        { path: '/profile', element: <ProfilePage /> }
    ]

    const routes: IRoute[] = [
        { path: '/auth', element: <AuthPage /> },
        { path: '/', element: <MainPage /> }
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
                } />)
            )}
            {privateRoutes.map(route =>
            (<Route
                key={route.path}
                path={route.path}
                element={
                    <Suspense fallback={'Идёт загрузка...'}>
                        <AuthRequired>{route.element}</AuthRequired>
                    </Suspense>
                } />)
            )}
        </Routes>
    )
}
