import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'utils/global-style'
import theme from 'utils/theme'
import { Layout } from 'components'

import 'isomorphic-unfetch'

export default class MyApp extends App {
  state = {
    count: 0,
  }

  upCount = () => this.setState({ count: this.state.count + 1 })

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Layout>
            <Component
              {...pageProps}
              count={this.state.count}
              upCount={this.upCount}
            />
          </Layout>
        </>
      </ThemeProvider>
    )
  }
}
