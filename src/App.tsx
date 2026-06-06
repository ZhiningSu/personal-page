import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import WorkDetail from '@/pages/WorkDetail'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
      </Routes>
    </BrowserRouter>
  )
}
