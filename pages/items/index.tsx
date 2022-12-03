import type { NextPage } from "next"
import Link from "next/link"

import Layout from '../../components/layouts/Main'

const Items: NextPage = () => {
    return (
        <Layout title="Shop">
            <section className="mt-8">
                <div className="container">
                    <div>
                        <h2 className="text-2xl uppercase tracking-wider">All Items</h2>
                        <span className="font-light text-sm">Gifts for Expectant & New Moms</span>
                        <div className="mt-8 block sm:flex items-center sm:space-x-6">
                            <h2>FILTER BY:</h2>
                            <div className="flex items-center flex-wrap sm:space-x-4 mt-2">
                                <div className="relative mr-2 mb-2 sm:mr-0 sm:w-40">
                                    <select className="block appearance-none w-full bg-gray-100 border-0 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-gray-100" id="grid-state">
                                        <option>PRODUCT STATUS</option>
                                        <option>Price</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                                <div className="relative mb-2 sm:w-40">
                                    <select className="block appearance-none w-full bg-gray-100 border-0 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-gray-100" id="grid-state">
                                        <option>CATEGORY</option>
                                        <option>Price</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                                <div className="relative ml-2 mb-2 sm:ml-0 sm:w-40">
                                    <select className="block appearance-none w-full bg-gray-100 border-0 text-gray-700 py-3 px-4 pr-8 rounded focus:outline-none focus:bg-gray-100" id="grid-state">
                                        <option>SORT BY</option>
                                        <option>Price</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-4 mb-16">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6 mt-8">
                        <Link href={`/items/1`} className="bg-gray-100 rounded-md overflow-hidden">
                            <img className="w-full h-64 md:h-80 object-cover" src="/assets/img/IMGP8663.jpg" />
                            <div className="m-4">
                            <div className="text-xl sm:text-base md:text-xl font-light">The Spa Mini Gift Box for Mom</div>
                            <span className="block text-2xl font-semibold">£68.00</span>
                            </div>
                        </Link>
                        <Link href={`/items/2`} className="bg-gray-100 rounded-md overflow-hidden">
                            <img className="w-full h-64 md:h-80 object-cover" src="/assets/img/IMGP8671.jpg" />
                            <div className="m-4">
                            <div className="text-xl sm:text-base md:text-xl font-light">Thank You Mom Gift Box</div>
                            <span className="block text-2xl font-semibold">£68.00</span>
                            </div>
                        </Link>
                        <Link href={`/items/3`} className="bg-gray-100 rounded-md overflow-hidden">
                            <img className="w-full h-64 md:h-80 object-cover" src="/assets/img/IMGP8696.jpg" />
                            <div className="m-4">
                            <div className="text-xl sm:text-base md:text-xl font-light">Congratulations Mom Gift Box</div>
                            <span className="block text-2xl font-semibold">£68.00</span>
                            </div>
                        </Link>
                        <Link href={`/items/2`} className="bg-gray-100 rounded-md overflow-hidden">
                            <img className="w-full h-64 md:h-80 object-cover" src="/assets/img/IMGP8671.jpg" />
                            <div className="m-4">
                            <div className="text-xl sm:text-base md:text-xl font-light">Thank You Mom Gift Box</div>
                            <span className="block text-2xl font-semibold">£68.00</span>
                            </div>
                        </Link>
                        <Link href={`/items/3`} className="bg-gray-100 rounded-md overflow-hidden">
                            <img className="w-full h-64 md:h-80 object-cover" src="/assets/img/IMGP8696.jpg" />
                            <div className="m-4">
                            <div className="text-xl sm:text-base md:text-xl font-light">Congratulations Mom Gift Box</div>
                            <span className="block text-2xl font-semibold">£68.00</span>
                            </div>
                        </Link>
                        <Link href={`/items/3`} className="bg-gray-100 rounded-md overflow-hidden">
                            <img className="w-full h-64 md:h-80 object-cover" src="/assets/img/IMGP8696.jpg" />
                            <div className="m-4">
                            <div className="text-xl sm:text-base md:text-xl font-light">Congratulations Mom Gift Box</div>
                            <span className="block text-2xl font-semibold">£68.00</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </Layout>
        )
}

export default Items