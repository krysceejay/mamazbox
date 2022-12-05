import type { NextPage } from "next"
import Link from "next/link"
import Image from 'next/image'
import Layout from '../../components/layouts/Main'

const ItemDetails: NextPage = () => {
  return (
    <Layout title="Item Details">
      <section className="mb-32">
        <div className="container">
          <div className="overflow-hidden my-8">
            <div className="w-full md:w-[400px] lg:w-[600px] float-none md:float-left mr-10 mb-5">
                <div className="w-full h-[370px] md:h-[350px] lg:h-[450px]">
                    <img className="w-full h-full object-cover" src="/assets/img/IMGP8663.jpg" />
                </div>
                <div className="grid grid-cols-4 gap-2 sm:gap-4 mt-6">
                    <img className="w-full h-20 sm:h-24 object-cover rounded-md" src="/assets/img/IMGP8663.jpg" />
                    <img className="w-full h-20 sm:h-24 object-cover rounded-md" src="/assets/img/IMGP8671.jpg" />
                    <img className="w-full h-20 sm:h-24 object-cover rounded-md" src="/assets/img/IMGP8696.jpg" />
                    <img className="w-full h-20 sm:h-24 object-cover rounded-md" src="/assets/img/IMGP8671.jpg" />
                </div>
            </div>
            <div className="">
                <h2 className="text-xl">The Replenish and Restore New Mom/Postpartum Gift Box</h2>
                <p className="text-2xl mt-4 font-semibold">£205.00</p>
                <div className="flex items-center space-x-4 mt-4">
                    <div className="w-32">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            SIZE
                        </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-100 border-0 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-gray-100" id="grid-state">
                            <option>Select Size</option>
                            <option>S</option>
                            <option>M</option>
                            <option>L</option>
                            <option>XL</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className="w-32">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        QUANTITY
                        </label>
                        <div className="btn-controls">
                          <button className="border-0 shadow-none outline-none bg-transparent cursor-pointer text-sm">
                              &#x2212;
                          </button>
                          <span className="px-2 text-center">2</span>
                          <button className="border-0 shadow-none outline-none bg-transparent cursor-pointer text-sm">
                              &#x2b;
                          </button>
                      </div>
                    </div>
                </div>
                <button 
                  className="bg-main-color focus:outline-none text-white text-sm font-semibold py-4 px-5 rounded-full mt-6" 
                  type="button">
                  ADD TO CART
                </button>
                <div className="mt-8">
                    <h2 className="text-xl uppercase tracking-wider">Product Details</h2>
                    <div className="mt-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, molestias veniam omnis ipsa voluptates labore totam similique quas fugiat alias, praesentium harum optio ad dolorum dolorem ea. Consectetur, eaque alias.</p>
                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat aliquam, similique qui minus placeat enim sed modi delectus, quam fugit molestiae fuga sunt veniam, inventore quae libero velit. Reiciendis, assumenda voluptatem ducimus commodi labore illo nemo qui unde, possimus quaerat nulla! Quidem animi itaque ad voluptas obcaecati repellendus. Commodi.</p>
                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat aliquam, similique qui minus placeat enim sed modi delectus, quam fugit molestiae fuga sunt veniam, inventore quae libero velit. Reiciendis, assumenda voluptatem ducimus commodi labore illo nemo qui unde, possimus quaerat nulla! Quidem animi itaque ad voluptas obcaecati repellendus. Commodi.</p>
                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat aliquam, similique qui minus placeat enim sed modi delectus, quam fugit molestiae fuga sunt veniam, inventore quae libero velit. Reiciendis, assumenda voluptatem ducimus commodi labore illo nemo qui unde, possimus quaerat nulla! Quidem animi itaque ad voluptas obcaecati repellendus. Commodi.</p>
                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quaerat aliquam, similique qui minus placeat enim sed modi delectus, quam fugit molestiae fuga sunt veniam, inventore quae libero velit. Reiciendis, assumenda voluptatem ducimus commodi labore illo nemo qui unde, possimus quaerat nulla! Quidem animi itaque ad voluptas obcaecati repellendus. Commodi.</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ItemDetails