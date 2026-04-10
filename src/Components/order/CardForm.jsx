function CardForm({
  formData,
  onChange,
  onSubmit,
  onCancel,
  editingCard,
  use3DSecure,
  onToggle3DSecure,
}) {
  return (
    <form
      onSubmit={onSubmit}
      className="border rounded-xl p-4 bg-[#FFFDF8] grid grid-cols-1 md:grid-cols-2 gap-4"
    >
      <input
        name="card_no"
        value={formData.card_no}
        onChange={onChange}
        placeholder="Card Number"
        className="border rounded-md p-3 md:col-span-2"
        maxLength={19}
        required
      />

      <select
        name="expire_month"
        value={formData.expire_month}
        onChange={onChange}
        className="border rounded-md p-3 bg-white"
        required
      >
        <option value="">Month</option>
        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <select
        name="expire_year"
        value={formData.expire_year}
        onChange={onChange}
        className="border rounded-md p-3 bg-white"
        required
      >
        <option value="">Year</option>
        {Array.from({ length: 12 }, (_, i) => 2025 + i).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <input
        name="name_on_card"
        value={formData.name_on_card}
        onChange={onChange}
        placeholder="Kart Üzerindeki İsim"
        className="border rounded-md p-3"
        required
      />

      <input
        name="cvv"
        value={formData.cvv}
        onChange={onChange}
        placeholder="CVV"
        className="border rounded-md p-3"
        maxLength={4}
        required
      />

      <div className="md:col-span-2 flex items-center gap-3">
        <input
          type="checkbox"
          checked={use3DSecure}
          onChange={(e) => onToggle3DSecure(e.target.checked)}
          className="w-4 h-4 accent-orange-500"
        />
        <span className="font-medium">I want to pay with 3D Secure.</span>
      </div>

      <div className="md:col-span-2 flex gap-3">
        <button
          type="submit"
          className="bg-[#F28D35] text-white px-5 py-3 rounded-md font-semibold cursor-pointer"
        >
          {editingCard ? "Update Card" : "Save Card"}
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

export default CardForm;