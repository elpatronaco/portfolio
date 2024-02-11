"use client"

import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Not Found",
}

export default function NotFound() {
  return (
    <>
      <h1 className="text-2xl font-bold">:(</h1>
      <p className="text-lg text-gray-500 mt-5">
        The page you are looking for does not exist.
      </p>
    </>
  )
}
