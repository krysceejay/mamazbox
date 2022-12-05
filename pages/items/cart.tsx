import React, { useState } from 'react'
import type { NextPage } from "next"

//Component
import Layout from '../../components/layouts/Main'

//Types

const Cart: NextPage = () => {
    return (
        <Layout title="Cart">
            <section className="my-8">
                <div className="container">
                    <h2 className="text-2xl uppercase tracking-wider">YOUR CART</h2>
                        <div className="w-full sm:w-3/4">
                            <div className="flex justify-between items-center relative mt-4 border-b py-4">
                                <div className="cart-details pr-8">
                                    <h2 className="text-lg sm:text-xl">Congratulations Mom Gift Box</h2>
                                    <div className="font-semibold text-xl mt-1">£205.00</div>
                                    <div className="mt-4">
                                        <div className="btn-controls">
                                            <button 
                                            className="border-0 shadow-none outline-none bg-transparent cursor-pointer text-sm">
                                                &#x2212;
                                            </button>
                                            <span className="px-2 text-center">2</span>
                                            <button 
                                            className="border-0 shadow-none outline-none bg-transparent cursor-pointer text-sm">
                                                &#x2b;
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-28 h-20 sm:w-1/3">
                                    <img className="w-full h-full object-contain" src="/assets/img/IMGP8697.jpg" alt="item" />
                                </div>
                                <span className="absolute cursor-pointer top-0 right-3">&#x2715;</span>
                            </div>
                            <div className="flex justify-between items-center relative mt-4 border-b py-4">
                                <div className="cart-details pr-8">
                                    <h2 className="text-lg sm:text-xl">Congratulations Mom Gift Box</h2>
                                    <div className="font-semibold text-xl mt-1">£205.00</div>
                                    <div className="mt-4">
                                        <div className="btn-controls">
                                            <button 
                                            className="border-0 shadow-none outline-none bg-transparent cursor-pointer text-sm">
                                                &#x2212;
                                            </button>
                                            <span className="px-2 text-center">2</span>
                                            <button 
                                            className="border-0 shadow-none outline-none bg-transparent cursor-pointer text-sm">
                                                &#x2b;
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-28 h-20 sm:w-1/3">
                                    <img className="w-full h-full object-contain" src="/assets/img/IMGP8697.jpg" alt="item" />
                                </div>
                                <span className="absolute cursor-pointer top-1 right-3">&#x2715;</span>
                            </div>
                            <div className="flex justify-between items-center relative mt-4 border-b py-4">
                                <div className="cart-details pr-8">
                                    <h2 className="text-lg sm:text-xl">Congratulations Mom Gift Box</h2>
                                    <div className="font-semibold text-xl mt-1">£205.00</div>
                                    <div className="mt-4">
                                        <div className="btn-controls">
                                            <button 
                                            className="border-0 shadow-none outline-none bg-transparent cursor-pointer text-sm">
                                                &#x2212;
                                            </button>
                                            <span className="px-2 text-center">2</span>
                                            <button 
                                            className="border-0 shadow-none outline-none bg-transparent cursor-pointer text-sm">
                                                &#x2b;
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-28 h-20 sm:w-1/3">
                                    <img className="w-full h-full object-contain" src="/assets/img/IMGP8697.jpg" alt="item" />
                                </div>
                                <span className="absolute cursor-pointer top-1 right-3">&#x2715;</span>
                            </div>
                            <div className="w-full sm:w-1/2 ml-auto">
                                <div className="mt-8 flex justify-between items-center">
                                    <h2 className="text-lg sm:text-xl">Subtotal</h2>
                                    <div className="font-semibold text-xl">£205.00</div>
                                </div>
                                <button 
                                className="bg-main-color focus:outline-none text-white text-base py-4 px-5 rounded mt-8 w-full" 
                                type="button">
                                Checkout
                                </button>
                            </div>
                        </div>
                </div>
            </section>
        </Layout>
        )
}

export default Cart