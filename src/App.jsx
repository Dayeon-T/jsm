import { useState } from 'react'
import Home from './pages/Home'
import About from './pages/About'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      default:
        return <Home />
    }
  }

  return (
    <div className="w-full min-h-screen flex flex-col bg-gray-900 dark:bg-gray-900">
      <nav className="flex flex-col md:flex-row justify-center gap-2 md:gap-4 p-6 bg-white/10 dark:bg-white/10 backdrop-blur-lg border-b border-white/10">
        <button
          className={`w-full md:w-auto px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
            currentPage === 'home'
              ? 'bg-indigo-600 border-2 border-indigo-600 text-white'
              : 'bg-transparent border-2 border-white/20 text-white/87 hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5'
          }`}
          onClick={() => setCurrentPage('home')}
        >
          홈
        </button>
        <button
          className={`w-full md:w-auto px-6 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
            currentPage === 'about'
              ? 'bg-indigo-600 border-2 border-indigo-600 text-white'
              : 'bg-transparent border-2 border-white/20 text-white/87 hover:bg-white/10 hover:border-white/40 hover:-translate-y-0.5'
          }`}
          onClick={() => setCurrentPage('about')}
        >
          소개
        </button>
      </nav>
      <main className="flex-1 flex items-center justify-center p-8">
        {renderPage()}
      </main>
    </div>
  )
}

export default App

