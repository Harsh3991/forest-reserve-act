import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div className="about-fra-root font-sans bg-white text-gray-900">
      {/* Official Government Header */}
      <div className="govt-header bg-white border-b border-gray-200 py-3 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-3 md:mb-0">
            <div className="bg-emerald-600 text-white text-xl font-bold px-3 py-2 mr-3">भारत सरकार</div>
            <div className="text-sm font-medium text-gray-700">GOVERNMENT OF INDIA</div>
          </div>
          <div className="text-sm text-emerald-700 font-semibold">MINISTRY OF TRIBAL AFFAIRS</div>
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="about-hero relative flex flex-col items-center justify-center min-h-[380px] w-full bg-emerald-800"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(5, 150, 105, 0.85) 0%, rgba(5, 150, 105, 0.92) 100%), url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderBottom: '4px solid #d1fae5'
        }}
      >
        <div className="relative z-5 w-full max-w-4xl mx-auto text-center px-4 py-12">
          <div className="bg-white/90 rounded-lg p-6 shadow-lg mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-2">
              The Scheduled Tribes and Other Traditional Forest Dwellers
            </h1>
            <h1 className="text-xl md:text-2xl font-bold text-emerald-800">
              (Recognition of Forest Rights) Act, 2006
            </h1>
          </div>
          
          <div className="bg-emerald-700 text-white rounded-lg p-4 shadow-lg">
            <h2 className="text-xl md:text-2xl font-semibold mb-2">
              Undoing Historical Injustice. Securing Rights. Empowering Communities.
            </h2>
            <p className="text-sm md:text-base opacity-90">An initiative of the Ministry of Tribal Affairs, Government of India</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="breadcrumb bg-gray-100 py-2 px-4 border-b border-gray-200">
        <div className="max-w-6xl mx-auto text-sm">
          <Link to="/" className="text-emerald-700 hover:underline">Home</Link> 
          <span className="mx-2 text-gray-500">/</span> 
          <span className="text-gray-600">About Forest Rights Act</span>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Historical Injustice */}
        <section className="narrative-injustice py-10 px-6 bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-emerald-800 border-b-2 border-emerald-200 pb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            The Historical Injustice
          </h2>
          <div className="bg-amber-50 border-l-4 border-amber-400 p-4 mb-6">
            <p className="text-amber-800 text-sm italic">
              "For centuries, tribal communities and forest dwellers lived in harmony with India's forests, nurturing and protecting them as part of their way of life."
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Colonial and post-colonial forest policies systematically excluded these communities, denying them legal recognition and access to their ancestral lands. The result was widespread alienation, displacement, and the erosion of traditional livelihoods.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The <span className="font-semibold text-emerald-700">Forest Rights Act</span> stands as a response to this legacy, seeking to restore dignity and justice to those who have long been marginalized.
          </p>
        </section>

        {/* Turning Point - The FRA, 2006 */}
        <section className="narrative-act py-10 px-6 bg-emerald-50 rounded-lg shadow-sm border border-emerald-100 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-emerald-800 border-b-2 border-emerald-200 pb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            The Turning Point: The Forest Rights Act, 2006
          </h2>
          <div className="bg-white p-5 rounded-lg shadow-xs border border-emerald-100 mb-6">
            <p className="text-emerald-800 leading-relaxed font-medium mb-2">
              The Forest Rights Act (FRA), 2006 recognizes the rights of Scheduled Tribes and Other Traditional Forest Dwellers over forest land and resources, correcting the historical injustice suffered by these communities.
            </p>
            <p className="text-emerald-800 leading-relaxed">
              It empowers them to claim, manage, and conserve forests, ensuring security of tenure, sustainable livelihoods, and the protection of their cultural heritage.
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            The Act is a landmark in India's legal and social history, placing the stewardship of forests in the hands of those who have always cared for them.
          </p>
        </section>

        {/* Rights Recognized - Visual Breakdown */}
        <section className="rights-breakdown py-10 px-6 bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold mb-8 text-emerald-800 text-center border-b-2 border-emerald-200 pb-2">
            Rights Recognized Under FRA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Individual Rights */}
            <div className="bg-white rounded-lg border border-emerald-100 p-6 shadow-xs">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Individual Rights
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><span className="font-semibold">Self-cultivation</span> of forest land for livelihood.</span>
                </li>
                <li className="flex items-start gap-2 text-gray-700">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span><span className="font-semibold">Habitation</span> rights for forest dwellers.</span>
                </li>
              </ul>
            </div>
            
            {/* Community Rights */}
            <div className="bg-white rounded-lg border border-emerald-100 p-6 shadow-xs">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-emerald-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Community Rights
              </h3>
              <ul className="space-y-3">
                {[
                  "Grazing and access to traditional resources",
                  "Fishing and rights over water bodies",
                  "PVTG Habitat and community tenures",
                  "Biodiversity Access and traditional knowledge",
                  "Intellectual Property Rights (IPR)",
                  "Customary Rights and cultural practices",
                  "Community Forest Resource Management"
                ].map((right, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><span className="font-semibold">{right.split(' ')[0]}</span> {right.substring(right.indexOf(' ') + 1)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Gram Sabha's Role */}
        <section className="gram-sabha-role py-10 px-6 bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-emerald-800 border-b-2 border-emerald-200 pb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            The Gram Sabha: Pillar of Empowerment
          </h2>
          <div className="bg-emerald-50 p-5 rounded-lg border border-emerald-100 mb-6">
            <p className="text-emerald-800 font-medium italic border-l-4 border-emerald-500 pl-4">
              "The <span className="font-bold">Gram Sabha</span> is the highly empowered body under the FRA, entrusted with the authority to determine, verify, and safeguard the rights of forest dwellers. It is the cornerstone of self-governance and participatory conservation."
            </p>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Through the Gram Sabha, communities reclaim their voice and agency in managing forests and resources, ensuring that development policies align with their traditional knowledge and needs.
          </p>
        </section>

        {/* Core Objectives Pillars */}
        <section className="objectives-pillars py-10 px-6 bg-white rounded-lg shadow-sm border border-gray-100 mb-8">
          <h2 className="text-2xl font-bold mb-8 text-emerald-800 text-center border-b-2 border-emerald-200 pb-2">
            Core Objectives of the Forest Rights Act
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Undo Historical Injustice",
                description: "Restore dignity and rights to communities long denied recognition and access to their ancestral lands."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                ),
                title: "Ensure Land Tenure & Livelihood Security",
                description: "Provide secure land tenure and sustainable livelihoods for tribal and forest-dwelling communities."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
                  </svg>
                ),
                title: "Strengthen Forest Conservation",
                description: "Entrust communities with the stewardship of forests, promoting conservation and regeneration."
              }
            ].map((pillar, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-100 p-6 shadow-xs flex flex-col items-center text-center">
                <div className="mb-4">{pillar.icon}</div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">{pillar.title}</h3>
                <p className="text-gray-600 text-sm">{pillar.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action & Resources */}
        <section className="cta-resources py-10 px-6 bg-emerald-50 rounded-lg shadow-sm border border-emerald-100">
          <h2 className="text-2xl font-bold mb-6 text-emerald-800 text-center">
            Learn More & Take Action
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <a
              href="http://forestrights.nic.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-6 rounded-lg shadow-sm transition flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              Official FRA Website
            </a>
            <Link
              to="/individual-claim"
              className="bg-white hover:bg-gray-50 text-emerald-700 font-semibold py-3 px-6 rounded-lg shadow-sm border border-emerald-200 transition flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              File a Claim
            </Link>
          </div>
          <p className="text-center text-sm text-emerald-700 mt-6">
            For assistance, contact your local Gram Sabha or District Administration
          </p>
        </section>
      </div>

      {/* Government Footer */}
      <footer className="govt-footer bg-emerald-900 text-white py-8 px-4 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Ministry of Tribal Affairs</h3>
              <p className="text-emerald-100 text-sm">
                Government of India<br />
                Shastri Bhawan, Dr. Rajendra Prasad Road<br />
                New Delhi - 110001
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Important Links</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://tribal.nic.in" className="text-emerald-100 hover:text-white">National Tribal Portal</a></li>
                <li><a href="https://india.gov.in" className="text-emerald-100 hover:text-white">National Government Portal</a></li>
                <li><a href="http://forestrights.nic.in/" className="text-emerald-100 hover:text-white">FRA Official Website</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <p className="text-emerald-100 text-sm">
                Helpline: 1800-11-1967 (Toll Free)<br />
                Email: fra-mta@gov.in
              </p>
            </div>
          </div>
          <div className="border-t border-emerald-700 mt-8 pt-6 text-center text-xs text-emerald-200">
            <p>© {new Date().getFullYear()} Ministry of Tribal Affairs, Government of India. All Rights Reserved.</p>
            <p className="mt-2">This site is best viewed in Chrome, Firefox, Edge and Safari browsers at 1024x768 resolution.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;