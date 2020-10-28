// src/any-component.js
/** @jsx jsx */

import Head from 'next/head'
import { jsx, Link } from "theme-ui";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Home page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">
          Home Page
        </h1>
        <Link href="/about">About page</Link>
      </main>
    </div>
  )
}
