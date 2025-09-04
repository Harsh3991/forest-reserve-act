import { useState } from "react"

// --- Mock Data: Example Schemes ---
const schemesData = [
  {
    id: 1,
    name: "Pre Matric Scholarship Scheme",
    tagline: "Supporting tribal children’s education journey.",
    category: "Education",
    icon: "🎓",
    description:
      "Financial assistance for Scheduled Tribe students studying in classes IX and X to reduce dropout rates and encourage completion of secondary education.",
    eligibility:
      "Scheduled Tribe students studying in classes IX and X in government-recognized schools.",
    benefits:
      "Annual scholarship, book and stationery allowance, additional support for hostellers.",
    process:
      "Apply online via the National Scholarship Portal or through your school administration.",
    docsRequired:
      "Caste certificate, income certificate, previous year mark sheet, school ID.",
    officialLink: "https://scholarships.gov.in/",
  },
  {
    id: 2,
    name: "Van Dhan Yojana",
    tagline: "Empowering tribal entrepreneurs in forest produce.",
    category: "Livelihood",
    icon: "🌳",
    description:
      "Aims to improve the livelihoods of tribal gatherers of minor forest produce by establishing Van Dhan Kendras for value addition and marketing.",
    eligibility: "Tribal gatherers of minor forest produce, SHGs, and cooperatives.",
    benefits: "Skill training, infrastructure support, market linkage, financial assistance.",
    process: "Contact your nearest Van Dhan Kendra or apply via TRIFED.",
    docsRequired: "Identity proof, SHG membership, local authority recommendation.",
    officialLink: "https://trifed.tribal.gov.in/",
  },
  {
    id: 3,
    name: "Tribal Health Mission",
    tagline: "Accessible healthcare for every tribal family.",
    category: "Health",
    icon: "🏥",
    description:
      "Focused on improving health outcomes in tribal areas through mobile clinics, free medicines, and health awareness programs.",
    eligibility: "Residents of notified tribal areas.",
    benefits: "Free health checkups, medicines, ambulance services, health camps.",
    process: "Visit your local health center or mobile clinic.",
    docsRequired: "Aadhaar card, local residence proof.",
    officialLink: "https://tribalhealthmission.gov.in/",
  },
  {
    id: 4,
    name: "Forest Rights Support Scheme",
    tagline: "Securing land and forest rights for communities.",
    category: "Forest Rights",
    icon: "🌲",
    description:
      "Provides legal and administrative support to Scheduled Tribes and OTFDs for claiming rights under the Forest Rights Act.",
    eligibility: "Scheduled Tribes and Other Traditional Forest Dwellers.",
    benefits: "Legal aid, documentation support, awareness workshops.",
    process: "Apply through Gram Sabha or district forest office.",
    docsRequired: "Caste certificate, residence proof, claim application.",
    officialLink: "https://forestrights.gov.in/",
  },
  {
    id: 5,
    name: "Tribal Housing Assistance",
    tagline: "Safe and dignified housing for tribal families.",
    category: "Housing",
    icon: "🏠",
    description:
      "Financial grant for construction and upgradation of houses for tribal families under PMAY-G and state schemes.",
    eligibility: "Scheduled Tribe families below poverty line.",
    benefits: "Housing grant, technical support, priority allocation.",
    process: "Apply via local Panchayat or online portal.",
    docsRequired: "Caste certificate, income proof, land ownership document.",
    officialLink: "https://pmayg.nic.in/",
  },
  {
    id: 6,
    name: "Minor Forest Produce Initiative",
    tagline: "Fair prices and market access for forest gatherers.",
    category: "Livelihood",
    icon: "🍃",
    description:
      "Ensures minimum support price and market access for minor forest produce collected by tribal communities.",
    eligibility: "Tribal gatherers of minor forest produce.",
    benefits: "Minimum support price, procurement centers, market linkage.",
    process: "Register with local procurement center.",
    docsRequired: "Identity proof, SHG/Cooperative membership.",
    officialLink: "https://trifed.tribal.gov.in/mfp",
  },
  {
    id: 7,
    name: "Tribal Infrastructure Development",
    tagline: "Building roads, schools, and water supply for progress.",
    category: "Infrastructure",
    icon: "🛤️",
    description:
      "Funds infrastructure projects in tribal areas including roads, schools, water supply, and electrification.",
    eligibility: "Tribal villages and habitations.",
    benefits: "Improved connectivity, education, and basic amenities.",
    process: "Projects initiated via state government proposals.",
    docsRequired: "Village proposal, local authority approval.",
    officialLink: "https://tribal.nic.in/",
  },
]

// --- Categories ---
const categories = [
  { label: "All", value: "All" },
  { label: "Education", value: "Education" },
  { label: "Livelihood", value: "Livelihood" },
  { label: "Health", value: "Health" },
  { label: "Housing", value: "Housing" },
  { label: "Infrastructure", value: "Infrastructure" },
  { label: "Forest Rights", value: "Forest Rights" },
]

// --- Main Component ---
function SchemePage() {
  const [allSchemes] = useState(schemesData)
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")
  const [filteredSchemes, setFilteredSchemes] = useState(schemesData)
  const [selectedScheme, setSelectedScheme] = useState(null)

  // --- Handlers ---
  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase()
    setSearch(e.target.value)
    filterSchemes(keyword, activeCategory)
  }

  const handleCategoryFilter = (category) => {
    setActiveCategory(category)
    filterSchemes(search.toLowerCase(), category)
  }

  const filterSchemes = (keyword, category) => {
    let schemes = allSchemes
    if (category !== "All") {
      schemes = schemes.filter((s) => s.category === category)
    }
    if (keyword) {
      schemes = schemes.filter(
        (s) =>
          s.name.toLowerCase().includes(keyword) ||
          s.tagline.toLowerCase().includes(keyword) ||
          s.category.toLowerCase().includes(keyword)
      )
    }
    setFilteredSchemes(schemes)
  }

  const handleSchemeClick = (scheme) => {
    setSelectedScheme(scheme)
    document.body.style.overflow = "hidden"
  }

  const handleCloseModal = () => {
    setSelectedScheme(null)
    document.body.style.overflow = ""
  }

  // --- Render ---
  return (
    <div className="font-sans bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[320px] w-full mb-12 bg-gradient-to-r from-[#0a3d62] to-emerald-700 text-white shadow-md">
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-serif font-extrabold uppercase tracking-wide mb-4">
            Empowering Communities, Preserving Heritage
          </h1>
          <h2 className="text-lg md:text-xl font-medium opacity-90 mb-6">
            Discover Central Government Schemes for Scheduled Tribes and Forest
            Dwellers
          </h2>
          <div className="flex justify-center">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              placeholder="Search schemes by keyword..."
              className="w-full max-w-lg px-5 py-3 rounded-md border border-gray-300 text-gray-900 text-base shadow-sm focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none"
            />
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <div className="sticky top-0 z-20 bg-white border-y border-gray-200 flex flex-wrap gap-2 px-4 py-3 justify-center shadow-sm">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => handleCategoryFilter(cat.value)}
            className={`px-4 py-1.5 text-sm md:text-base font-semibold uppercase tracking-wide transition
              ${
                activeCategory === cat.value
                  ? "bg-[#0a3d62] text-white shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Scheme Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 pb-20">
        {filteredSchemes.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-16 text-lg font-medium">
            No schemes found. Try another keyword or category.
          </div>
        ) : (
          filteredSchemes.map((scheme) => (
            <div
              key={scheme.id}
              onClick={() => handleSchemeClick(scheme)}
              tabIndex={0}
              role="button"
              className="cursor-pointer relative overflow-hidden rounded-md border border-gray-200 bg-white shadow-md p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition"
            >
              <div className="text-3xl text-[#0a3d62]">{scheme.icon}</div>
              <div>
                <h3 className="text-lg font-bold font-serif text-gray-900">
                  {scheme.name}
                </h3>
                <p className="text-sm text-gray-600">{scheme.tagline}</p>
                <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold bg-gray-100 text-[#0a3d62]">
                  {scheme.category}
                </span>
              </div>
              <button className="absolute bottom-4 right-4 bg-[#0a3d62] text-white text-xs px-3 py-1 rounded-md shadow hover:bg-emerald-700 transition">
                Learn More
              </button>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedScheme && (
        <div
          className="fixed inset-0 z-[999] bg-black/40 flex items-center justify-center cursor-pointer"
          onClick={handleCloseModal}
        >
          <div
            className="bg-white rounded-md border-t-4 border-[#0a3d62] shadow-xl max-w-2xl w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-xl text-gray-500 hover:text-[#0a3d62]"
            >
              &times;
            </button>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl text-[#0a3d62]">
                {selectedScheme.icon}
              </span>
              <h2 className="text-xl font-bold font-serif text-gray-900">
                {selectedScheme.name}
              </h2>
            </div>
            <p className="text-base text-gray-700 mb-3">
              {selectedScheme.tagline}
            </p>

            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <strong className="text-[#0a3d62]">Description:</strong>
                <p>{selectedScheme.description}</p>
              </div>
              <div>
                <strong className="text-[#0a3d62]">Eligibility:</strong>
                <p>{selectedScheme.eligibility}</p>
              </div>
              <div>
                <strong className="text-[#0a3d62]">Benefits:</strong>
                <p>{selectedScheme.benefits}</p>
              </div>
              <div>
                <strong className="text-[#0a3d62]">Application Process:</strong>
                <p>{selectedScheme.process}</p>
              </div>
              <div>
                <strong className="text-[#0a3d62]">Documents Required:</strong>
                <p>{selectedScheme.docsRequired}</p>
              </div>
              <div>
                <strong className="text-[#0a3d62]">Official Link:</strong>
                <a
                  href={selectedScheme.officialLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0a3d62] underline"
                >
                  Visit Official Portal
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SchemePage




// import { useState } from 'react'

// // --- Mock Data: Example Schemes ---
// const schemesData = [
// 	{
// 		id: 1,
// 		name: 'Pre Matric Scholarship Scheme',
// 		tagline: "Supporting tribal children’s education journey.",
// 		category: 'Education',
// 		icon: '🎓',
// 		description:
// 			'Financial assistance for Scheduled Tribe students studying in classes IX and X to reduce dropout rates and encourage completion of secondary education.',
// 		eligibility:
// 			'Scheduled Tribe students studying in classes IX and X in government-recognized schools.',
// 		benefits:
// 			'Annual scholarship, book and stationery allowance, additional support for hostellers.',
// 		process: 'Apply online via the National Scholarship Portal or through your school administration.',
// 		docsRequired:
// 			'Caste certificate, income certificate, previous year mark sheet, school ID.',
// 		officialLink: 'https://scholarships.gov.in/',
// 	},
// 	{
// 		id: 2,
// 		name: 'Van Dhan Yojana',
// 		tagline: 'Empowering tribal entrepreneurs in forest produce.',
// 		category: 'Livelihood',
// 		icon: '🌳',
// 		description:
// 			'Aims to improve the livelihoods of tribal gatherers of minor forest produce by establishing Van Dhan Kendras for value addition and marketing.',
// 		eligibility: 'Tribal gatherers of minor forest produce, SHGs, and cooperatives.',
// 		benefits:
// 			'Skill training, infrastructure support, market linkage, financial assistance.',
// 		process: 'Contact your nearest Van Dhan Kendra or apply via TRIFED.',
// 		docsRequired:
// 			'Identity proof, SHG membership, local authority recommendation.',
// 		officialLink: 'https://trifed.tribal.gov.in/',
// 	},
// 	{
// 		id: 3,
// 		name: 'Tribal Health Mission',
// 		tagline: 'Accessible healthcare for every tribal family.',
// 		category: 'Health',
// 		icon: '🏥',
// 		description:
// 			'Focused on improving health outcomes in tribal areas through mobile clinics, free medicines, and health awareness programs.',
// 		eligibility: 'Residents of notified tribal areas.',
// 		benefits:
// 			'Free health checkups, medicines, ambulance services, health camps.',
// 		process: 'Visit your local health center or mobile clinic.',
// 		docsRequired: 'Aadhaar card, local residence proof.',
// 		officialLink: 'https://tribalhealthmission.gov.in/',
// 	},
// 	{
// 		id: 4,
// 		name: 'Forest Rights Support Scheme',
// 		tagline: 'Securing land and forest rights for communities.',
// 		category: 'Forest Rights',
// 		icon: '🌲',
// 		description:
// 			'Provides legal and administrative support to Scheduled Tribes and OTFDs for claiming rights under the Forest Rights Act.',
// 		eligibility: 'Scheduled Tribes and Other Traditional Forest Dwellers.',
// 		benefits:
// 			'Legal aid, documentation support, awareness workshops.',
// 		process: 'Apply through Gram Sabha or district forest office.',
// 		docsRequired:
// 			'Caste certificate, residence proof, claim application.',
// 		officialLink: 'https://forestrights.gov.in/',
// 	},
// 	{
// 		id: 5,
// 		name: 'Tribal Housing Assistance',
// 		tagline: 'Safe and dignified housing for tribal families.',
// 		category: 'Housing',
// 		icon: '🏠',
// 		description:
// 			'Financial grant for construction and upgradation of houses for tribal families under PMAY-G and state schemes.',
// 		eligibility: 'Scheduled Tribe families below poverty line.',
// 		benefits:
// 			'Housing grant, technical support, priority allocation.',
// 		process: 'Apply via local Panchayat or online portal.',
// 		docsRequired:
// 			'Caste certificate, income proof, land ownership document.',
// 		officialLink: 'https://pmayg.nic.in/',
// 	},
// 	{
// 		id: 6,
// 		name: 'Minor Forest Produce Initiative',
// 		tagline: 'Fair prices and market access for forest gatherers.',
// 		category: 'Livelihood',
// 		icon: '🍃',
// 		description:
// 			'Ensures minimum support price and market access for minor forest produce collected by tribal communities.',
// 		eligibility: 'Tribal gatherers of minor forest produce.',
// 		benefits:
// 			'Minimum support price, procurement centers, market linkage.',
// 		process: 'Register with local procurement center.',
// 		docsRequired: 'Identity proof, SHG/Cooperative membership.',
// 		officialLink: 'https://trifed.tribal.gov.in/mfp',
// 	},
// 	{
// 		id: 7,
// 		name: 'Tribal Infrastructure Development',
// 		tagline: 'Building roads, schools, and water supply for progress.',
// 		category: 'Infrastructure',
// 		icon: '🛤️',
// 		description:
// 			'Funds infrastructure projects in tribal areas including roads, schools, water supply, and electrification.',
// 		eligibility: 'Tribal villages and habitations.',
// 		benefits:
// 			'Improved connectivity, education, and basic amenities.',
// 		process: 'Projects initiated via state government proposals.',
// 		docsRequired: 'Village proposal, local authority approval.',
// 		officialLink: 'https://tribal.nic.in/',
// 	},

// 	// Add more schemes as needed
// ]

// // --- Categories ---
// const categories = [
// 	{ label: 'All', value: 'All' },
// 	{ label: 'Education', value: 'Education' },
// 	{ label: 'Livelihood', value: 'Livelihood' },
// 	{ label: 'Health', value: 'Health' },
// 	{ label: 'Housing', value: 'Housing' },
// 	{ label: 'Infrastructure', value: 'Infrastructure' },
// 	{ label: 'Forest Rights', value: 'Forest Rights' },
// ]

// // --- Main Component ---
// function SchemePage() {
// 	const [allSchemes] = useState(schemesData)
// 	const [search, setSearch] = useState('')
// 	const [activeCategory, setActiveCategory] = useState('All')
// 	const [filteredSchemes, setFilteredSchemes] = useState(schemesData)
// 	const [selectedScheme, setSelectedScheme] = useState(null)

// 	// --- Handlers ---
// 	const handleSearch = e => {
// 		const keyword = e.target.value.toLowerCase()
// 		setSearch(e.target.value)
// 		filterSchemes(keyword, activeCategory)
// 	}

// 	const handleCategoryFilter = category => {
// 		setActiveCategory(category)
// 		filterSchemes(search.toLowerCase(), category)
// 	}

// 	const filterSchemes = (keyword, category) => {
// 		let schemes = allSchemes
// 		if (category !== 'All') {
// 			schemes = schemes.filter(s => s.category === category)
// 		}
// 		if (keyword) {
// 			schemes = schemes.filter(
// 				s =>
// 					s.name.toLowerCase().includes(keyword) ||
// 					s.tagline.toLowerCase().includes(keyword) ||
// 					s.category.toLowerCase().includes(keyword)
// 			)
// 		}
// 		setFilteredSchemes(schemes)
// 	}

// 	const handleSchemeClick = scheme => {
// 		setSelectedScheme(scheme)
// 		document.body.style.overflow = 'hidden'
// 	}

// 	const handleCloseModal = () => {
// 		setSelectedScheme(null)
// 		document.body.style.overflow = ''
// 	}

// 	// --- Card Color Palette ---
// 	const cardGradients = [
// 		'linear-gradient(135deg, #34d399 0%, #10b981 100%)',
// 		'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
// 		'linear-gradient(135deg, #f59e42 0%, #fbbf24 100%)',
// 		'linear-gradient(135deg, #a78bfa 0%, #6366f1 100%)',
// 		'linear-gradient(135deg, #f472b6 0%, #ec4899 100%)',
// 		'linear-gradient(135deg, #22d3ee 0%, #06b6d4 100%)',
// 		'linear-gradient(135deg, #f87171 0%, #ef4444 100%)',
// 	]

// 	// --- Staggered Animation Delay ---
// 	const getCardDelay = idx => `${idx * 80}ms`

// 	// --- Render ---
// 	return (
// 		<div className="schemes-root font-sans bg-white min-h-[100vh]">
// 			{/* Hero Section */}
// 			<section className="schemes-hero relative flex flex-col items-center justify-center min-h-[380px] w-full mb-12">
// 				<div className="absolute inset-0 z-0 schemes-hero-bg"></div>
// 				<div className="relative z-10 w-full max-w-3xl mx-auto text-center px-4 py-12">
// 					<h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
// 						Empowering Communities, Preserving Heritage
// 					</h1>
// 					<h2 className="text-xl md:text-2xl font-semibold text-white mb-8 drop-shadow">
// 						Discover Central Government Schemes for Scheduled Tribes and Forest
// 						Dwellers
// 					</h2>
// 					<div className="flex justify-center items-center w-full mb-4">
// 						<input
// 							type="text"
// 							value={search}
// 							onChange={handleSearch}
// 							placeholder="Search schemes by keyword..."
// 							className="schemes-searchbar w-full max-w-lg px-5 py-3 rounded-xl border-2 border-emerald-400 bg-white text-gray-900 text-lg font-medium shadow focus:border-emerald-600 focus:ring-2 focus:ring-emerald-200 outline-none transition"
// 							autoFocus
// 						/>
// 					</div>
// 				</div>
// 			</section>

// 			{/* Filter Categories */}
// 			<div className="schemes-categories sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-emerald-100 flex gap-3 px-4 py-3 justify-center mb-8">
// 				{categories.map(cat => (
// 					<button
// 						key={cat.value}
// 						className={`schemes-category-badge px-5 py-2 rounded-full font-semibold text-base transition-all
//               ${
// 								activeCategory === cat.value
// 									? 'bg-emerald-500 text-white shadow'
// 									: 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
// 							}
//             `}
// 						onClick={() => handleCategoryFilter(cat.value)}
// 						aria-pressed={activeCategory === cat.value}
// 					>
// 						{cat.label}
// 					</button>
// 				))}
// 			</div>

// 			{/* Scheme Gallery */}
// 			<div className="schemes-gallery grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 pb-20">
// 				{filteredSchemes.length === 0 ? (
// 					<div className="col-span-full text-center text-gray-500 py-16 text-lg font-medium">
// 						No schemes found. Try another keyword or category.
// 					</div>
// 				) : (
// 					filteredSchemes.map((scheme, idx) => (
// 						<div
// 							key={scheme.id}
// 							className="scheme-card cursor-pointer relative overflow-hidden rounded-2xl shadow-lg p-7 flex flex-col gap-4 items-start justify-between transition-all duration-300
//                 hover:scale-[1.03] hover:shadow-2xl focus:scale-[1.03] focus:shadow-2xl outline-none"
// 							style={{
// 								background: cardGradients[idx % cardGradients.length],
// 								color: 'var(--text-dark, #1f2937)',
// 								animation: `fadeInUp 0.7s cubic-bezier(.4,0,.2,1) ${getCardDelay(
// 									idx
// 								)} both`,
// 							}}
// 							tabIndex={0}
// 							role="button"
// 							aria-label={`Learn more about ${scheme.name}`}
// 							onClick={() => handleSchemeClick(scheme)}
// 							onKeyDown={e =>
// 								e.key === 'Enter' ? handleSchemeClick(scheme) : null
// 							}
// 						>
// 							<div className="text-4xl mb-2">{scheme.icon}</div>
// 							<div>
// 								<h3 className="text-xl font-bold mb-1">{scheme.name}</h3>
// 								<p className="text-base font-medium mb-2">
// 									{scheme.tagline}
// 								</p>
// 								<span className="inline-block px-3 py-1 rounded-full bg-white/30 text-sm font-semibold text-gray-900 mb-2">
// 									{scheme.category}
// 								</span>
// 							</div>
// 							<button
// 								className="learn-more-btn absolute bottom-5 right-5 bg-emerald-600 text-white font-semibold px-5 py-2 rounded-xl shadow-lg opacity-0 pointer-events-none transition-all duration-200
//                   scheme-card-hover:opacity-100 scheme-card-hover:pointer-events-auto"
// 								tabIndex={-1}
// 							>
// 								Learn More
// 							</button>
// 						</div>
// 					))
// 				)}
// 			</div>

// 			{/* Modal Overlay */}
// 			{selectedScheme && (
// 				<div
// 					className="scheme-modal-overlay fixed inset-0 z-[999] bg-black/40 flex items-center justify-center"
// 					onClick={handleCloseModal}
// 				>
// 					<div
// 						className="scheme-modal bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative animate-modal-in"
// 						style={{ color: 'var(--text-dark, #1f2937)' }}
// 						onClick={e => e.stopPropagation()}
// 					>
// 						<button
// 							className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-emerald-600 transition"
// 							onClick={handleCloseModal}
// 							aria-label="Close"
// 						>
// 							&times;
// 						</button>
// 						<div className="flex items-center gap-4 mb-4">
// 							<span className="text-4xl">{selectedScheme.icon}</span>
// 							<h2 className="text-2xl font-bold">{selectedScheme.name}</h2>
// 						</div>
// 						<p className="text-lg font-medium mb-3">
// 							{selectedScheme.tagline}
// 						</p>
// 						<div className="mb-4">
// 							<strong className="block mb-1 text-emerald-700">
// 								Description:
// 							</strong>
// 							<p>{selectedScheme.description}</p>
// 						</div>
// 						<div className="mb-4">
// 							<strong className="block mb-1 text-emerald-700">
// 								Eligibility:
// 							</strong>
// 							<p>{selectedScheme.eligibility}</p>
// 						</div>
// 						<div className="mb-4">
// 							<strong className="block mb-1 text-emerald-700">
// 								Benefits:
// 							</strong>
// 							<p>{selectedScheme.benefits}</p>
// 						</div>
// 						<div className="mb-4">
// 							<strong className="block mb-1 text-emerald-700">
// 								Application Process:
// 							</strong>
// 							<p>{selectedScheme.process}</p>
// 						</div>
// 						<div className="mb-4">
// 							<strong className="block mb-1 text-emerald-700">
// 								Documents Required:
// 							</strong>
// 							<p>{selectedScheme.docsRequired}</p>
// 						</div>
// 						<div className="mb-4">
// 							<strong className="block mb-1 text-emerald-700">
// 								Official Link:
// 							</strong>
// 							<a
// 								href={selectedScheme.officialLink}
// 								target="_blank"
// 								rel="noopener noreferrer"
// 								className="text-emerald-600 underline font-semibold hover:text-emerald-800"
// 							>
// 								Visit Official Portal
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 			)}

// 			{/* CSS Styles */}
// 			<style>
// 				{`
//         /* Hero Section */
//         .schemes-hero-bg {
//           background: linear-gradient(135deg, rgba(16,185,129,0.85) 0%, rgba(59,130,246,0.7) 100%), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat;
//           filter: brightness(0.85);
//           position: absolute;
//           inset: 0;
//           z-index: 0;
//         }
//         .schemes-hero {
//           min-height: 380px;
//           box-shadow: 0 4px 32px rgba(16,185,129,0.08);
//         }
//         .schemes-searchbar {
//           box-shadow: var(--shadow, 0 2px 8px rgba(31,41,55,0.08));
//         }

//         /* Categories */
//         .schemes-category-badge {
//           box-shadow: var(--shadow, 0 2px 8px rgba(31,41,55,0.08));
//           cursor: pointer;
//         }

//         /* Gallery & Cards */
//         .schemes-gallery {
//           margin-top: -60px;
//         }
//         .scheme-card {
//           position: relative;
//           min-height: 220px;
//           box-shadow: var(--shadow, 0 2px 8px rgba(31,41,55,0.08));
//           transition: transform 0.2s, box-shadow 0.2s;
//         }
//         .scheme-card:hover,
//         .scheme-card:focus {
//           transform: scale(1.03);
//           box-shadow: 0 8px 32px rgba(16,185,129,0.18), 0 2px 8px rgba(31,41,55,0.08);
//         }
//         .scheme-card:hover .learn-more-btn,
//         .scheme-card:focus .learn-more-btn {
//           opacity: 1;
//           pointer-events: auto;
//         }
//         .learn-more-btn {
//           opacity: 0;
//           pointer-events: none;
//         }
//         .scheme-card:hover .learn-more-btn,
//         .scheme-card:focus .learn-more-btn {
//           opacity: 1;
//           pointer-events: auto;
//         }

//         /* Modal */
//         .scheme-modal-overlay {
//           animation: fadeIn 0.4s cubic-bezier(.4,0,.2,1);
//         }
//         .scheme-modal {
//           animation: modalIn 0.5s cubic-bezier(.4,0,.2,1);
//         }
//         @keyframes modalIn {
//           from { opacity: 0; transform: translateY(40px);}
//           to { opacity: 1; transform: translateY(0);}
//         }
//         @keyframes fadeIn {
//           from { opacity: 0;}
//           to { opacity: 1;}
//         }
//         @keyframes fadeInUp {
//           from { opacity: 0; transform: translateY(30px);}
//           to { opacity: 1; transform: translateY(0);}
//         }

//         /* Responsive */
//         @media (max-width: 700px) {
//           .schemes-hero {
//             min-height: 260px;
//             padding: 2rem 0;
//           }
//           .schemes-gallery {
//             gap: 1.5rem;
//           }
//           .scheme-modal {
//             padding: 1.5rem;
//           }
//         }
//         `}
// 			</style>
// 		</div>
// 	)
// }

// export default SchemePage