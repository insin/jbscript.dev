import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <h1>Not Found</h1>
        <p>
          Oh, the sadness will never go / Will never go away / Baby it'&#39;s
          here to stay...
        </p>
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
