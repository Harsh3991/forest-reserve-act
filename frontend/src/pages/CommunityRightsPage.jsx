import { useState } from 'react'

const initialRights = {
  nistar: { claimed: false, details: '' }, // Section 3(1)(b)
  minorForestProduce: { claimed: false, details: '' }, // Section 3(1)(c)
  fishWaterBodies: { claimed: false, details: '' }, // Section 3(1)(d)
  grazing: { claimed: false, details: '' }, // Section 3(1)(d)
  nomadicPastoralist: { claimed: false, details: '' }, // Section 3(1)(d)
  communityTenure: { claimed: false, details: '' }, // Section 3(1)(e)
  biodiversityIP: { claimed: false, details: '' }, // Section 3(1)(k)
  otherTraditionalRight: { claimed: false, details: '' }, // Section 3(1)(l)
}

const initialState = {
  claimantName: '',
  communityType: '', // 'FDST' or 'OTFD'
  isFDST: '',
  isOTFD: '',
  village: '',
  gramPanchayat: '',
  tehsil: '',
  district: '',
  rights: { ...initialRights },
  evidenceFiles: [],
  otherInfo: '',
  signature: '',
}

function CommunityRightsPage() {
  const [form, setForm] = useState(initialState)

  // Simple input change handler
  const handleChange = e => {
    const { name, value, type, files } = e.target
    if (type === 'file') {
      setForm(f => ({
        ...f,
        [name]: Array.from(files),
      }))
    } else {
      setForm(f => ({
        ...f,
        [name]: value,
      }))
    }
  }

  // Toggle right claimed status
  const handleRightChange = rightKey => {
    setForm(f => ({
      ...f,
      rights: {
        ...f.rights,
        [rightKey]: {
          ...f.rights[rightKey],
          claimed: !f.rights[rightKey].claimed,
        },
      },
    }))
  }

  // Update right details
  const handleRightDetailsChange = (rightKey, value) => {
    setForm(f => ({
      ...f,
      rights: {
        ...f.rights,
        [rightKey]: {
          ...f.rights[rightKey],
          details: value,
        },
      },
    }))
  }

  // Community type radio handler
  const handleCommunityTypeChange = e => {
    const { value } = e.target
    setForm(f => ({
      ...f,
      communityType: value,
      isFDST: value === 'FDST' ? 'Yes' : 'No',
      isOTFD: value === 'OTFD' ? 'Yes' : 'No',
    }))
  }

  // Submit handler
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form B Submission:', form)
    alert('Form submitted! (See console for data)')
    setForm(initialState)
  }

  // Rights list for rendering
  const rightsList = [
    {
      key: 'nistar',
      label: 'Community rights such as nistar, if any (Section 3(1)(b))',
      placeholder: 'Describe nistar rights enjoyed by the community',
    },
    {
      key: 'minorForestProduce',
      label: 'Rights over minor forest produce, if any (Section 3(1)(c))',
      placeholder: 'List types of minor forest produce (e.g., tendu patta, bamboo, herbs)',
    },
    {
      key: 'fishWaterBodies',
      label: 'Uses or entitlements (fish, water bodies), if any (Section 3(1)(d))',
      placeholder: 'Describe uses or entitlements over fish, water bodies, etc.',
    },
    {
      key: 'grazing',
      label: 'Grazing, if any (Section 3(1)(d))',
      placeholder: 'Describe grazing areas, number of cattle, etc.',
    },
    {
      key: 'nomadicPastoralist',
      label: 'Traditional resource access for nomadic and pastoralist, if any (Section 3(1)(d))',
      placeholder: 'Describe traditional resource access for nomadic/pastoralist groups',
    },
    {
      key: 'communityTenure',
      label: 'Community tenures of habitat and habitation for PTGs and pre-agricultural communities, if any (Section 3(1)(e))',
      placeholder: 'Describe community tenures of habitat and habitation',
    },
    {
      key: 'biodiversityIP',
      label: 'Right to access biodiversity, intellectual property and traditional knowledge, if any (Section 3(1)(k))',
      placeholder: 'Describe rights to access biodiversity, IP, and traditional knowledge',
    },
    {
      key: 'otherTraditionalRight',
      label: 'Other traditional right, if any (Section 3(1)(l))',
      placeholder: 'Describe any other traditional rights',
    },
  ]

  return (
    <section className="claim-form-page bg-white min-h-[80vh] py-8 font-sans text-gray-800">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-emerald-600 text-center">
          Community Rights Claim (Form B)
        </h1>
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
          {/* Claimant(s) Information */}
          <label htmlFor="claimantName" className="font-semibold">
            Name of the claimant(s) <span className="text-red-500">*</span>
          </label>
          <input
            id="claimantName"
            name="claimantName"
            type="text"
            required
            value={form.claimantName}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100 bg-white text-gray-900 outline-none transition"
            placeholder="Enter name of community or representative body"
          />

          {/* Community Type */}
          <label className="font-semibold mt-2">
            Community Type <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6 mb-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="communityType"
                value="FDST"
                checked={form.communityType === 'FDST'}
                onChange={handleCommunityTypeChange}
                required
                className="accent-emerald-500"
              />
              FDST community (Particularly Vulnerable Tribal Groups)
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="communityType"
                value="OTFD"
                checked={form.communityType === 'OTFD'}
                onChange={handleCommunityTypeChange}
                required
                className="accent-emerald-500"
              />
              OTFD community (Other Traditional Forest Dwellers)
            </label>
          </div>

          {/* Location Details */}
          <label htmlFor="village" className="font-semibold">
            Village <span className="text-red-500">*</span>
          </label>
          <input
            id="village"
            name="village"
            type="text"
            required
            value={form.village}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 focus:border-emerald-600 bg-white text-gray-900 outline-none transition"
            placeholder="Enter Village"
          />

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
            className="w-full p-3 rounded-lg border-2 border-emerald-400 focus:border-emerald-600 bg-white text-gray-900 outline-none transition"
            placeholder="Enter Gram Panchayat"
          />

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
            className="w-full p-3 rounded-lg border-2 border-emerald-400 focus:border-emerald-600 bg-white text-gray-900 outline-none transition"
            placeholder="Enter Tehsil/Taluka"
          />

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
            className="w-full p-3 rounded-lg border-2 border-emerald-400 focus:border-emerald-600 bg-white text-gray-900 outline-none transition"
            placeholder="Enter District"
          />

          {/* Nature of Community Rights Enjoyed */}
          <div className="mt-6 mb-2">
            <label className="font-semibold text-lg block mb-2">
              Nature of Community Rights Enjoyed <span className="text-red-500">*</span>
            </label>
            <small className="block text-gray-500 mb-4">
              (Tick all applicable rights and provide details)
            </small>
            <div className="flex flex-col gap-6">
              {rightsList.map(right => (
                <div
                  key={right.key}
                  className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-2"
                >
                  <label className="flex items-center gap-2 font-medium">
                    <input
                      type="checkbox"
                      checked={form.rights[right.key].claimed}
                      onChange={() => handleRightChange(right.key)}
                      className="accent-emerald-500"
                    />
                    {right.label}
                  </label>
                  {form.rights[right.key].claimed && (
                    <textarea
                      className="w-full mt-3 p-3 rounded-lg border-2 border-emerald-400 focus:border-emerald-600 bg-white text-gray-900 outline-none transition min-h-[60px] resize-y"
                      placeholder={right.placeholder}
                      value={form.rights[right.key].details}
                      onChange={e => handleRightDetailsChange(right.key, e.target.value)}
                      required
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Evidence Upload */}
          <label htmlFor="evidenceFiles" className="font-semibold mt-4">
            Evidence in support (Rule 13) <span className="text-red-500">*</span>
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

          {/* Any other information */}
          <label htmlFor="otherInfo" className="font-semibold mt-4">
            Any other information <span className="text-gray-500">(optional)</span>
          </label>
          <textarea
            id="otherInfo"
            name="otherInfo"
            value={form.otherInfo}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition min-h-[60px] resize-y"
            placeholder="Provide any additional information relevant to the claim"
          />

          {/* Signature/Thumb Impression */}
          <label htmlFor="signature" className="font-semibold mt-4">
            Signature / Thumb Impression of Claimant(s) <span className="text-red-500">*</span>
          </label>
          <input
            id="signature"
            name="signature"
            type="text"
            required
            value={form.signature}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
            placeholder="Enter name or digital signature"
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

export default CommunityRightsPage