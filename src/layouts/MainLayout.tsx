import React from 'react'
import { Outlet } from 'react-router'

function MainLayout() {
  return (
  <div className="min-h-screen">
      <nav className="p-6 max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter border-b-4 border-yellow-400">
          DoodleLMS.ai
        </div>
        <div className="flex gap-4">
          <button className="font-bold px-4 py-2 doodle-border hover:bg-yellow-50 transition">
            Login
          </button>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-12">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout