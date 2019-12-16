import React from 'react';
import { Helmet } from 'react-helmet';

const AboutPage = () => {
  return (
    <div>
      <Helmet>
        <title>Generated About By Code</title>
        <meta name="description" content="About description is updated by component" />
      </Helmet>
      <p>About Us Page!</p>
    </div>
  )
}

export default AboutPage