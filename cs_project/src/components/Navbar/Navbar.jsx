import React from 'react'

function Navbar() {
  return (
    <div className = 'fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white show-lg flex flex-col justify-between'>
      <div className = 'p-4'>
        <h2 className = 'text-2xl font-semibold mb-4'>Home</h2>
        <h2 className = 'text-2xl font-semibodl mb-4'>LLM</h2>
      </div>
    </div>
  )
}

export default Navbar
