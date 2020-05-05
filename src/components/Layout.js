import React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import Switch from 'react-switch'
import { Helmet } from 'react-helmet'

import moon from '../img/moon.png'
import sun from '../img/sun.png'
import { rhythm, scale } from '../utils/typography'

class Layout extends React.Component {
  renderHeader() {
    const { location, title } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const heading =
      location.pathname === rootPath ? (
        <h1
          style={{
            ...scale(1),
            marginBottom: 0,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      ) : (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {heading}
        <ThemeToggler>
          {({ theme, toggleTheme }) => {
            if (theme == null) {
              return null
            }
            let isDarkMode = theme === 'dark'
            return (
              <React.Fragment>
                <Helmet
                  meta={[
                    {
                      name: 'theme-color',
                      content: isDarkMode ? '#282828' : '#f0da4f',
                    },
                  ]}
                />
                <label htmlFor="toggleDarkMode">
                  <Switch
                    aria-label="Toggle dark mode"
                    id="toggleDarkMode"
                    onColor="#000"
                    offColor="#0064dd"
                    onHandleColor="#fff"
                    offHandleColor="#fff"
                    checkedIcon={
                      <img
                        src={moon}
                        style={{ height: 28, marginBottom: 0 }}
                        alt=""
                      />
                    }
                    uncheckedIcon={
                      <img
                        src={sun}
                        style={{ height: 29, marginBottom: 0 }}
                        alt=""
                      />
                    }
                    activeBoxShadow={'0 0 2px 3px #f0da4f'}
                    onChange={(checked) =>
                      toggleTheme(checked ? 'dark' : 'light')
                    }
                    checked={isDarkMode}
                  />
                </label>
              </React.Fragment>
            )
          }}
        </ThemeToggler>
      </div>
    )
  }

  render() {
    const { children } = this.props

    return (
      <div
        style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
          minHeight: '100vh',
        }}
      >
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{this.renderHeader()}</header>
          <main>{children}</main>
        </div>
      </div>
    )
  }
}

export default Layout
