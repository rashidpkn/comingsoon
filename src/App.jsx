import React from 'react'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row justify-center items-center  relative text-white">
      <img src="/image/banner.jpg" class="h-full w-full object-top object-cover brightness-50 absolute inset-0 mx-auto -z-10" alt="" />

      <Left />

      <Right />
    </div>
  )
}

export default App


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
        <div className="h-[1px] w-10 bg-[#ec008c]" /> <h3>WELCOME TO COUNT</h3>
      </div>
      <h2 className='text-7xl lg:w-3/4'>We are currently working
        on a new super awesome
        website.</h2>
      <p className='opacity-30 lg:w-3/4'>Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Nulla quis lorem ut libero malesuada feugiat.</p>
      <div className="h-14 w-96 flex">
        <input className='bg-white opacity-25 h-full w-4/6 outline-none text-black pl-3' type="text" />
        <button className='h-full w-2/4 bg-[#ec008c]'>NOTIFY ME</button>
      </div>
    </div>
  )
}
//  <div className="flex items-center gap-5">
//         <div className="h-[1px] w-10 bg-[#ec008c]" /> <h3>LAUNCHING IN</h3>
//       </div>
//       <div className="flex relative gap-3">
//         <h2 className='text-9xl'>00</h2>
//         <span className='bg-[#ec008c] absolute -right-14 bottom-0 text-2xl font-semibold p-1 px-2 rounded-md '>day</span>
//       </div>
//       <div className="w-full flex justify-center gap-7">
//         <span className='text-3xl'>00 <span className='text-xl text-white/70'>H</span></span>
//         <span className='text-3xl'>00 <span className='text-xl text-white/70'>M</span></span>
//         <span className='text-3xl'>00 <span className='text-xl text-white/70'>S</span></span>
//       </div>