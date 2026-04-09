function AddressCard({
  address,
  selected,
  radioName,
  onSelect,
  onEdit,
  onDelete,
  showActions = true,
}) {
  return (
    <div
      className={`border rounded-xl p-4 ${
        selected ? "border-orange-500 ring-1 ring-orange-300" : "border-gray-200"
      }`}
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <label className="flex items-center gap-2 font-semibold">
          <input
            type="radio"
            name={radioName}
            checked={selected}
            onChange={onSelect}
            className="accent-orange-500"
          />
          {address.title}
        </label>

        {showActions && (
          <div className="flex gap-3 text-sm">
            <button
              type="button"
              onClick={onEdit}
              className="text-blue-600 cursor-pointer"
            >
              Düzenle
            </button>
            <button
              type="button"
              onClick={onDelete}
              className="text-red-500 cursor-pointer"
            >
              Sil
            </button>
          </div>
        )}
      </div>

      <div className="text-sm text-gray-700 space-y-1">
        <p>
          {address.name} {address.surname}
        </p>
        <p>{address.phone}</p>
        <p>
          {address.district} / {address.city}
        </p>
        <p>{address.neighborhood}</p>
      </div>
    </div>
  );
}

export default AddressCard;