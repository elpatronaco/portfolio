import Head from "next/head"

import { Footer, Header } from "./components/layout"

import "./globals.css"

import type { PropsWithChildren, ReactElement } from "react"
import type { LayoutData } from "./types"

async function getData(): Promise<LayoutData> {
  // data is not shipped to client
  const module = await import("../data/data.json", { assert: { type: "json" } })

  const data = module.default

  return {
    headerLinks: data.headerLinks,
    footerLinks: data.footerLinks,
  }
}

type LayoutProps = PropsWithChildren

export default async function RootLayout({ children }: LayoutProps) {
  const data = await getData()

  return (
    <html lang="en">
      <Head>
        <meta name="robots" content="index, follow" />
      </Head>
      <body className="px-0 flex justify-center xs:pt-5 md:mx-8 lg:mx-12 xl:mx-24 min-w-fit bg-bg-light dark:bg-bg-dark transition-colors duration-200 min-h-screen">
        <div className="w-full md:max-w-2xl lg:w-3/4 lg:max-w-4xl xl:max-w-5xl flex flex-col">
          <Header links={data.headerLinks} />
          <main className="my-10 mx-5 md:mx-0">{children}</main>
          <Footer links={data.footerLinks} />
        </div>
      </body>
    </html>
  )
}
