---
title: Theming Gatsby with gatsby-plugin-dark-mode
date: 2019-03-08
description: A Gatsby plugin which handles some of the details of implementing a dark mode theme.
tweet: https://twitter.com/jbscript/status/1103705483007778818
---

[gatsby-plugin-dark-mode](https://github.com/insin/gatsby-plugin-dark-mode#readme) is a new plugin for [Gatsby](https://www.gatsbyjs.org) which handles some of the details of implementing a dark mode theme.

It provides:

- Browser code for toggling and persisting the theme.
- Automatic use of a dark mode theme (via the `prefers-color-scheme` [CSS media query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)) if you've configured your system to use dark colour themes when available.
- A [React](https://reactjs.org) component for implementing theme toggling UI in your site.

---

First, install the plugin and configure Gatsby to use it:

```shell
npm install gatsby-plugin-dark-mode --save
```

```js
// gatsby-config.js

module.exports = {
  plugins: ['gatsby-plugin-dark-mode'],
}
```

---

Next, you need to provide a UI so users can toggle dark mode on and off.

The plugin module exports a `ThemeToggler` component which takes a `children` [render prop](https://reactjs.org/docs/render-props.html), providing the current `theme` name and a `toggleTheme` function to change the theme.

Here's an example of using `ThemeToggler` with a checkbox to toggle the theme (as seen in the footer of this blog):

```jsx
import React from 'react'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

class MyComponent extends React.Component {
  render() {
    return (
      <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
              checked={theme === 'dark'}
            />{' '}
            Dark mode
          </label>
        )}
      </ThemeToggler>
    )
  }
}
```

The toggled theme will be persisted across visits in `localStorage.theme`.

---

Finally, you need to implement the theme itself.

The default theme names are `'light'` and `'dark'` - the plugin adds the current theme name to the `<body>` element's `className`, so you can use [global styles](https://www.gatsbyjs.org/docs/creating-global-styles) to implement theming.

A nice option is to use CSS variables like so:

```css
/* global.css */

body {
  --bg: white;
  --textNormal: #222;
  --textTitle: #222;
  --textLink: blue;
  --hr: hsla(0, 0%, 0%, 0.2);

  background-color: var(--bg);
}

body.dark {
  -webkit-font-smoothing: antialiased;

  --bg: darkslategray;
  --textNormal: rgba(255, 255, 255, 0.88);
  --textTitle: white;
  --textLink: yellow;
  --hr: hsla(0, 0%, 100%, 0.2);
}
```

You can then use these variables in your site's components...

```jsx
class Layout extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: 'var(--bg)',
          color: 'var(--textNormal)',
          transition: 'color 0.2s ease-out, background 0.2s ease-out',
        }}
      >
        ...
      </div>
    )
  }
}
```

...and in your [Typography config](https://www.gatsbyjs.org/docs/typography-js/#creating-the-typography-configuration) if you're using `gatsby-plugin-typography`, which is included in the [Gatsby Starter Blog](https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/):

```js
// typography.js

import './global.css'

import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  a: {
    color: 'var(--textLink)',
  },
  hr: {
    background: 'var(--hr)',
  },
  // gatsby-remark-autolink-headers - use theme colours for the link icon
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
})
```

## Bonus Gatsby tip: customising HTML without `html.js`

If you want to customise the base HTML for your Gatsby app, an alternative to [creating and tweaking your own copy of `html.js`](https://www.gatsbyjs.org/docs/custom-html/) is to use the [Server Side Rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) by creating a `gatsby-ssr.js` module.

For example, one of the things `gatsby-plugin-dark-mode` handles is inserting a `<script>` directly inside `<body>` to set the initial theme, which avoids seeing a flash of the default light theme when revisiting the site after enabling dark mode.

This is implemented by using the [`onRenderBody` API](https://www.gatsbyjs.org/docs/ssr-apis/#onRenderBody)'s `setPreBodyComponents()` function to add a `<script>` element to the list of components which will be rendered inside `<body>`:

```js
// gatsby-ssr.js

const React = require('react')

exports.onRenderBody = function({ setPreBodyComponents }) {
  setPreBodyComponents([
    React.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
// <script> contents
      `,
      },
    }),
  ])
}
```

## Acknowledgements

The theme detecting/switching/persistence code and the suggested theming implementation are entirely from the [implementation of overreacted.io](https://github.com/gaearon/overreacted.io) by [Dan Abramov](https://twitter.com/dan_abramov) - I'm just publishing them as a plugin to make them easier to use in my own blog, and for reuse by others.
