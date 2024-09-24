import React from 'react'
import Image from 'next/image'
function Hero() {
  return (
    <section className="bg-gray-50">
  <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Money Tracker
        <strong className="font-extrabold text-red-700 sm:block"> Navigate your finances with ease and clarity</strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      Effortlessly track your expenses and gain control of your finances with MoneyRadar – your simple, secure, and intuitive budgeting solution.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
          href="#"
        >
          Get Started
        </a>
         
    <Image src = '/Dashboard.png' alt='dashboard'
    width={1000}
    height={700}
    className='mt-5 rounded-xl border-2'
    />
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero