import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import EventsPage from '../pages/EventsPage/EventsPage'
import EventsDetailsPage from '../pages/EventsDetailsPage/EventsDetailsPage'
import EventsCreatePage from '../pages/EventsCreatePage/EventsCreatePage'
import EventsEditPage from '../pages/EventsEditPage/EventsEditPage'
import SignupPage from '../pages/SignupPage/SignupPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import CommunityPage from '../pages/CommunityPage/CommunityPage'
import UserEditionPage from '../pages/UserEditionPage/UserEditionPage'



const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} ></Route>
            <Route path={'/events'} element={<EventsPage />} ></Route>
            <Route path={'/events/details/:id'} element={<EventsDetailsPage />} ></Route>
            <Route path={'/event/create '} element={<EventsCreatePage />} ></Route>
            <Route path={'/event/edit'} element={<EventsEditPage />} ></Route>
            <Route path={'/signup'} element={<SignupPage />} ></Route>
            <Route path={'/login'} element={<LoginPage />} ></Route>
            <Route path={'/user/profile'} element={<ProfilePage />} ></Route>
            <Route path={'/user/community'} element={<CommunityPage />} ></Route>
            <Route path={'/user/edit/:id'} element={<UserEditionPage />} ></Route>
        </Routes>
    )
}

export default AppRoutes