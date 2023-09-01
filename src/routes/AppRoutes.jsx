import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import EventsPage from '../pages/EventsPage/EventsPage'
import EventsDetailsPage from '../pages/EventsDetailsPage/EventsDetailsPage'
import EventsCreatePage from '../pages/EventsCreatePage/EventsCreatePage'
import EventsEditPage from '../pages/EventsEditPage/EventsEditPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import CommunityPage from '../pages/CommunityPage/CommunityPage'
import UserEditionPage from '../pages/UserEditionPage/UserEditionPage'
import PrivateRoute from './PrivateRoute'


const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route path={'/events'} element={<EventsPage />} />
            <Route path={'/signup'} element={<SignupPage />} />


            <Route element={<PrivateRoute />}>
                <Route path={'/user/profile/:user_id'} element={<ProfilePage />} />
                <Route path={'/user/community'} element={<CommunityPage />} />
                <Route path={'/user/edit/:user_id'} element={<UserEditionPage />} />
                <Route path={'/event/create'} element={<EventsCreatePage />} />
                <Route path={'/event/edit'} element={<EventsEditPage />} />
                <Route path={'/events/details/:id'} element={<EventsDetailsPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes