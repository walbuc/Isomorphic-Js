import React from 'react'

//get staticContext from props
const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true
  return <h3 className="center-align">Opps... Page not found :(</h3>
}

export default {
  component: NotFound
}
