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
          <Link href="/">
            <div className="h-14 w-14 sm:h-20 sm:w-20 relative object-cover">
              <Image src="/assets/img/DarkPurple.png" alt="Mama Logo" fill />
            </div>
            {/* <span className="text-xs">Gifts for Expectant & New Moms</span> */}
          </Link>
          <ul className="hidden sm:flex">
            <li className="px-5 py-1">
              <Link href="/" className="uppercase font-medium hover:text-main-color">Home</Link>
            </li>
            <li className="px-5 py-1">
              <Link href="/items" className="uppercase font-medium hover:text-main-color">Shop</Link>
            </li>
            <li className="px-5 py-1">
              <Link href="" className="uppercase font-medium hover:text-main-color">Profile</Link>
            </li>
            <li className="px-5 py-1">
              <Link href="" className="uppercase font-medium hover:text-main-color">Account</Link>
            </li>
          </ul>
          <div className="flex items-center space-x-4">
            <Link href="/items/cart" className="relative">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="bg-main-color text-white p-2 rounded-full w-6 h-6 flex justify-center items-center text-center text-sm absolute -top-3 -right-3">1</span>
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="block sm:hidden w-10 h-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
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


