import React from 'react'

import { rhythm } from '../utils/typography'

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(1),
          paddingTop: rhythm(1),
        }}
      >
        {this.props.socialLinks && (
          <span>
            <a
              href="https://twitter.com/jbscript"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{' '}
            &bull;{' '}
            <a
              href="https://github.com/insin"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>{' '}
            &bull;{' '}
            <a
              href="https://twitch.tv/jbscript"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitch
            </a>{' '}
            &bull;{' '}
            <a
              href="https://play.google.com/store/apps/developer?id=Jonny+Buchanan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Play
            </a>
          </span>
        )}
      </footer>
    )
  }
}

Footer.defaultProps = {
  socialLinks: true,
}

export default Footer
