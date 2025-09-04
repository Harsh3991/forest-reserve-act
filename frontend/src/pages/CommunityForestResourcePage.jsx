import { useState } from 'react'

const initialMember = { name: '', status: '' }

const initialState = {
  village: '',
  gramPanchayat: '',
  tehsil: '',
  district: '',
  members: [{ ...initialMember }],
  resourceDescription: '',
  mapFile: null,
  khasraNumber: '',
  borderingVillages: ['', '', ''],
  sharingInfo: '',
  evidenceFiles: [],
  signature: '',
}

function CommunityForestResourcePage() {
  const [form, setForm] = useState(initialState)

  // Handle simple input changes
  const handleChange = e => {
    const { name, value, type, files } = e.target
    if (type === 'file') {
      setForm(f => ({
        ...f,
        [name]: name === 'evidenceFiles'
          ? Array.from(files)
          : files[0] || null,
      }))
    } else {
      setForm(f => ({
        ...f,
        [name]: value,
      }))
    }
  }

  // Handle member changes
  const handleMemberChange = (idx, field, value) => {
    setForm(f => ({
      ...f,
      members: f.members.map((m, i) =>
        i === idx ? { ...m, [field]: value } : m
      ),
    }))
  }

  // Add another member
  const handleAddMember = () => {
    setForm(f => ({
      ...f,
      members: [...f.members, { ...initialMember }],
    }))
  }

  // Remove member
  const handleRemoveMember = idx => {
    setForm(f => ({
      ...f,
      members: f.members.filter((_, i) => i !== idx),
    }))
  }

  // Handle bordering villages
  const handleBorderingVillageChange = (idx, value) => {
    setForm(f => ({
      ...f,
      borderingVillages: f.borderingVillages.map((v, i) =>
        i === idx ? value : v
      ),
    }))
  }

  // Submit handler
  const handleSubmit = e => {
    e.preventDefault()
    // For now, just log the form data
    console.log('Form C Submission:', form)
    alert('Form submitted! (See console for data)')
    setForm(initialState)
  }

  return (
    <section className="claim-form-page bg-white min-h-[80vh] py-8 font-sans text-gray-800">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-emerald-600 text-center">
          Community Forest Resource Claim (Form C)
        </h1>
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
          {/* Village/Gram Sabha */}
          <label htmlFor="village" className="font-semibold">
            Village/Gram Sabha <span className="text-red-500">*</span>
          </label>
          <input
            id="village"
            name="village"
            type="text"
            required
            value={form.village}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 bg-white text-gray-900 outline-none transition"
            placeholder="Enter Gram Sabha name"
          />

          {/* Gram Panchayat */}
          <label htmlFor="gramPanchayat" className="font-semibold">
            Gram Panchayat <span className="text-red-500">*</span>
          </label>
          <input
            id="gramPanchayat"
            name="gramPanchayat"
            type="text"
            required
            value={form.gramPanchayat}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 bg-white text-gray-900 outline-none transition"
            placeholder="Enter Gram Panchayat"
          />

          {/* Tehsil/Taluka */}
          <label htmlFor="tehsil" className="font-semibold">
            Tehsil/Taluka <span className="text-red-500">*</span>
          </label>
          <input
            id="tehsil"
            name="tehsil"
            type="text"
            required
            value={form.tehsil}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 bg-white text-gray-900 outline-none transition"
            placeholder="Enter Tehsil/Taluka"
          />

          {/* District */}
          <label htmlFor="district" className="font-semibold">
            District <span className="text-red-500">*</span>
          </label>
          <input
            id="district"
            name="district"
            type="text"
            required
            value={form.district}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 bg-white text-gray-900 outline-none transition"
            placeholder="Enter District"
          />

          {/* Members */}
          <div className="mt-6">
            <label className="font-semibold">
              List of Gram Sabha Members <span className="text-red-500">*</span>
            </label>
            <small className="block text-gray-500 mb-2">
              (Add all signatories. Status required: Scheduled Tribe / Other Traditional Forest Dweller)
            </small>
            {form.members.map((member, idx) => (
              <div key={idx} className="flex gap-3 items-center mb-2">
                <input
                  type="text"
                  required
                  value={member.name}
                  onChange={e => handleMemberChange(idx, 'name', e.target.value)}
                  placeholder="Member Name"
                  className="flex-2 w-full p-3 rounded-lg border-2 border-emerald-400 focus:border-emerald-600 bg-white text-gray-900 outline-none transition"
                />
                <select
                  required
                  value={member.status}
                  onChange={e => handleMemberChange(idx, 'status', e.target.value)}
                  className="flex-1 min-w-[140px] p-3 rounded-lg border-2 border-emerald-400 focus:border-emerald-600 bg-white text-gray-900 outline-none transition"
                >
                  <option value="">Status</option>
                  <option value="Scheduled Tribe">Scheduled Tribe</option>
                  <option value="Other Traditional Forest Dweller">Other Traditional Forest Dweller</option>
                </select>
                {form.members.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveMember(idx)}
                    className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-xl font-bold ml-2 hover:bg-red-600 transition"
                    aria-label="Remove member"
                  >
                    &times;
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddMember}
              className="bg-emerald-500 text-white rounded-lg px-4 py-2 font-semibold mt-2 shadow hover:bg-emerald-600 transition"
            >
              Add Another Member
            </button>
          </div>

          {/* Resource Description */}
          <label htmlFor="resourceDescription" className="font-semibold mt-4">
            Community Forest Resource Description <span className="text-red-500">*</span>
          </label>
          <textarea
            id="resourceDescription"
            name="resourceDescription"
            required
            value={form.resourceDescription}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 bg-white text-gray-900 outline-none transition min-h-[100px] resize-y"
            placeholder="We, the undersigned residents of the above Gram Sabha, hereby resolve that..."
          />

          {/* Map Upload */}
          <label htmlFor="mapFile" className="font-semibold">
            Attach Map of Community Forest Resource <span className="text-red-500">*</span>
          </label>
          <input
            id="mapFile"
            name="mapFile"
            type="file"
            required
            accept="image/*,application/pdf"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
          />

          {/* Khasra/Compartment Number */}
          <label htmlFor="khasraNumber" className="font-semibold">
            Khasra/Compartment Number(s) <span className="text-gray-500">(optional)</span>
          </label>
          <input
            id="khasraNumber"
            name="khasraNumber"
            type="text"
            value={form.khasraNumber}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
            placeholder="Enter Khasra/Compartment Number(s) if any"
          />

          {/* Bordering Villages */}
          <label className="font-semibold">
            Bordering Villages <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-3 mb-2">
            {form.borderingVillages.map((village, idx) => (
              <input
                key={idx}
                type="text"
                required
                value={village}
                onChange={e => handleBorderingVillageChange(idx, e.target.value)}
                className="flex-1 p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
                placeholder={`Bordering Village ${idx + 1}`}
              />
            ))}
          </div>

          {/* Sharing of Resources */}
          <label htmlFor="sharingInfo" className="font-semibold">
            Sharing of Resources/Responsibilities with Other Villages <span className="text-gray-500">(optional)</span>
          </label>
          <textarea
            id="sharingInfo"
            name="sharingInfo"
            value={form.sharingInfo}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition min-h-[60px] resize-y"
            placeholder="Describe any sharing of resources or responsibilities with other villages"
          />

          {/* Evidence Upload */}
          <label htmlFor="evidenceFiles" className="font-semibold">
            Upload Supporting Evidence (Rule 13) <span className="text-red-500">*</span>
          </label>
          <input
            id="evidenceFiles"
            name="evidenceFiles"
            type="file"
            required
            multiple
            accept="image/*,application/pdf"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
          />

          {/* Signature/Thumb Impression */}
          <label htmlFor="signature" className="font-semibold">
            Digital Signature / Thumb Impression <span className="text-red-500">*</span>
          </label>
          <input
            id="signature"
            name="signature"
            type="text"
            required
            value={form.signature}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
            placeholder="Enter your name or digital signature"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-emerald-600 text-white font-semibold text-lg rounded-xl px-8 py-3 mt-6 shadow hover:bg-emerald-700 transition"
          >
            Submit Claim
          </button>
        </form>
      </div>
    </section>
  )
}

// Inline styles for inputs/buttons (matches site aesthetic)
const inputStyle = {
  width: '100%',
  padding: '0.8rem 1rem',
  borderRadius: '0.75rem',
  border: '1.5px solid #34d399', // changed from #d1fae5 to #34d399 for a darker emerald border
  margin: '0.5rem 0 1.2rem',
  fontSize: '1rem',
  background: 'var(--background, #fff)',
  color: 'var(--text-dark, #1f2937)',
  boxSizing: 'border-box',
  outline: 'none',
  transition: 'border-color 0.2s',
}

const addBtnStyle = {
  background: 'var(--emerald, #10b981)',
  color: '#fff',
  border: 'none',
  borderRadius: '0.75rem',
  padding: '0.5rem 1.2rem',
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  marginTop: 4,
  boxShadow: 'var(--shadow, 0 2px 8px rgba(31,41,55,0.08))',
}

const removeBtnStyle = {
  background: '#ef4444',
  color: '#fff',
  border: 'none',
  borderRadius: '50%',
  width: 32,
  height: 32,
  fontSize: '1.3rem',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginLeft: 8,
}

export default CommunityForestResourcePage