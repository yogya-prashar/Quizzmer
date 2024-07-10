import React from 'react'

function FrontPage(props) {
  return (
    <>
      <section className='flex flex-col justify-center items-center h-dvh bg-blue-300 text-slate-100 font-semibold '> 
      <div>
        <h1 className='text-7xl'>Quizzmer</h1>
        <p className='text-xl mt-4 text-center'>This is a Quizzz Game</p>
        <div className='flex justify-center'>
        <button className='mt-10 text-xl bg-blue-950 w-1/2 h-10 rounded-md' onClick={props.onClick}>Let's Start</button></div>
      </div>
      </section>
    </>
  )
}

export default FrontPage