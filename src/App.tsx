import { BrowserRouter, Route, Routes } from 'react-router'
import { ThemeProvider } from './components/theme-provider'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/home'
import ContactPage from './pages/contact'
import PortofolioPage from './pages/porto'
import SKillsPage from './pages/skills'
import AboutPage from './pages/about'

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme='light' storageKey='vite-ui-theme'>
        <MainLayout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/skills" element={<SKillsPage />} />
            <Route path="/portofolio" element={<PortofolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </MainLayout>
      </ThemeProvider>
    </BrowserRouter>
  )
}
