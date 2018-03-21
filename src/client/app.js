import React from 'react'
import {renderRoutes} from 'react-router-config'
import Header from './components/header'
import { fetchCurrentUser } from './actions'

const App = ({ route }) => {
  return (
    <div>
      <Header />
      <div>{ renderRoutes(route.routes) }</div>
    </div>
  )
}

function loadData({ dispatch }) {
  return dispatch(fetchCurrentUser())
}

export default {
  component: App,
  loadData
}
