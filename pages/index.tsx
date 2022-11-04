import type { NextPage } from "next"
import Link from "next/link"
import Image from 'next/image'
import Layout from '../components/layouts/Main'

const Home: NextPage = () => {
  return (
    <Layout title="Mamazbox">
      <section className="w-full h-[600px] bg-banner-img bg-no-repeat bg-cover bg-center relative">
        <div className="overlay">
          <div className="container h-full w-full relative">
            <div className="absolute top-20 bottom-20 left-4 right-4">
              <p className="text-[9rem] font-thin leading-none">
                LIVE FOR
                <span className="block text-white font-bold">FASHION</span>
              </p>
              <h3 className="text-white text-2xl tracking-wide">SAVE UP TO 50%</h3>
              <a className="btn btn-banner mt-8 font-semibold text-sm tracking-widest cursor-pointer">
                SHOP NOW
              </a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex my-16">
            <div className="flex-1 pr-8">
              <h2 className="text-[32px] tracking-wider font-medium">LUXURY MATERNITY GIFTS</h2>
              <p className="text-lg leading-9 mt-4">
              While everyone else is focused on baby, give mom-to-be something that’s just for her. At Nurtured 9, you’ll find self-care essentials that elevate and luxuriate mom-to-be’s pregnancy journey, helping her to feel her best – inside and out. Choose one of our beautiful, 
              luxury maternity gifts for mom-to-be (or treat yourself if you’re the one expecting)!  
              </p>
            </div>
            <div className="flex-1 w-full h-[600px]">
              <img className="w-full h-full object-cover rounded-lg" src="/assets/img/img2.jpeg" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="container">
          <div className="my-16">
            <h2 className="text-[30px] tracking-wider font-medium leading-none">SEND GIFTS THAT MOM WILL USE & LOVE</h2>
            <div className="grid grid-rows-4 grid-flow-col gap-8 h-[800px] mt-12">
              <div className="row-span-4">
                <img className="w-full h-full object-cover rounded-lg" src="/assets/img/img3.jpeg" />
              </div>
              <div className="row-span-2">
                <img className="w-full h-full object-cover rounded-lg" src="/assets/img/img4.jpeg" />
              </div>
              <div className="row-span-2">
                <img className="w-full h-full object-cover rounded-lg" src="/assets/img/img5.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-[800px] bg-newletter-img bg-no-repeat bg-cover bg-center relative">
        <div className="overlay">
          <div className="container relative h-full w-full">
            <div className="bg-white text-center absolute top-40 bottom-40 left-4 right-4 flex flex-col justify-center items-center">
              <h2 className="text-[32px] tracking-widest uppercase">Join mailing list</h2>
              <form className="w-3/5 mx-auto mt-8">
                <div className="flex flex-wrap">
                  <div className="w-1/3 px-3">
                    <label className="block text-sm text-left mb-2">
                        First name
                    </label>
                    <input 
                    className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-12 px-4 mb-3"
                    type="text" />
                  </div>
                  <div className="w-1/3 px-3">
                    <label className="block text-sm text-left mb-2">
                          Last name
                      </label>
                      <input 
                      className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-12 px-4 mb-3"
                      type="text" />
                  </div>
                  <div className="w-1/3 px-3">
                      <label className="block text-sm text-left mb-2">
                          Email
                      </label>
                      <input 
                      className="appearance-none text-sm block w-full border focus:outline-none rounded py-2 h-12 px-4 mb-3"
                      type="email" />
                  </div>
                </div>
                <button 
                  className="bg-black focus:outline-none text-white text-base py-3 px-5 rounded mt-6 w-1/2" 
                  type="button">
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home
