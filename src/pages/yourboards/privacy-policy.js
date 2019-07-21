import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import featureGraphic from './feature-graphic.png'

class PrivacyPolicy extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Seo title="Privacy Policy for Your Boards"/>
        <h1>Privacy Policy for Your Boards</h1>
        <img src={featureGraphic} alt="Your Boards title and logo"/>
        <h2>What information does the app collect?</h2>
        <p>
          Your Boards does not collect any personal or sensitive user data, or any other information
          from your device.
        </p>
        <p>
          Your Boards requests use of the following features of your device for the given purposes:
        </p>
        <ul>
          <li>Camera &mdash; for taking photos and recording videos to be used in Your Boards.</li>
          <li>Microphone &mdash; for recording audio clips to be used in Your Boards.</li>
          <li>External Storage &mdash; to access photos, videos and audio to be used in Your Boards.</li>
        </ul>
        <p>
          Photos, videos and audio recorded from within Your Boards are stored and accessed locally
          on your device and are never uploaded, posted, transmitted or otherwise made available
          elsewhere.
        </p>
        <p>
          Details of your boards and items, and the pictures, audio and video they use are stored and
          accessed locally by Your Boards and are never uploaded, posted, transmitted or otherwise
          made available elsewhere.
        </p>
      </Layout>
    )
  }
}

export default PrivacyPolicy

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
