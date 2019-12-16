import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <div className="flex items-center justify-center flex-1">
      <Helmet>
        <title>Generated About By Code</title>
        <meta name="description" content="About description is updated by component" />
      </Helmet>
      <h1>About Us Page!</h1>
    </div>
  )
}

export default AboutPage