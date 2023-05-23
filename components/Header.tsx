import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Header = (props: Props) => {
  return (
      <header className="flex p-5 justify-between sticky top-0 bg-white z-50 shadow-md">
          <div className="flex space-x-2 items-center">
              <Image
                  alt='logo'
                  width='70'
                  height='70'
                  src='https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?w=740&t=st=1684847186~exp=1684847786~hmac=1bb7b7626f4d9c3cc4d9eb6d92c90aeb97636225fd413af1a3fda1697420bdf1'
              />
              
              <div>
                  <h1 className='font-bold' >
                      FINNEGAN <span className="text-green-800" >AI</span>
                      {' '} Image Generator
                  </h1>
                  <h2 className="text-xs" >
                      Powered by Chat GPT and The Force
                  </h2>
              </div>
            
          </div>
          <div className="flex text-xs md:text-base items-center divide-x">
                  <Link className="text-green-800 px-2 text-right font-light" href={'https://t.me/finneganlucky'}>
                      CONTACT ME IN TELEGRAM
              </Link>
              <span>🇺🇦</span>
              </div>
      </header>
  )
}

export default Header