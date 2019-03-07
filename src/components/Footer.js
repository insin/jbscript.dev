import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

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
            </a>
          </span>
        )}
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label style={{ float: 'right' }}>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              Dark mode
            </label>
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
