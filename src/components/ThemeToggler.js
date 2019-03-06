// Based on Dan Abramov's overreacted.io
import React from 'react'

class ThemeToggler extends React.Component {
  state = {
    theme: null,
  }

  componentDidMount() {
    this.setState({ theme: window.__theme })
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme })
    }
  }

  toggleTheme(theme) {
    window.__setPreferredTheme(theme)
  }

  render() {
    return (
      <this.props.children
        theme={this.state.theme}
        toggleTheme={this.toggleTheme}
      />
    )
  }
}

export default ThemeToggler
