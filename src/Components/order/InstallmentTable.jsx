function InstallmentTable({ grandTotal }) {
  return (
    <div className="border rounded-xl p-4">
      <h3 className="text-2xl font-bold mb-2">Installment Options</h3>
      

      <div className="border rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 bg-gray-50 border-b">
          <div className="p-4 font-semibold">Installment</div>
          <div className="p-4 font-semibold">Monthly Payment</div>
        </div>

        <div className="grid grid-cols-2">
          <div className="p-4 text-[#F28D35] font-semibold">Single Payment</div>
          <div className="p-4 text-[#F28D35] font-semibold">
            ₺{grandTotal.toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstallmentTable;