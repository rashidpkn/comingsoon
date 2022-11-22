import React from 'react'


function App() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center  relative text-white">
      <div className="h-full w-full brightness-50 absolute inset-0 mx-auto -z-10 overflow-hidden">


        <video className='hidden lg:block h-full w-full object-cover' playsInline loop="true" autoplay="autoplay" muted>
          <source type="video/mp4" src="/video/cover.mp4"></source>
          <source type="video/ogg" src="/video/cover.ogg"></source>
        </video>

        <img src="/image/banner.jpg" class="lg:hidden h-full w-full object-cover" alt="" />

      </div>

      <Left />

      <Right />
    </div>
  )
}

export default App



function BGVideo() {
  return (

    <video className='hidden lg:flex' width={'100%'} height={"100%"} loop autoplay muted>
      <source src='/video/cover.mp4' type="video/mp4" />
      <source src='/video/cover.webm' type="video/webm" />
      <source src='/video/cover.ogg' type="video/ogg" />
      Your browser does not support the video tag.
    </video>
  )
}

function Left() {
  return (
    <div className="h-full w-full lg:w-[35%] flex flex-col gap-5 justify-center items-center py-5">
      <img src="/image/logo.png" className='w-60' alt="" />

    </div>
  )
}



function Right() {
  return (
    <div className="h-full w-full lg:w-[65%] flex flex-col items-center lg:items-start mg:justify-center px-5 text-white gap-10">
      <div className="flex items-center gap-5">
        <div className="h-[1px] w-10 bg-[#2A3812]" /> <h3>Welcome to BAM BAM BUDZ</h3>
      </div>
      <h2 className='text-7xl lg:w-3/4 text-center lg:text-start'>Stay tuned. We are launching soon..!</h2>
      {/* <p className='opacity-30 lg:w-3/4'>Welcome to BAM BAM BUDZ</p> */}
      <div className="h-14 w-96 flex">
        <input className='bg-white opacity-25 h-full w-4/6 outline-none text-black pl-3' type="text" />
        <button className='h-full w-2/4 bg-[#2A3812]'>NOTIFY ME</button>
      </div>
    </div>
  )
}
