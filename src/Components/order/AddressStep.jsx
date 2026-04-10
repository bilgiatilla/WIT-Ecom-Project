import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";

function AddressStep({
  addressList,
  showAddressForm,
  editingAddress,
  addressFormData,
  selectedShippingAddressId,
  selectedReceiptAddressId,
  useSameAddress,
  onAddressChange,
  onAddNewAddress,
  onEditAddress,
  onDeleteAddress,
  onAddressSubmit,
  onCancelAddressForm,
  onToggleSameAddress,
  onSelectShippingAddress,
  onSelectReceiptAddress,
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between gap-4 mb-4">
        <h3 className="text-xl font-bold">Delivery Adress</h3>
        <button
          onClick={onAddNewAddress}
          className="bg-[#F28D35] text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
        >
          Add Address
        </button>
      </div>

      {showAddressForm && (
        <AddressForm
          formData={addressFormData}
          onChange={onAddressChange}
          onSubmit={onAddressSubmit}
          onCancel={onCancelAddressForm}
          editingAddress={editingAddress}
        />
      )}

      <div className="flex items-center gap-3 mb-4">
        <input
          type="checkbox"
          checked={useSameAddress}
          onChange={(e) => onToggleSameAddress(e.target.checked)}
          className="w-4 h-4 accent-orange-500"
        />
        <span className="text-sm text-gray-600">
          Send my invoice to the same address.
        </span>
      </div>

      {addressList.length === 0 ? (
        <div className="text-gray-500 border rounded-xl p-6">
          No registered address found.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {addressList.map((address) => (
            <AddressCard
              key={address.id}
              address={address}
              selected={selectedShippingAddressId === address.id}
              radioName="shippingAddress"
              onSelect={() => onSelectShippingAddress(address.id)}
              onEdit={() => onEditAddress(address)}
              onDelete={() => onDeleteAddress(address.id)}
              showActions
            />
          ))}
        </div>
      )}

      {!useSameAddress && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Billing Address</h3>

          {addressList.length === 0 ? (
            <div className="text-gray-500 border rounded-xl p-6">
              No registered address found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addressList.map((address) => (
                <AddressCard
                  key={address.id}
                  address={address}
                  selected={selectedReceiptAddressId === address.id}
                  radioName="receiptAddress"
                  onSelect={() => onSelectReceiptAddress(address.id)}
                  showActions={false}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AddressStep;