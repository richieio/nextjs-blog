// src/pages/_app.js
import * as React from 'react';
import NextApp from 'next/app';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme'; // theme object from step 2
import { MDXProvider } from '@mdx-js/react';
import image from '../components/image';

export default class App extends NextApp {
  state = {
    img: image,
  };
  render() {
    const { Component, pageProps } = this.props;
    return (
      <MDXProvider components={this.state}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </MDXProvider>
    );
  }
}
