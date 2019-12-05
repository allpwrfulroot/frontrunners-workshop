import React from 'react'
import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'utils/global-style'
import theme from 'utils/theme'
import { Layout } from 'components'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </ThemeProvider>
    )
  }
}
