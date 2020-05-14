import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          // marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
            fontSize:`50px`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
    className='container'
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header 
      style={{borderTop:`thick double #32a1ce`,
      borderBottom:`thick double #32a1ce`
      }}>{header}</header>
      <main>{children}</main>
      <footer
      style={{borderTop:`thick double #32a1ce`}}
      >
        <a href='https://www.instagram.com/asane108/?hl=ja'>Instagram</a>
        <p>旦那との国際恋愛事情について、２人のライフスタイルについて発信してます</p>
        <a href='https://twitter.com/asa1084'>Twitter</a>
        <p>プログラミングのこと愛猫のリリーちゃんのことを呟いてます</p>
      </footer>
    </div>
  )
}

export default Layout
