import './global.css'

import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  a: {
    color: 'var(--textLink)',
  },
  'a.gatsby-resp-image-link': {
    boxShadow: `none`,
  },
  // gatsby-remark-autolink-headers - don't underline when hidden
  'a.anchor': {
    boxShadow: 'none',
  },
  // gatsby-remark-autolink-headers - allow for theme colours
  'a.anchor svg[aria-hidden="true"]': {
    stroke: 'var(--textLink)',
  },
  blockquote: {
    color: 'var(--textNormal)',
    borderLeftColor: 'var(--textLink)',
  },
  hr: {
    background: 'var(--hr)',
  },
  'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
    fontSize: 'inherit',
  },
  'li code': {
    fontSize: '1rem',
  },
  'p code': {
    fontSize: '1rem',
  },
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
