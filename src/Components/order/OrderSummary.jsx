function OrderSummary({
  activeStep,
  productsTotal,
  shippingTotal,
  discount,
  grandTotal,
  onContinue,
  onPayment,
}) {
  const buttonText = activeStep === 1 ? "Kaydet ve Devam Et" : "Ödeme Yap";
  const buttonAction = activeStep === 1 ? onContinue : onPayment;

  return (
    <div className="w-full lg:w-90 lg:sticky lg:top-6">
      <button
        onClick={buttonAction}
        className="w-full bg-[#F28D35] text-white font-bold rounded-lg py-4 cursor-pointer"
      >
        {buttonText}
      </button>

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

      <button
        onClick={buttonAction}
        className="w-full mt-4 bg-[#F28D35] text-white font-bold rounded-lg py-4 cursor-pointer"
      >
        {buttonText}
      </button>
    </div>
  );
}

export default OrderSummary;