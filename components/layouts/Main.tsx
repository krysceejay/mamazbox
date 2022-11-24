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
        <div className="flex items-center justify-between container py-2 sm:py-3">
          <div>
            <div className="h-14 w-14 sm:h-16 sm:w-20">
              <img className="w-full h-full object-cover" src="/assets/img/DarkPurple.png" />
            </div>
            {/* <span className="text-xs">Gifts for Expectant & New Moms</span> */}
          </div>
          <ul className="hidden sm:flex">
            <li className="px-5 py-1">
              <a href="" className="uppercase font-medium hover:text-main-color">Home</a>
            </li>
            <li className="px-5 py-1">
            <a href="" className="uppercase font-medium hover:text-main-color">Shop</a>
            </li>
            <li className="px-5 py-1">
            <a href="" className="uppercase font-medium hover:text-main-color">Profile</a>
            </li>
            <li className="px-5 py-1">
            <a href="" className="uppercase font-medium hover:text-main-color">Account</a>
            </li>
          </ul>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block sm:hidden w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>

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


