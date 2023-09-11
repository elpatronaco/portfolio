import Head from "next/head"

import { Footer, Header } from "./components/layout"

import data from "./data/data.json"

import type { PropsWithChildren, ReactElement } from "react"

type LayoutProps = PropsWithChildren

export default function RootLayout({ children }: LayoutProps): ReactElement {
  return (
    <html lang="en">
      <Head>
        <title>Pau Colomé | Front developer</title>
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="I have the goal of learning and contributing no matter where I go"
        />
      </Head>
      <body className="px-0 xs:pt-5 md:px-12 lg:px-36 min-w-fit bg-bg-light dark:bg-bg-dark transition-colors duration-200 min-h-screen">
        <Header links={data.headerLinks} />
        <main className="my-10 mx-5 md:mx-0">{children}</main>
        <Footer links={data.footerLinks} />
      </body>
    </html>
  )
}
