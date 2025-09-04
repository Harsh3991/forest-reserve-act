import { useState } from 'react'

const initialFamilyMember = { name: '', age: '', relationship: '' }

const initialLandClaims = {
  habitation: { claimed: false, extent: '' }, // Section 3(1)(a)
  selfCultivation: { claimed: false, extent: '' }, // Section 3(1)(a)
  disputedLand: { claimed: false, details: '' }, // Section 3(1)(f)
  pattasLeasesGrants: { claimed: false, details: '' }, // Section 3(1)(g)
  rehabilitationLand: { claimed: false, extent: '' }, // Section 3(1)(m)
  displacedLand: { claimed: false, details: '' }, // Section 4(8)
  forestVillageLand: { claimed: false, extent: '' }, // Section 3(1)(h)
  otherTraditionalRight: { claimed: false, details: '' }, // Section 3(1)(l)
}

const initialState = {
  claimantName: '',
  spouseName: '',
  parentName: '',
  address: '',
  village: '',
  gramPanchayat: '',
  tehsil: '',
  district: '',
  category: '', // 'ST' or 'OTFD'
  isST: '',
  isOTFD: '',
  familyMembers: [{ ...initialFamilyMember }],
  landClaims: { ...initialLandClaims },
  evidenceFiles: [],
  otherInfo: '',
  signatureFile: null,
}

function IndividualClaimPage() {
  const [form, setForm] = useState(initialState)

  // Simple input change handler
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

  // Family member change
  const handleFamilyMemberChange = (idx, field, value) => {
    setForm(f => ({
      ...f,
      familyMembers: f.familyMembers.map((m, i) =>
        i === idx ? { ...m, [field]: value } : m
      ),
    }))
  }

  // Add another family member
  const handleAddFamilyMember = () => {
    setForm(f => ({
      ...f,
      familyMembers: [...f.familyMembers, { ...initialFamilyMember }],
    }))
  }

  // Remove family member
  const handleRemoveFamilyMember = idx => {
    setForm(f => ({
      ...f,
      familyMembers: f.familyMembers.filter((_, i) => i !== idx),
    }))
  }

  // Land claim checkbox and details
  const handleLandClaimChange = (key, field, value) => {
    setForm(f => ({
      ...f,
      landClaims: {
        ...f.landClaims,
        [key]: {
          ...f.landClaims[key],
          [field]: field === 'claimed' ? value : value,
        },
      },
    }))
  }

  // Category radio handler
  const handleCategoryChange = e => {
    const { value } = e.target
    setForm(f => ({
      ...f,
      category: value,
      isST: value === 'ST' ? 'Yes' : 'No',
      isOTFD: value === 'OTFD' ? 'Yes' : 'No',
    }))
  }

  // Submit handler
  const handleSubmit = e => {
    e.preventDefault()
    console.log('Form A Submission:', form)
    alert('Form submitted! (See console for data)')
    setForm(initialState)
  }

  // Land claims list for rendering
  const landClaimsList = [
    {
      key: 'habitation',
      label: 'Claim for habitation (Section 3(1)(a))',
      type: 'extent',
      placeholder: 'Extent of land (hectares/acres)',
    },
    {
      key: 'selfCultivation',
      label: 'Claim for self-cultivation, if any (Section 3(1)(a))',
      type: 'extent',
      placeholder: 'Extent of land (hectares/acres)',
    },
    {
      key: 'disputedLand',
      label: 'Disputed lands, if any (Section 3(1)(f))',
      type: 'details',
      placeholder: 'Details of disputed land',
    },
    {
      key: 'pattasLeasesGrants',
      label: 'Pattas/leases/grants, if any (Section 3(1)(g))',
      type: 'details',
      placeholder: 'Document numbers, year, etc.',
    },
    {
      key: 'rehabilitationLand',
      label: 'Land for in situ rehabilitation or alternative land, if any (Section 3(1)(m))',
      type: 'extent',
      placeholder: 'Extent of land (hectares/acres)',
    },
    {
      key: 'displacedLand',
      label: 'Land from where displaced without land compensation (Section 4(8))',
      type: 'details',
      placeholder: 'Year of displacement, location, etc.',
    },
    {
      key: 'forestVillageLand',
      label: 'Extent of land in forest villages, if any (Section 3(1)(h))',
      type: 'extent',
      placeholder: 'Extent of land (hectares/acres)',
    },
    {
      key: 'otherTraditionalRight',
      label: 'Any other traditional right, if any (Section 3(1)(l))',
      type: 'details',
      placeholder: 'Describe other traditional rights',
    },
  ]

  return (
    <section className="claim-form-page bg-white min-h-[80vh] py-8 font-sans text-gray-800">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-8 text-emerald-600 text-center">
          Individual Forest Land Claim (Form A)
        </h1>
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
          {/* Personal Details */}
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
            placeholder="Enter claimant's name"
          />

          <label htmlFor="spouseName" className="font-semibold">
            Name of the spouse
          </label>
          <input
            id="spouseName"
            name="spouseName"
            type="text"
            value={form.spouseName}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
            placeholder="Enter spouse's name"
          />

          <label htmlFor="parentName" className="font-semibold">
            Name of father/mother
          </label>
          <input
            id="parentName"
            name="parentName"
            type="text"
            value={form.parentName}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
            placeholder="Enter parent name"
          />

          <label htmlFor="address" className="font-semibold">
            Address <span className="text-red-500">*</span>
          </label>
          <input
            id="address"
            name="address"
            type="text"
            required
            value={form.address}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
            placeholder="Enter address"
          />

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
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
            placeholder="Enter village"
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
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
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
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
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
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
            placeholder="Enter District"
          />

          {/* Category */}
          <label className="font-semibold mt-2">
            Category <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-6 mb-2">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                value="ST"
                checked={form.category === 'ST'}
                onChange={handleCategoryChange}
                required
                className="accent-emerald-500"
              />
              Scheduled Tribe
              <span className="text-xs text-gray-500 ml-2">(Attach authenticated copy of Certificate)</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                value="OTFD"
                checked={form.category === 'OTFD'}
                onChange={handleCategoryChange}
                required
                className="accent-emerald-500"
              />
              Other Traditional Forest Dweller
              <span className="text-xs text-gray-500 ml-2">(If spouse is ST, attach authenticated copy of certificate)</span>
            </label>
          </div>

          {/* Family Members */}
          <div className="mt-6">
            <label className="font-semibold">
              Name of other members in the family with age <span className="text-red-500">*</span>
            </label>
            <small className="block text-gray-500 mb-2">
              (Add all family members. Relationship: Son, Daughter, Dependent Parent, etc.)
            </small>
            {form.familyMembers.map((member, idx) => (
              <div key={idx} className="flex gap-3 items-center mb-2">
                <input
                  type="text"
                  required
                  value={member.name}
                  onChange={e => handleFamilyMemberChange(idx, 'name', e.target.value)}
                  placeholder="Name"
                  className="flex-2 w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
                />
                <input
                  type="number"
                  required
                  min={0}
                  value={member.age}
                  onChange={e => handleFamilyMemberChange(idx, 'age', e.target.value)}
                  placeholder="Age"
                  className="flex-1 min-w-[80px] p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
                />
                <input
                  type="text"
                  required
                  value={member.relationship}
                  onChange={e => handleFamilyMemberChange(idx, 'relationship', e.target.value)}
                  placeholder="Relationship"
                  className="flex-1 min-w-[120px] p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
                />
                {form.familyMembers.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveFamilyMember(idx)}
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
              onClick={handleAddFamilyMember}
              className="bg-emerald-500 text-white rounded-lg px-4 py-2 font-semibold mt-2 shadow hover:bg-emerald-600 transition"
            >
              Add Another Member
            </button>
          </div>

          {/* Land Claims */}
          <div className="mt-8">
            <label className="font-semibold text-lg block mb-2">
              Nature of Claim on Land <span className="text-red-500">*</span>
            </label>
            <small className="block text-gray-500 mb-4">
              (Tick all applicable claims and provide details)
            </small>
            <div className="flex flex-col gap-6">
              {landClaimsList.map(claim => (
                <div
                  key={claim.key}
                  className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-2"
                >
                  <label className="flex items-center gap-2 font-medium">
                    <input
                      type="checkbox"
                      checked={form.landClaims[claim.key].claimed}
                      onChange={e =>
                        handleLandClaimChange(claim.key, 'claimed', e.target.checked)
                      }
                      className="accent-emerald-500"
                    />
                    {claim.label}
                  </label>
                  {form.landClaims[claim.key].claimed && (
                    claim.type === 'extent' ? (
                      <input
                        type="text"
                        className="w-full mt-3 p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
                        placeholder={claim.placeholder}
                        value={form.landClaims[claim.key].extent}
                        onChange={e =>
                          handleLandClaimChange(claim.key, 'extent', e.target.value)
                        }
                        required
                      />
                    ) : (
                      <textarea
                        className="w-full mt-3 p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition min-h-[60px] resize-y"
                        placeholder={claim.placeholder}
                        value={form.landClaims[claim.key].details}
                        onChange={e =>
                          handleLandClaimChange(claim.key, 'details', e.target.value)
                        }
                        required
                      />
                    )
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
          <label htmlFor="signatureFile" className="font-semibold mt-4">
            Signature / Thumb Impression of Claimant(s) <span className="text-red-500">*</span>
          </label>
          <input
            id="signatureFile"
            name="signatureFile"
            type="file"
            required
            accept="image/*,application/pdf"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border-2 border-emerald-400 bg-white text-gray-900 outline-none transition"
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

export default IndividualClaimPage