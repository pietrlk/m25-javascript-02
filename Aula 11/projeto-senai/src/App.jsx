import './App.css'
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import Sidebar from './componentes/Sidebar';
import { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './componentes/Dashboard';
import Relatorios from './componentes/Relatorios';
import Perfil from './componentes/Perfil';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const closeSidebar = () => setInSidebar(false)
  return (
    <div className='contentor'>
      <BrowserRouter>  
      <Header onToggleMenu={() => setIsSidebarOpen(v => !v)}/>
      <div className='fundo'>
      <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
      <main className='page-body'>
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/Relatorios' element={<Relatorios />}></Route>
        <Route path='/Perfil' element={<Perfil />}></Route>
      </Routes>
      </main>
      </div>
      <Footer />
      </BrowserRouter>
      </div>
    
  )
}

export default App
