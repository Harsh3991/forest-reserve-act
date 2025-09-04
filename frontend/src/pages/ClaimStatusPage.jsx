import { useState } from 'react'

function Spinner() {
  return (
    <span className="flex justify-center items-center">
      <span className="inline-block w-6 h-6 border-4 border-emerald-400 border-t-transparent rounded-full animate-spin"></span>
    </span>
  )
}

const statusColors = {
  Approved: 'bg-emerald-100 border-emerald-500 text-emerald-700',
  Rejected: 'bg-red-100 border-red-500 text-red-700',
  'Under Review': 'bg-yellow-100 border-yellow-500 text-yellow-700',
  Pending: 'bg-blue-100 border-blue-500 text-blue-700',
  default: 'bg-gray-100 border-gray-300 text-gray-700',
}

function ClaimStatusPage() {
  const [applicationId, setApplicationId] = useState('')
  const [claimData, setClaimData] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    setClaimData(null)
    setTimeout(() => {
      setClaimData({
        applicationId,
        applicantName: 'Asha Kumari',
        claimType: 'Individual Forest Land',
        submissionDate: '2024-06-01',
        status: 'Under Review',
        lastUpdated: '2024-06-10',
      })
      setLoading(false)
    }, 1200)
  }

  const handleClear = () => {
    setApplicationId('')
    setClaimData(null)
    setLoading(false)
  }

  // Responsive gradient animation
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-2 py-10
      bg-gradient-to-br from-emerald-200 via-emerald-50 to-green-100
      animate-gradient-move transition-all duration-700
      relative overflow-hidden"
      style={{
        backgroundSize: '200% 200%',
        animation: 'gradient-move 8s ease-in-out infinite',
      }}
    >
      <style>
        {`
          @keyframes gradient-move {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
      <div className="w-full max-w-lg mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-700 mb-3 text-center drop-shadow-sm transition-all duration-300">
          Track Your Claim Status
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8 text-center font-medium">
          Enter your unique <span className="font-semibold text-emerald-600">Application ID</span> or Reference Number below to view the current status of your submitted claim (Form A, B, or C).
        </p>
        <form
          className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-emerald-100
            transition-all duration-300"
          onSubmit={handleSubmit}
        >
          <label htmlFor="applicationId" className="font-semibold text-gray-800 text-lg mb-1">
            Application ID
          </label>
          <input
            id="applicationId"
            className="p-4 rounded-xl border-2 border-emerald-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200
              text-base shadow-sm outline-none mb-2 transition-all duration-200
              bg-white placeholder-gray-400 font-medium"
            type="text"
            value={applicationId}
            onChange={e => setApplicationId(e.target.value)}
            placeholder="Enter Application ID"
            required
            autoComplete="off"
          />
          <div className="flex gap-4 justify-end">
            <button
              type="submit"
              className={`flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500
                text-white rounded-xl px-7 py-3 font-bold text-base shadow-lg
                transition-all duration-200 hover:from-emerald-600 hover:to-green-600
                active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-emerald-300`}
              disabled={loading || !applicationId}
            >
              {loading ? <Spinner /> : 'Submit'}
            </button>
            <button
              type="button"
              onClick={handleClear}
              className="bg-white border-2 border-emerald-400 text-emerald-600 rounded-xl px-7 py-3 font-semibold text-base shadow-lg
                transition-all duration-200 hover:bg-emerald-50 hover:border-emerald-600
                active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed
                focus:outline-none focus:ring-2 focus:ring-emerald-200"
              disabled={loading && !claimData}
            >
              Clear
            </button>
          </div>
        </form>
        <div className="mt-8 transition-all duration-500">
          {claimData && (
            <div
              className={`rounded-2xl shadow-2xl border-2 p-8 w-full mx-auto
                flex flex-col gap-4
                transition-all duration-500 animate-fade-in
                ${statusColors[claimData.status] || statusColors.default}`}
              style={{ minWidth: 0 }}
            >
              <h2 className="text-2xl font-bold mb-2 text-center tracking-wide">
                Claim Status
              </h2>
              <div className="flex flex-col gap-2 text-lg font-medium">
                <div>
                  <span className="font-semibold text-gray-700">Application ID:</span>
                  <span className="ml-2">{claimData.applicationId}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Applicant Name:</span>
                  <span className="ml-2">{claimData.applicantName}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Type of Claim:</span>
                  <span className="ml-2">{claimData.claimType}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Date of Submission:</span>
                  <span className="ml-2">{claimData.submissionDate}</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Current Status:</span>
                  <span className={`ml-2 px-3 py-1 rounded-full font-bold
                    transition-colors duration-300
                    ${
                      claimData.status === 'Approved'
                        ? 'bg-emerald-200 text-emerald-700'
                        : claimData.status === 'Rejected'
                        ? 'bg-red-200 text-red-700'
                        : claimData.status === 'Under Review'
                        ? 'bg-yellow-200 text-yellow-700'
                        : 'bg-gray-200 text-gray-700'
                    }
                  `}>
                    {claimData.status}
                  </span>
                </div>
                <div>
                  <span className="font-semibold text-gray-700">Last Updated:</span>
                  <span className="ml-2">{claimData.lastUpdated}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 0.7s cubic-bezier(.4,0,.2,1);
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px);}
            to { opacity: 1; transform: translateY(0);}
          }
        `}
      </style>
    </section>
  )
}

export default ClaimStatusPage