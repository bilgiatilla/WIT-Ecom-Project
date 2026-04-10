import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
import { createOrder } from "../store/thunks/orderThunks";
import { emptyAddressForm, emptyCardForm } from "../constants/orderForms";
import OrderStepsHeader from "../Components/order/OrderStepsHeader";
import OrderSummary from "../Components/order/OrderSummary";
import AddressStep from "../Components/order/AddressStep";
import PaymentStep from "../Components/order/PaymentStep";

function CreateOrderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  const [cardCvv, setCardCvv] = useState("");

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

  const handleCancelAddressForm = () => {
    setShowAddressForm(false);
    setEditingAddress(null);
    setAddressFormData(emptyAddressForm);
  };

  const handleCancelCardForm = () => {
    setShowCardForm(false);
    setEditingCard(null);
    setCardFormData(emptyCardForm);
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

      handleCancelAddressForm();
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

      handleCancelCardForm();
    } catch (error) {
      console.error(error);
    }
  };

  const handleContinue = () => {
    if (!selectedShippingAddressId) {
      toast.error("Lütfen bir teslimat adresi seçin.");
      return;
    }

    setActiveStep(2);
  };

  const handlePayment = async () => {
    if (!selectedShippingAddressId) {
      toast.error("Lütfen bir teslimat adresi seçin.");
      return;
    }

    if (!selectedCardId && !showCardForm) {
      toast.error("Lütfen bir kart seçin veya yeni kart ekleyin.");
      return;
    }

    if (!selectedItems.length) {
      toast.error("Sipariş vermek için sepette en az bir ürün seçmelisiniz.");
      return;
    }

    const selectedCard = creditCards.find((card) => card.id === selectedCardId);

    if (!selectedCard) {
      toast.error("Seçili kart bulunamadı.");
      return;
    }

    if (!cardCvv.trim()) {
      toast.error("Lütfen CVV bilgisini girin.");
      return;
    }

    const orderPayload = {
      address_id: selectedShippingAddressId,
      order_date: new Date().toISOString(),
      card_no: Number(String(selectedCard.card_no).replace(/\s/g, "")),
      card_name: selectedCard.name_on_card,
      card_expire_month: Number(selectedCard.expire_month),
      card_expire_year: Number(selectedCard.expire_year),
      card_ccv: Number(cardCvv),
      price: Number(grandTotal.toFixed(2)),
      products: selectedItems.map((item) => ({
        product_id: item.product.id,
        count: item.count,
        detail: item.detail || "standart",
      })),
    };

    try {
      await dispatch(createOrder(orderPayload));

      toast.success("Tebrikler! Siparişiniz başarıyla oluşturuldu.");

      setSelectedShippingAddressId(null);
      setSelectedReceiptAddressId(null);
      setSelectedCardId(null);
      setCardCvv("");
      setActiveStep(1);
      setUseSameAddress(true);
      setUse3DSecure(false);
      setShowAddressForm(false);
      setShowCardForm(false);
      setEditingAddress(null);
      setEditingCard(null);
      setAddressFormData(emptyAddressForm);
      setCardFormData(emptyCardForm);

      navigate("/");
    } catch (error) {
      console.error(error);
      toast.error("Sipariş oluşturulamadı. Lütfen tekrar deneyin.");
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen px-4 py-8 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 items-start">
        <div className="w-full lg:flex-1">
          <div className="bg-white border rounded-xl p-5">
            <OrderStepsHeader activeStep={activeStep} />

            {activeStep === 1 && (
              <AddressStep
                addressList={addressList}
                showAddressForm={showAddressForm}
                editingAddress={editingAddress}
                addressFormData={addressFormData}
                selectedShippingAddressId={selectedShippingAddressId}
                selectedReceiptAddressId={selectedReceiptAddressId}
                useSameAddress={useSameAddress}
                onAddressChange={handleAddressChange}
                onAddNewAddress={handleAddNewAddressClick}
                onEditAddress={handleEditAddress}
                onDeleteAddress={handleDeleteAddress}
                onAddressSubmit={handleAddressSubmit}
                onCancelAddressForm={handleCancelAddressForm}
                onToggleSameAddress={setUseSameAddress}
                onSelectShippingAddress={setSelectedShippingAddressId}
                onSelectReceiptAddress={setSelectedReceiptAddressId}
              />
            )}

            {activeStep === 2 && (
              <PaymentStep
                creditCards={creditCards}
                selectedCardId={selectedCardId}
                showCardForm={showCardForm}
                editingCard={editingCard}
                cardFormData={cardFormData}
                cardCvv={cardCvv}
                use3DSecure={use3DSecure}
                grandTotal={grandTotal}
                onAddNewCard={handleAddNewCardClick}
                onEditCard={handleEditCard}
                onDeleteCard={handleDeleteCard}
                onCardChange={handleCardChange}
                onCardSubmit={handleCardSubmit}
                onCancelCardForm={handleCancelCardForm}
                onSelectCard={setSelectedCardId}
                onCardCvvChange={setCardCvv}
                onToggle3DSecure={setUse3DSecure}
              />
            )}
          </div>
        </div>

        <OrderSummary
          activeStep={activeStep}
          productsTotal={productsTotal}
          shippingTotal={shippingTotal}
          discount={discount}
          grandTotal={grandTotal}
          onContinue={handleContinue}
          onPayment={handlePayment}
        />
      </div>
    </div>
  );
}

export default CreateOrderPage;