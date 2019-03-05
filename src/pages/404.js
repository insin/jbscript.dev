import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import { rhythm } from '../utils/typography'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>Not Found</h1>
        <p>Did this page depart or did it never exist?</p>
        <div
          style={{
            overflow: 'hidden',
            position: 'relative',
            paddingBottom: `${(315 / 560) * 100}%`,
            marginBottom: rhythm(1),
          }}
        >
          {/* eslint-disable-next-line */}
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            src="https://www.youtube.com/embed/rJVhtkzIOHY?start=79"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          />
        </div>
        <p>Press play to feel its loss.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
