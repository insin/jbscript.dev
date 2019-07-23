import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Helmet from 'react-helmet'

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
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <React.Fragment>
              <Helmet
                meta={[
                  {
                    name: 'theme-color',
                    content: theme === 'dark' ? '#282828' : '#f0da4f',
                  },
                ]}
              />
              <label style={{ float: 'right' }}>
                <input
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? 'dark' : 'light')
                  }
                  checked={theme === 'dark'}
                />{' '}
                Dark mode
              </label>
            </React.Fragment>
          )}
        </ThemeToggler>
      </footer>
    )
  }
}

Footer.defaultProps = {
  socialLinks: true,
}

export default Footer
