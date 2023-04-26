import { Roboto } from 'next/font/google'

import { Heading } from '@ignite-ui/react'
const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export default function Home() {
  return (
    <>
      <main className={`${roboto}`}>
        <Heading as="h1">Hello World!</Heading>
      </main>
    </>
  )
}
