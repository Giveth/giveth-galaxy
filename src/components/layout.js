import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled, { createGlobalStyle } from 'styled-components'

import { TypographyStyle, GoogleFont } from 'react-typography'
import typography from '../utils/typography'
import { colors } from '../utils/presets'

import Header from './header'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  color: ${colors.dark};
  background: ${colors.background};
}
  a {
    color: ${colors.highlight2};
    text-decoration: none;
    font-weight: 600;
}
h1 {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.theme};
}

h2 {
  margin: 0;
  font-size: 2rem; 
  font-weight: 300;
  color: ${colors.highlight2};
}
`

const Content = styled.div`
  margin: 0 auto;
  padding-top: 0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={data => (
      <Content>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            {
              name: 'keywords',
              content: data.site.siteMetadata.keywords,
            },
            {
              name: 'application-name',
              content: data.site.siteMetadata.title,
            },
            {
              name: 'theme-color',
              content: '#2C0B3F',
            },
            {
              property: 'og:image:width',
              content: '1200',
            },
            {
              property: 'og:image:height',
              content: '628',
            },
            {
              property: 'og:url',
              content: 'https://giveth.io',
            },
            {
              property: 'og:title',
              content: data.site.siteMetadata.title,
            },
            {
              property: 'og:description',
              content: data.site.siteMetadata.description,
            },
            {
              property: 'og:image',
              content: '/giveth-og.png',
            },
            {
              property: 'og:image:url',
              content: 'https://giveth.io/giveth-og.png',
            },
            {
              property: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              property: 'twitter:url',
              content: 'https://giveth.io',
            },
            {
              property: 'twitter:title',
              content: data.site.siteMetadata.title,
            },
            {
              property: 'twitter:description',
              content: data.site.siteMetadata.description,
            },
            {
              property: 'twitter:image',
              content: 'https://giveth.io/giveth-og.png',
            },
          ]}
        />
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title}>
          <html lang="en" />
          <TypographyStyle typography={typography} />
          <GoogleFont typography={typography} />
        </Header>
        <Content>
          {children}
          <Footer />
        </Content>
      </Content>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
