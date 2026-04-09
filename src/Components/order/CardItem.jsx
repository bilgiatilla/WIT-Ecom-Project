import { maskCardNumber } from "../../utils/orderHelpers";

function CardItem({
  card,
  selected,
  onSelect,
  onEdit,
  onDelete,
}) {
  return (
    <div
      className={`border rounded-xl p-4 ${
        selected ? "border-orange-500 ring-1 ring-orange-300" : "border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <label className="flex items-center gap-2 font-semibold">
          <input
            type="radio"
            name="selectedCard"
            checked={selected}
            onChange={onSelect}
            className="accent-orange-500"
          />
          {card.name_on_card}
        </label>
      </div>

      <div className="space-y-1 text-sm text-gray-700">
        <p>{maskCardNumber(card.card_no)}</p>
        <p>
          {card.expire_month}/{card.expire_year}
        </p>
      </div>

      <div className="flex gap-3 text-sm mt-4">
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
    </div>
  );
}

export default CardItem;