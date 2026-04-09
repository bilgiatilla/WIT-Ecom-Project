import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  deleteAddress,
  fetchAddresses,
  updateAddress,
  fetchCreditCards,
  addCreditCard,
  updateCreditCard,
  deleteCreditCard,
} from "../store/thunks/clientThunks";
import cities from "../data/cities.js";

const emptyAddressForm = {
  title: "",
  name: "",
  surname: "",
  phone: "",
  city: "",
  district: "",
  neighborhood: "",
};

const emptyCardForm = {
  card_no: "",
  expire_month: "",
  expire_year: "",
  name_on_card: "",
  cvv: "",
};

function CreateOrderPage() {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.shoppingCart.cart);
  const addressList = useSelector((state) => state.client.addressList);
  const creditCards = useSelector((state) => state.client.creditCards);

  const [activeStep, setActiveStep] = useState(1);

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [addressFormData, setAddressFormData] = useState(emptyAddressForm);

  const [showCardForm, setShowCardForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [cardFormData, setCardFormData] = useState(emptyCardForm);

  const [selectedShippingAddressId, setSelectedShippingAddressId] = useState(null);
  const [selectedReceiptAddressId, setSelectedReceiptAddressId] = useState(null);
  const [useSameAddress, setUseSameAddress] = useState(true);

  const [selectedCardId, setSelectedCardId] = useState(null);
  const [use3DSecure, setUse3DSecure] = useState(false);

  const selectedItems = cart.filter((item) => item.checked);

  const productsTotal = useMemo(() => {
    return selectedItems.reduce((sum, item) => {
      return sum + item.product.price * item.count;
    }, 0);
  }, [selectedItems]);

  const shippingTotal = selectedItems.length > 0 ? 29.99 : 0;
  const discount = productsTotal >= 150 ? shippingTotal : 0;
  const grandTotal = productsTotal + shippingTotal - discount;

  useEffect(() => {
    dispatch(fetchAddresses());
    dispatch(fetchCreditCards());
  }, [dispatch]);

  useEffect(() => {
    if (addressList.length > 0 && !selectedShippingAddressId) {
      setSelectedShippingAddressId(addressList[0].id);
      setSelectedReceiptAddressId(addressList[0].id);
    }
  }, [addressList, selectedShippingAddressId]);

  useEffect(() => {
    if (creditCards.length > 0 && !selectedCardId) {
      setSelectedCardId(creditCards[0].id);
    }
  }, [creditCards, selectedCardId]);

  useEffect(() => {
    if (useSameAddress) {
      setSelectedReceiptAddressId(selectedShippingAddressId);
    }
  }, [useSameAddress, selectedShippingAddressId]);

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddressFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddNewAddressClick = () => {
    setEditingAddress(null);
    setAddressFormData(emptyAddressForm);
    setShowAddressForm(true);
  };

  const handleEditAddress = (address) => {
    setEditingAddress(address);
    setAddressFormData({
      title: address.title || "",
      name: address.name || "",
      surname: address.surname || "",
      phone: address.phone || "",
      city: address.city || "",
      district: address.district || "",
      neighborhood: address.neighborhood || "",
    });
    setShowAddressForm(true);
  };

  const handleDeleteAddress = async (addressId) => {
    try {
      await dispatch(deleteAddress(addressId));

      if (selectedShippingAddressId === addressId) {
        setSelectedShippingAddressId(null);
      }

      if (selectedReceiptAddressId === addressId) {
        setSelectedReceiptAddressId(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingAddress) {
        await dispatch(
          updateAddress({
            id: editingAddress.id,
            ...addressFormData,
          })
        );
      } else {
        await dispatch(addAddress(addressFormData));
      }

      setShowAddressForm(false);
      setEditingAddress(null);
      setAddressFormData(emptyAddressForm);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddNewCardClick = () => {
    setEditingCard(null);
    setCardFormData(emptyCardForm);
    setShowCardForm(true);
  };

  const handleEditCard = (card) => {
    setEditingCard(card);
    setCardFormData({
      card_no: card.card_no || "",
      expire_month: card.expire_month || "",
      expire_year: card.expire_year || "",
      name_on_card: card.name_on_card || "",
      cvv: "",
    });
    setShowCardForm(true);
  };

  const handleDeleteCard = async (cardId) => {
    try {
      await dispatch(deleteCreditCard(cardId));

      if (selectedCardId === cardId) {
        setSelectedCardId(null);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleCardSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      card_no: cardFormData.card_no.replace(/\s/g, ""),
      expire_month: Number(cardFormData.expire_month),
      expire_year: Number(cardFormData.expire_year),
      name_on_card: cardFormData.name_on_card,
    };

    try {
      if (editingCard) {
        await dispatch(
          updateCreditCard({
            id: editingCard.id,
            ...payload,
          })
        );
      } else {
        await dispatch(addCreditCard(payload));
      }

      setShowCardForm(false);
      setEditingCard(null);
      setCardFormData(emptyCardForm);
    } catch (error) {
      console.error(error);
    }
  };

  const maskCardNumber = (cardNo) => {
    if (!cardNo) return "";
    const clean = String(cardNo).replace(/\s/g, "");
    if (clean.length < 4) return clean;
    return `${clean.slice(0, 4)} **** **** ${clean.slice(-4)}`;
  };

  const handleContinue = () => {
    if (!selectedShippingAddressId) return;
    setActiveStep(2);
  };

  const handlePayment = () => {
    if (!selectedCardId && !showCardForm) {
      alert("Lütfen bir kart seçin veya yeni kart ekleyin.");
      return;
    }

    console.log("Sipariş hazır:", {
      shippingAddressId: selectedShippingAddressId,
      receiptAddressId: selectedReceiptAddressId,
      selectedCardId,
      use3DSecure,
      total: grandTotal,
    });

    alert("Şimdilik ödeme submit kısmı hazırlandı. Sipariş endpoint'i gelince bağlanacak.");
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen px-4 py-8 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:flex-1">
          <div className="bg-white border rounded-xl p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 border-b mb-6">
              <div className={`pb-4 ${activeStep === 1 ? "border-b-4 border-orange-500" : ""}`}>
                <h2 className={`text-2xl font-bold ${activeStep === 1 ? "text-[#F28D35]" : "text-gray-500"}`}>
                  1. Adres Bilgileri
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Teslimat ve fatura adresini seçin ya da yeni adres ekleyin.
                </p>
              </div>

              <div className={`pb-4 pt-4 md:pt-0 md:pl-6 ${activeStep === 2 ? "border-b-4 border-orange-500" : ""}`}>
                <h2 className={`text-2xl font-bold ${activeStep === 2 ? "text-[#F28D35]" : "text-gray-500"}`}>
                  2. Ödeme Seçenekleri
                </h2>
                <p className="text-sm text-gray-500 mt-2">
                  Kayıtlı kartını seç veya yeni kart ekle.
                </p>
              </div>
            </div>

            {activeStep === 1 && (
              <div className="mb-8">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-xl font-bold">Teslimat Adresi</h3>
                  <button
                    onClick={handleAddNewAddressClick}
                    className="bg-[#F28D35] text-white px-4 py-2 rounded-md font-semibold cursor-pointer"
                  >
                    Add Address
                  </button>
                </div>

                {showAddressForm && (
                  <form
                    onSubmit={handleAddressSubmit}
                    className="border rounded-xl p-4 mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#FFFDF8]"
                  >
                    <input
                      name="title"
                      value={addressFormData.title}
                      onChange={handleAddressChange}
                      placeholder="Address Title"
                      className="border rounded-md p-3"
                      required
                    />
                    <input
                      name="name"
                      value={addressFormData.name}
                      onChange={handleAddressChange}
                      placeholder="Name"
                      className="border rounded-md p-3"
                      required
                    />
                    <input
                      name="surname"
                      value={addressFormData.surname}
                      onChange={handleAddressChange}
                      placeholder="Surname"
                      className="border rounded-md p-3"
                      required
                    />
                    <input
                      name="phone"
                      value={addressFormData.phone}
                      onChange={handleAddressChange}
                      placeholder="Phone"
                      className="border rounded-md p-3"
                      required
                    />
                    <select
                      name="city"
                      value={addressFormData.city}
                      onChange={handleAddressChange}
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
                      value={addressFormData.district}
                      onChange={handleAddressChange}
                      placeholder="District"
                      className="border rounded-md p-3"
                      required
                    />
                    <textarea
                      name="neighborhood"
                      value={addressFormData.neighborhood}
                      onChange={handleAddressChange}
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
                        onClick={() => {
                          setShowAddressForm(false);
                          setEditingAddress(null);
                          setAddressFormData(emptyAddressForm);
                        }}
                        className="border px-5 py-3 rounded-md font-semibold cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <input
                    type="checkbox"
                    checked={useSameAddress}
                    onChange={(e) => setUseSameAddress(e.target.checked)}
                    className="w-4 h-4 accent-orange-500"
                  />
                  <span className="text-sm text-gray-600">
                    Faturamı aynı adrese gönder
                  </span>
                </div>

                {addressList.length === 0 ? (
                  <div className="text-gray-500 border rounded-xl p-6">
                    Kayıtlı adres bulunamadı.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {addressList.map((address) => (
                      <div
                        key={address.id}
                        className={`border rounded-xl p-4 ${
                          selectedShippingAddressId === address.id
                            ? "border-orange-500 ring-1 ring-orange-300"
                            : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <label className="flex items-center gap-2 font-semibold">
                            <input
                              type="radio"
                              name="shippingAddress"
                              checked={selectedShippingAddressId === address.id}
                              onChange={() => setSelectedShippingAddressId(address.id)}
                              className="accent-orange-500"
                            />
                            {address.title}
                          </label>

                          <div className="flex gap-3 text-sm">
                            <button
                              onClick={() => handleEditAddress(address)}
                              className="text-blue-600 cursor-pointer"
                            >
                              Düzenle
                            </button>
                            <button
                              onClick={() => handleDeleteAddress(address.id)}
                              className="text-red-500 cursor-pointer"
                            >
                              Sil
                            </button>
                          </div>
                        </div>

                        <div className="text-sm text-gray-700 space-y-1">
                          <p>{address.name} {address.surname}</p>
                          <p>{address.phone}</p>
                          <p>{address.district} / {address.city}</p>
                          <p>{address.neighborhood}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {!useSameAddress && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold mb-4">Fatura Adresi</h3>

                    {addressList.length === 0 ? (
                      <div className="text-gray-500 border rounded-xl p-6">
                        Kayıtlı adres bulunamadı.
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {addressList.map((address) => (
                          <div
                            key={address.id}
                            className={`border rounded-xl p-4 ${
                              selectedReceiptAddressId === address.id
                                ? "border-orange-500 ring-1 ring-orange-300"
                                : "border-gray-200"
                            }`}
                          >
                            <label className="flex items-center gap-2 font-semibold mb-3">
                              <input
                                type="radio"
                                name="receiptAddress"
                                checked={selectedReceiptAddressId === address.id}
                                onChange={() => setSelectedReceiptAddressId(address.id)}
                                className="accent-orange-500"
                              />
                              {address.title}
                            </label>

                            <div className="text-sm text-gray-700 space-y-1">
                              <p>{address.name} {address.surname}</p>
                              <p>{address.phone}</p>
                              <p>{address.district} / {address.city}</p>
                              <p>{address.neighborhood}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeStep === 2 && (
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="border rounded-xl p-4">
                  <div className="flex items-center justify-between mb-4 gap-4">
                    <h3 className="text-2xl font-bold">Kart Bilgileri</h3>
                    <button
                      onClick={handleAddNewCardClick}
                      className="text-gray-600 underline font-medium cursor-pointer"
                    >
                      Başka bir Kart ile Ödeme Yap
                    </button>
                  </div>

                  {creditCards.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {creditCards.map((card) => (
                        <div
                          key={card.id}
                          className={`border rounded-xl p-4 ${
                            selectedCardId === card.id
                              ? "border-orange-500 ring-1 ring-orange-300"
                              : "border-gray-200"
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <label className="flex items-center gap-2 font-semibold">
                              <input
                                type="radio"
                                name="selectedCard"
                                checked={selectedCardId === card.id}
                                onChange={() => setSelectedCardId(card.id)}
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
                              onClick={() => handleEditCard(card)}
                              className="text-blue-600 cursor-pointer"
                            >
                              Düzenle
                            </button>
                            <button
                              onClick={() => handleDeleteCard(card.id)}
                              className="text-red-500 cursor-pointer"
                            >
                              Sil
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {showCardForm && (
                    <form
                      onSubmit={handleCardSubmit}
                      className="border rounded-xl p-4 bg-[#FFFDF8] grid grid-cols-1 md:grid-cols-2 gap-4"
                    >
                      <input
                        name="card_no"
                        value={cardFormData.card_no}
                        onChange={handleCardChange}
                        placeholder="Kart Numarası"
                        className="border rounded-md p-3 md:col-span-2"
                        maxLength={19}
                        required
                      />

                      <select
                        name="expire_month"
                        value={cardFormData.expire_month}
                        onChange={handleCardChange}
                        className="border rounded-md p-3 bg-white"
                        required
                      >
                        <option value="">Ay</option>
                        {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                          <option key={month} value={month}>
                            {month}
                          </option>
                        ))}
                      </select>

                      <select
                        name="expire_year"
                        value={cardFormData.expire_year}
                        onChange={handleCardChange}
                        className="border rounded-md p-3 bg-white"
                        required
                      >
                        <option value="">Yıl</option>
                        {Array.from({ length: 12 }, (_, i) => 2025 + i).map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>

                      <input
                        name="name_on_card"
                        value={cardFormData.name_on_card}
                        onChange={handleCardChange}
                        placeholder="Kart Üzerindeki İsim"
                        className="border rounded-md p-3"
                        required
                      />

                      <input
                        name="cvv"
                        value={cardFormData.cvv}
                        onChange={handleCardChange}
                        placeholder="CVV"
                        className="border rounded-md p-3"
                        maxLength={4}
                        required
                      />

                      <div className="md:col-span-2 flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={use3DSecure}
                          onChange={(e) => setUse3DSecure(e.target.checked)}
                          className="w-4 h-4 accent-orange-500"
                        />
                        <span className="font-medium">3D Secure ile ödemek istiyorum</span>
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
                          onClick={() => {
                            setShowCardForm(false);
                            setEditingCard(null);
                            setCardFormData(emptyCardForm);
                          }}
                          className="border px-5 py-3 rounded-md font-semibold cursor-pointer"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  )}

                  {!showCardForm && (
                    <div className="mt-4 flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={use3DSecure}
                        onChange={(e) => setUse3DSecure(e.target.checked)}
                        className="w-4 h-4 accent-orange-500"
                      />
                      <span className="font-medium">3D Secure ile ödemek istiyorum</span>
                    </div>
                  )}
                </div>

                <div className="border rounded-xl p-4">
                  <h3 className="text-2xl font-bold mb-2">Taksit Seçenekleri</h3>
                  <p className="text-gray-600 mb-4">
                    Endpoint verilmediği için şimdilik tek çekim gösteriliyor.
                  </p>

                  <div className="border rounded-lg overflow-hidden">
                    <div className="grid grid-cols-2 bg-gray-50 border-b">
                      <div className="p-4 font-semibold">Taksit Sayısı</div>
                      <div className="p-4 font-semibold">Aylık Ödeme</div>
                    </div>

                    <div className="grid grid-cols-2">
                      <div className="p-4 text-[#F28D35] font-semibold">Tek Çekim</div>
                      <div className="p-4 text-[#F28D35] font-semibold">
                        ₺{grandTotal.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="w-full lg:w-90 lg:sticky lg:top-6">
          {activeStep === 1 ? (
            <button
              onClick={handleContinue}
              className="w-full bg-[#F28D35] text-white font-bold rounded-lg py-4 cursor-pointer"
            >
              Kaydet ve Devam Et
            </button>
          ) : (
            <button
              onClick={handlePayment}
              className="w-full bg-[#F28D35] text-white font-bold rounded-lg py-4 cursor-pointer"
            >
              Ödeme Yap
            </button>
          )}

          <div className="bg-white rounded-xl border p-6 mt-4 shadow-sm">
            <h2 className="text-3xl font-light mb-6">Sipariş Özeti</h2>

            <div className="space-y-3 text-lg">
              <div className="flex justify-between gap-4">
                <span className="text-gray-600">Ürünlerin Toplamı</span>
                <span className="font-semibold">₺{productsTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-600">Kargo Toplam</span>
                <span className="font-semibold">₺{shippingTotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-gray-600">150 TL ve Üzeri Kargo Bedava</span>
                <span className="font-semibold text-[#F28D35]">
                  -₺{discount.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="border-t my-5"></div>

            <div className="flex justify-between items-center">
              <span className="text-2xl text-gray-700">Toplam</span>
              <span className="text-3xl font-bold text-[#F28D35]">
                ₺{grandTotal.toFixed(2)}
              </span>
            </div>
          </div>

          {activeStep === 1 ? (
            <button
              onClick={handleContinue}
              className="w-full mt-4 bg-[#F28D35] text-white font-bold rounded-lg py-4 cursor-pointer"
            >
              Kaydet ve Devam Et
            </button>
          ) : (
            <button
              onClick={handlePayment}
              className="w-full mt-4 bg-[#F28D35] text-white font-bold rounded-lg py-4 cursor-pointer"
            >
              Ödeme Yap
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateOrderPage;