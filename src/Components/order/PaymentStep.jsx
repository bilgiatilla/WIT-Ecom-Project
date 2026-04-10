import CardForm from "./CardForm";
import CardItem from "./CardItem";
import InstallmentTable from "./InstallmentTable";

function PaymentStep({
  creditCards,
  selectedCardId,
  showCardForm,
  editingCard,
  cardFormData,
  cardCvv,
  use3DSecure,
  grandTotal,
  onAddNewCard,
  onEditCard,
  onDeleteCard,
  onCardChange,
  onCardSubmit,
  onCancelCardForm,
  onSelectCard,
  onCardCvvChange,
  onToggle3DSecure,
}) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <div className="border rounded-xl p-4">
        <div className="flex items-center justify-between mb-4 gap-4">
          <h3 className="text-2xl font-bold">Kart Bilgileri</h3>
          <button
            onClick={onAddNewCard}
            className="text-gray-600 underline font-medium cursor-pointer"
          >
            Başka bir Kart ile Ödeme Yap
          </button>
        </div>

        {creditCards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {creditCards.map((card) => (
              <CardItem
                key={card.id}
                card={card}
                selected={selectedCardId === card.id}
                onSelect={() => onSelectCard(card.id)}
                onEdit={() => onEditCard(card)}
                onDelete={() => onDeleteCard(card.id)}
              />
            ))}
          </div>
        )}

        {selectedCardId && !showCardForm && (
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">CVV</label>
            <input
              type="text"
              value={cardCvv}
              onChange={(e) => onCardCvvChange(e.target.value)}
              placeholder="CVV"
              className="border rounded-md p-3 w-full"
              maxLength={4}
            />
          </div>
        )}

        {showCardForm && (
          <CardForm
            formData={cardFormData}
            onChange={onCardChange}
            onSubmit={onCardSubmit}
            onCancel={onCancelCardForm}
            editingCard={editingCard}
            use3DSecure={use3DSecure}
            onToggle3DSecure={onToggle3DSecure}
          />
        )}

        {!showCardForm && (
          <div className="mt-4 flex items-center gap-3">
            <input
              type="checkbox"
              checked={use3DSecure}
              onChange={(e) => onToggle3DSecure(e.target.checked)}
              className="w-4 h-4 accent-orange-500"
            />
            <span className="font-medium">I want to pay with 3D Secure</span>
          </div>
        )}
      </div>

      <InstallmentTable grandTotal={grandTotal} />
    </div>
  );
}

export default PaymentStep;