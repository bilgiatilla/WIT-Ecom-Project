import cities from "../../data/cities";

function AddressForm({
  formData,
  onChange,
  onSubmit,
  onCancel,
  editingAddress,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="border rounded-xl p-4 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#FFFDF8]"
    >
      <input
        name="title"
        value={formData.title}
        onChange={onChange}
        placeholder="Address Title"
        className="border rounded-md p-3"
        required
      />

      <input
        name="name"
        value={formData.name}
        onChange={onChange}
        placeholder="Name"
        className="border rounded-md p-3"
        required
      />

      <input
        name="surname"
        value={formData.surname}
        onChange={onChange}
        placeholder="Surname"
        className="border rounded-md p-3"
        required
      />

      <input
        name="phone"
        value={formData.phone}
        onChange={onChange}
        placeholder="Phone"
        className="border rounded-md p-3"
        required
      />

      <select
        name="city"
        value={formData.city}
        onChange={onChange}
        className="border rounded-md p-3 bg-white text-black"
      >
        <option value="">Şehir Seç</option>
        {cities.map((city) => (
          <option key={city.value} value={city.value}>
            {city.label}
          </option>
        ))}
      </select>

      <input
        name="district"
        value={formData.district}
        onChange={onChange}
        placeholder="District"
        className="border rounded-md p-3"
        required
      />

      <textarea
        name="neighborhood"
        value={formData.neighborhood}
        onChange={onChange}
        placeholder="Neighborhood / Address details"
        className="border rounded-md p-3 md:col-span-2 min-h-28"
        required
      />

      <div className="md:col-span-2 flex gap-3">
        <button
          type="submit"
          className="bg-[#F28D35] text-white px-5 py-3 rounded-md font-semibold cursor-pointer"
        >
          {editingAddress ? "Update Address" : "Save Address"}
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="border px-5 py-3 rounded-md font-semibold cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddressForm;