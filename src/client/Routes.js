import React from 'react'
import HomePage from './pages/home'
import UsersListPage from './pages/usersList'
import AdminsListPage from './pages/adminsList'
import App from './app'
import NotFound from './pages/notfound'

export default [
{
  ...App,
  routes: [
    {
      path: "/",
      ...HomePage,
      exact: true
    },
    {
      path: "/users",
      ...UsersListPage,
    },
    {
      path: "/admins",
      ...AdminsListPage,
    },
    {
      ...NotFound
    }
  ]
}
]
