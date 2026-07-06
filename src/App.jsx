import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Cursor from './components/ui/Cursor'
import Loader from './components/ui/Loader'
import PageTransition from './components/ui/PageTransition'

const Home     = lazy(() => import('./Pages/Home'))
const About    = lazy(() => import('./Pages/About'))
const Services = lazy(() => import('./Pages/Services'))
const Gallery  = lazy(() => import('./Pages/Gallery'))
const Blog     = lazy(() => import('./Pages/Blog'))
const BlogPost = lazy(() => import('./Pages/BlogPost'))
const Contact  = lazy(() => import('./Pages/Contact'))
const NotFound = lazy(() => import('./Pages/NotFound'))

function ScrollReset() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function Layout() {
  return (
    <>
      <ScrollReset />
      {/* Cursor active across all pages, header to footer */}
      <Cursor />
      <Navbar />
      <PageTransition>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/"               element={<Home />} />
            <Route path="/about"          element={<About />} />
            <Route path="/services"       element={<Services />} />
            <Route path="/services/:slug" element={<Services />} />
            <Route path="/gallery"        element={<Gallery />} />
            <Route path="/blog"           element={<Blog />} />
            <Route path="/blog/:slug"     element={<BlogPost />} />
            <Route path="/contact"        element={<Contact />} />
            <Route path="*"               element={<NotFound />} />
          </Routes>
        </Suspense>
      </PageTransition>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </ThemeProvider>
  )
}
