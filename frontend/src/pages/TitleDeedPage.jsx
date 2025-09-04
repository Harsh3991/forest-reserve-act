import { useState } from 'react'

function TitleDeedPage() {
  const [titleDeeds] = useState([
    {
      id: 'FRA-Title-2023-001',
      type: 'Individual Forest Land',
      village: 'Sample Village',
      grantDate: '2023-11-01',
      status: 'Granted',
    },
    {
      id: 'FRA-Title-2023-045',
      type: 'Community Forest Resource',
      village: 'Example Gram Sabha',
      grantDate: '2023-10-15',
      status: 'Granted',
    },
    {
      id: 'FRA-Title-2023-078',
      type: 'Community Forest Rights',
      village: 'Green Valley',
      grantDate: '2024-03-22',
      status: 'Granted',
    },
  ])

  const handleViewTitle = id => {
    console.log(`View Title: ${id}`)
    // Simulate modal or new tab
  }

  const handleDownloadTitle = id => {
    console.log(`Download Title: ${id}`)
    // Simulate download
  }

  return (
    <section className="titles-page bg-white min-h-[80vh] py-8 font-sans text-gray-800">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-emerald-600 text-center">
          My Title Deeds
        </h1>
        {titleDeeds.length === 0 ? (
          <div className="text-center text-gray-500 py-16">
            <p className="text-lg font-medium">
              No title deeds found. Please check the status of your submitted claims.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-6">
            {titleDeeds.map(deed => (
              <div
                key={deed.id}
                className="title-card bg-white rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border border-emerald-100"
                style={{
                  boxShadow: 'var(--shadow, 0 2px 8px rgba(31,41,55,0.08))',
                }}
              >
                <div className="flex-1 flex flex-col gap-2">
                  <div>
                    <span className="font-semibold text-gray-700">Title Deed No:</span>
                    <span className="ml-2">{deed.id}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Type:</span>
                    <span className="ml-2">{deed.type}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Village/Gram Sabha:</span>
                    <span className="ml-2">{deed.village}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Date of Grant:</span>
                    <span className="ml-2">{deed.grantDate}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-700">Status:</span>
                    <span className="ml-2 px-3 py-1 rounded-full font-bold bg-emerald-100 text-emerald-700">
                      {deed.status}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 md:flex-col md:gap-2">
                  <button
                    type="button"
                    onClick={() => handleViewTitle(deed.id)}
                    className="bg-emerald-500 text-white rounded-lg px-5 py-2 font-semibold shadow hover:bg-emerald-600 transition"
                  >
                    View
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDownloadTitle(deed.id)}
                    className="bg-white border-2 border-emerald-400 text-emerald-600 rounded-lg px-5 py-2 font-semibold shadow hover:bg-emerald-50 hover:border-emerald-600 transition"
                  >
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
export default TitleDeedPage