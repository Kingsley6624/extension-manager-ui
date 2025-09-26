import React from 'react'
import Header from './Header'
import Extension from './Extension'

const Home = () => {
  return (
   <div className="font-sans py-8 px-[5%] flex flex-col gap-10 transition-all duration-300 ease-in-out"
   style={{backgroundImage: 'var(--background-image)'}}>
  <Header />
  <Extension />
</div>
  )
}

export default Home