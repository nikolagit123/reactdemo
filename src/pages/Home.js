import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { Button } from '@material-ui/core'

import { resetSession } from 'store/actions'

const HomePage = () => {
  const dispatch = useDispatch()
  const session = useSelector(({ session }) => session)

  return (
    <div className="flex items-center justify-center flex-1">
      <Helmet>
        <title>Generated Home By Code</title>
        <meta name="description" content="Home description is updated by component" />
      </Helmet>
      <div className="flex items-center justify-center flex-col">
        <h1>Welcome Home {session.user || ''}!</h1>
        <Button variant="contained" onClick={() => dispatch(resetSession())}>Click Here</Button>
      </div>
    </div>
  )
}

export default withRouter(HomePage)