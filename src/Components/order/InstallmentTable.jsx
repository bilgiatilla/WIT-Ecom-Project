function InstallmentTable({ grandTotal }) {
  return (
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
  );
}

export default InstallmentTable;