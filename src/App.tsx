import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import RootLayout from '@/layouts/MainLayout'
import Home from '@/pages/home/HomePage'
import { Flashcard } from '@/pages/flashcards/Flashcard'
import { Summarizer } from '@/pages/summarizer/Summarizer'


function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="flashcards" element={<Flashcard />} />
          <Route path="summarizer" element={<Summarizer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
