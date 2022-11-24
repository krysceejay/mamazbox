import type { NextPage } from "next"
import Link from "next/link"
import Image from 'next/image'
import Layout from '../components/layouts/Main'

const Home: NextPage = () => {
  return (
    <Layout title="Mamazbox">
      <section className="w-full h-[660px] bg-banner-img bg-no-repeat bg-cover bg-center relative">
        <div className="overlay">
          <div className="container h-full w-full relative">
            <div className="absolute top-20 bottom-20 left-4 right-4 flex flex-col justify-center items-center">
              <p className="text-[33px] text-[#fbf4f4]">Premium maternity and postpartum gifts</p>
              <p className="text-[21px] text-[#fbf4f4] mt-4 italic">
                Carefully and thoughtfully curated self-care gifts just for mama! Because mama should be pampered!
              </p>
              <a className="btn btn-banner mt-12 font-semibold text-sm tracking-widest cursor-pointer">
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
              As mama is carried away with expecting and caring for baby, give her something that is just for her. 
              In mamazbox is enclosed essentials for self-care to boost mamas’ confidence through the pregnancy and post-partum journey, 
              helping her feel her best inside and out. Pick one of our carefully selected premium boxes for mama or give yourself a treat if you are the one expecting because you deserve it!  
              </p>
              <p className="text-lg leading-9 mt-4"> We know the journey and different phases can take a toll on mama, and for this we want her to feel good in and out.</p>
            </div>
            <div className="flex-1 w-full h-[600px]">
              <img className="w-full h-full object-cover rounded-lg" src="/assets/img/img2.jpg" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="container">
          <div className="my-16">
            <h2 className="text-[30px] tracking-wider font-medium leading-none">GIVE MAMA THE GIFTS SHE NEEDS</h2>
            <div className="grid grid-rows-4 grid-flow-col gap-8 h-[800px] mt-12">
              <div className="row-span-4">
                <img className="w-full h-full object-cover rounded-lg" src="/assets/img/img7.jpg" />
              </div>
              <div className="row-span-2">
                <img className="w-full h-full object-cover rounded-lg" src="/assets/img/img3.jpg" />
              </div>
              <div className="row-span-2">
                <img className="w-full h-full object-cover rounded-lg" src="/assets/img/img1.jpg" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="my-16">
            <div className="flex justify-between items-center">
              <h2 className="text-[30px] tracking-wider font-medium leading-none">FEATURED ITEMS</h2>
              <a className="btn bg-main-color text-white py-3 px-6 font-semibold text-sm cursor-pointer">
                View All
              </a>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div>
                <img className="w-full h-96 object-cover rounded-md" src="/assets/img/IMGP8661.jpg" />
                <div className="mt-4">
                  <div className="text-xl font-light">The Spa Mini Gift Box for Mom</div>
                  <span className="block text-2xl font-semibold">£68.00</span>
                </div>
              </div>
              <div>
                <img className="w-full h-96 object-cover rounded-md" src="/assets/img/IMGP8697.jpg" />
                <div className="mt-4">
                  <div className="text-xl font-light">Thank You Mom Gift Box</div>
                  <span className="block text-2xl font-semibold">£68.00</span>
                </div>
              </div>
              <div>
                <img className="w-full h-96 object-cover rounded-md" src="/assets/img/IMGP8717.jpg" />
                <div className="mt-4">
                  <div className="text-xl font-light">Congratulations Mom Gift Box</div>
                  <span className="block text-2xl font-semibold">£68.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50">
        <div className="container">
          <div className="flex my-16">
            <div className="flex-1 w-full h-[600px]">
              <img className="w-full h-full object-cover rounded-lg" src="/assets/img/img6.jpg" />
            </div>
            <div className="flex-1 pl-8">
              <h2 className="text-[32px] tracking-wider font-medium">SELECTED BY MUMS</h2>
              <p className="text-lg leading-9 mt-4">
              Just for you mama, because you should be pampered and deserve it. You have done what only you can do, birthing your baby. Everyone can be carried away with gifting baby, but mama should be thought of too. It can be difficult getting the right gifts for a mum to be or a new mum. We have made this easy for you by sourcing the best clean body and beauty products. Every single product has been carefully sourced, curated by us mums. 
              Send a new mum or mum to be our beautiful premium boxes, and let her know you are thinking of her. Mamazbox, mum tested, mum approved!  
              </p>
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
