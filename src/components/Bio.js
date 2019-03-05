import React from 'react'

import icon from '../assets/icon.png'
import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
          alignItems: 'center',
        }}
      >
        <img
          src={icon}
          alt="jbscript"
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ marginBottom: 0 }}>
          A blog about programming, web dev and whatnot by{' '}
          <a href="https://twitter.com/jbscript">Jonny Buchanan</a>.
        </p>
      </div>
    )
  }
}

export default Bio
