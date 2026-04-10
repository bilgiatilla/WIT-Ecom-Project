function OrderSummary({
  activeStep,
  productsTotal,
  shippingTotal,
  discount,
  grandTotal,
  onContinue,
  onPayment,
}) {
  const buttonText = activeStep === 1 ? "Save and Continue" : "Proceed to Payment";
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
        <h2 className="text-3xl font-light mb-6">Order Summary</h2>

        <div className="space-y-3 text-lg">
          <div className="flex justify-between items-start gap-4">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold whitespace-nowrap">
              ₺{productsTotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-start gap-4">
            <span className="text-gray-600">Shipping</span>
            <span className="font-semibold whitespace-nowrap">
              ₺{shippingTotal.toFixed(2)}
            </span>
          </div>

          <div className="flex justify-between items-start gap-4">
            <span className="text-gray-600 flex-1 min-w-0">
              Free Shipping for Orders Over 150 TL
            </span>
            <span className="font-semibold text-[#F28D35] whitespace-nowrap shrink-0">
              -₺{discount.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="border-t my-5"></div>

        <div className="flex justify-between items-center gap-4">
          <span className="text-2xl text-gray-700">Total</span>
          <span className="text-3xl font-bold text-[#F28D35] whitespace-nowrap">
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