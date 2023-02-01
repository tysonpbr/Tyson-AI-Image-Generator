import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logo } from './assets/';
import { Home, CreatePost } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex flex-col sm:flex-row justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <h1 className="font-extrabold text-[#222328] text-[72px] sm:text-[48px] text-center">T.A.I.I.G</h1>

        <div className="space-x-4 flex flex-row justify-between items-center px-4 py-4 border-b">
          <Link to="/" className="font-inter font-medium bg-[#3f4297] text-white px-4 py-2 rounded-md">Showcase</Link>
          <Link to="/create-post" className="font-inter font-medium bg-[#3f4297] text-white px-4 py-2 rounded-md">Create</Link>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#d0d7dd] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App