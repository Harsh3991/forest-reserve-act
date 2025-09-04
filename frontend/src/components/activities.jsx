import { useNavigate } from 'react-router-dom'

const activities = [
  { label: 'Individual Forest Land Claim (Form A)', path: '/individual-claim' },
  { label: 'Community Rights Claim (Form B)', path: '/community-rights' },
  { label: 'Community Forest Resource Claim (Form C)', path: '/community-forest-resource' },
  { label: 'Check Claim Status', path: '/claim-status' },
  { label: 'View/Download Title', path: '/title-deed' },
]

function Activities() {
  const navigate = useNavigate()
  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {activities.map(activity => (
          <div
            key={activity.label}
            onClick={() => navigate(activity.path)}
            tabIndex={0}
            role="button"
            aria-label={activity.label}
            className="bg-white border border-gray-200 rounded-md shadow-sm p-6 cursor-pointer flex items-center justify-center text-center transition hover:border-[#0a3d62] hover:shadow-md focus:border-[#0a3d62] focus:shadow-md"
          >
            <h3 className="text-base md:text-lg font-serif font-bold text-[#0a3d62] leading-snug">
              {activity.label}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Activities



// import { useNavigate } from 'react-router-dom'

// const activities = [
//   { label: 'Individual Forest Land Claim (Form A)', path: '/individual-claim' },
//   { label: 'Community Rights Claim (Form B)', path: '/community-rights' },
//   { label: 'Community Forest Resource Claim (Form C)', path: '/community-forest-resource' },
//   { label: 'Check Claim Status', path: '/claim-status' },
//   { label: 'View/Download Title', path: '/title-deed' },
// ]

// function Activities() {
//   const navigate = useNavigate()
//   return (
//     <section className="py-8 bg-white">
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//         {activities.map(activity => (
//           <div
//             key={activity.label}
//             className="bg-emerald-500 rounded-xl shadow p-8 cursor-pointer transition-transform outline-none border-none flex items-center justify-center min-h-[120px] hover:scale-105 focus:scale-105"
//             onClick={() => navigate(activity.path)}
//             tabIndex={0}
//             role="button"
//             aria-label={activity.label}
//           >
//             <h3 className="text-white text-lg font-semibold m-0 text-center">{activity.label}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Activities


// const services = [
//   'Apply for Land Validation',
//   'Check Validation Status',
//   'Check Mutation',
//   'View Jamabandi Register',
//   'Bhu-Manchitra',
//   'Form for Filing Mutation through Suo-Moto',
//   'Directorate of Land Records and Survey',
//   'Bihar Land Tribunal',
// ]

// function Activities() {
//   return (
//     <section className="activities-section">
//       <div className="activities-grid">
//         {services.map(service => (
//           <div
//             key={service}
//             className="activity-card"
//             onClick={() => console.log(`Redirect to: ${service}`)}
//             tabIndex={0}
//             role="button"
//             aria-label={service}
//           >
//             <h3>{service}</h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }

// export default Activities