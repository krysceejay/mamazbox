import { ReactNode } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import Link from "next/link"
import Image from 'next/image'

interface Props {
  children: ReactNode
  title: string
}

const Main: NextPage<Props> = ({ children, title }) => {
  
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Mamazbox app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="sticky top-0 z-40 shadow-sm w-full bg-white">
        <div className="bg-main-color text-center py-2 text-sm text-white w-full">Free shipping over $100 with code <span className="font-semibold">MAMAZBOX</span></div>
        <div className="flex items-center justify-between container py-2">
          <div>
            <div className="h-20 w-24">
              <img className="w-full h-full object-cover" src="/assets/img/DarkPurple.png" />
            </div>
            <span className="text-xs">Gifts for Expectant & New Moms</span>
          </div>
        </div>
      </nav>
      <main>
        {children}
      </main>
      <footer className="bg-black p-8">
        <div className="text-white text-center">Copyright &copy; {new Date().getFullYear()}, All Rights Reserved.</div>
      </footer>
    </>
  )
}

export default Main


