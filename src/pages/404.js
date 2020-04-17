import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <Layout>
      <SEO title="Not found" />
      <h1>Not found!</h1>
      <p>The page you are looking for could not be found :(</p>
    </Layout>
  );
}
