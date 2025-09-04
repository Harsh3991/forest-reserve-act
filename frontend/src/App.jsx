import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import MainPage from './components/mainPage.jsx'
import Activities from './components/activities.jsx'
import Footer from './components/footer.jsx'
import IndividualClaimPage from './pages/IndividualClaimPage.jsx'
import CommunityRightsPage from './pages/CommunityRightsPage.jsx'
import CommunityForestResourcePage from './pages/CommunityForestResourcePage.jsx'
import ClaimStatusPage from './pages/ClaimStatusPage.jsx'
import TitleDeedPage from './pages/TitleDeedPage.jsx'
import SchemePage from './pages/SchemePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col gap-8">
          <Routes>
            <Route path="/" element={
              <>
                <MainPage />
                <Activities />
              </>
            } />
            <Route path="/individual-claim" element={<IndividualClaimPage />} />
            <Route path="/community-rights" element={<CommunityRightsPage />} />
            <Route path="/community-forest-resource" element={<CommunityForestResourcePage />} />
            <Route path="/claim-status" element={<ClaimStatusPage />} />
            <Route path="/title-deed" element={<TitleDeedPage />} />
            <Route path="/scheme" element={<SchemePage />} />
            <Route path="/about-us" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
