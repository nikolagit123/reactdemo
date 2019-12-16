import React from 'react'
import { Helmet } from 'react-helmet';

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>Generated Home By Code</title>
        <meta name="description" content="Home description is updated by component" />
      </Helmet>
      <p>Home Page!</p>
    </div>
  )
}

export default HomePage