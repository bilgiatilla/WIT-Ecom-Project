function OrderStepsHeader({ activeStep }) {
  return (
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
  );
}

export default OrderStepsHeader;