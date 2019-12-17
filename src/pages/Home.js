import React from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { Button } from '@material-ui/core'

import { resetSession } from 'store/actions'

const HomePage = () => {
  const dispatch = useDispatch()

  return (
    <div className="flex items-center justify-center flex-1">
      <Helmet>
        <title>Generated Home By Code</title>
        <meta name="description" content="Home description is updated by component" />
      </Helmet>
      <div className="flex items-center justify-center flex-col">
        <h1>Home Page!</h1>
        <Button variant="contained" onClick={() => dispatch(resetSession())}>Click Here</Button>
      </div>
    </div>
  )
}

export default withRouter(HomePage)