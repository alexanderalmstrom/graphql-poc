/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useIntl } from 'gatsby-plugin-intl';

import { useSiteMetadata } from '../../hooks';

const SEO = ({
  title, description, lang, meta,
}) => {
  const intl = useIntl();
  const { title: metaTitle, description: metaDescription } = useSiteMetadata();
  const seoMetaTitle = title || (intl.formatMessage({ id: 'title' }) || metaTitle);
  const seoMetaDescription = description || (intl.formatMessage({ id: 'description' }) || metaDescription);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seoMetaTitle}
      titleTemplate={title && `%s | ${seoMetaTitle}`}
      meta={[
        {
          name: 'description',
          content: seoMetaDescription,
        },
        {
          property: 'og:title',
          content: seoMetaTitle,
        },
        {
          property: 'og:description',
          content: seoMetaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  description: '',
  lang: 'en',
  meta: [],
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
};

export default SEO;
