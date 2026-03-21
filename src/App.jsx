import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Hub from './pages/Hub.jsx'
import Fundamentos from './pages/Fundamentos.jsx'
import Personas from './pages/Personas.jsx'
import JobDescription from './pages/JobDescription.jsx'
import Perguntas from './pages/Perguntas.jsx'
import Mercado from './pages/Mercado.jsx'
import SexyCanvas from './pages/SexyCanvas.jsx'
import Estrategia from './pages/Estrategia.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Hub />} />
        <Route path="fundamentos" element={<Fundamentos />} />
        <Route path="personas" element={<Personas />} />
        <Route path="job-description" element={<JobDescription />} />
        <Route path="perguntas" element={<Perguntas />} />
        <Route path="mercado" element={<Mercado />} />
        <Route path="sexy-canvas" element={<SexyCanvas />} />
        <Route path="estrategia" element={<Estrategia />} />
      </Route>
    </Routes>
  )
}
