import React from 'react'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <Helmet>
        <title>Generated Home By Code</title>
        <meta name="description" content="Home description is updated by component" />
      </Helmet>
      <h1>Home Page!</h1>
    </div>
  )
}

export default withRouter(HomePage)