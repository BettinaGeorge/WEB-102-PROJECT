import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import Create from './components/Create'
import Gallery from './components/Gallery'
import './styles.css'
import Detail from './components/Detail'
import Edit from './components/Edit'



export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
