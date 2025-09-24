import React from 'react'
import Header from './Header'
import Extension from './Extension'

const Home = () => {
  return (
   <div className="font-sans py-8 px-[5%] flex flex-col gap-10"
   style={{backgroundImage: 'var(--background-image)'}}>
  <Header />
  <Extension />
</div>
  )
}

export default Home