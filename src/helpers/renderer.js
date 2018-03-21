import React  from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import serialize from 'serialize-javascript'
//escape malicious characters. It replace it with unicode characters

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={ store }>
      <StaticRouter location={ req.path } context={ context }>
        <div>{ renderRoutes(Routes) }</div>
      </StaticRouter>
    </Provider>
  )

  return `
  <html>
    <head>
      <!-- Compiled and minified CSS -->
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    </head>
    <div id="root">${ content }</div>
    <script>
    window.INITIAL_STATE = ${ serialize(store.getState()) }
    </script>
    <script src="bundle.js"></script>
    <body></body>
  </html>`
}
