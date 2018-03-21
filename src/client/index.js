// Client side app code
//Give life to the bare bones
import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import Routes from './Routes'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'//handle async action creators
import { Provider } from 'react-redux'// ties store and react app
// is a react component that comunicates data between store to any connected component
import reducers from './reducers'
import { renderRoutes } from 'react-router-config'
import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: '/api'
})
const store = createStore(reducers, window.INITIAL_STATE,
  applyMiddleware(thunk.withExtraArgument(axiosInstance)))

ReactDom.hydrate(
  <Provider store={ store }>
    <BrowserRouter>
      <div>{ renderRoutes(Routes) }</div>
    </BrowserRouter>
  </Provider>,

  document.querySelector('#root')
)
