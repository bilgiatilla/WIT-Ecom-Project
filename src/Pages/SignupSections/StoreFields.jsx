function StoreFields({ register, errors }) {
  return (
    <>
      <div className="pt-5">
        <input
          type="text"
          placeholder="Store Name"
          {...register("store.name", {
            required: "Store name is required",
            minLength: {
              value: 3,
              message: "Store name must be at least 3 characters",
            },
          })}
          className="border w-full p-2 rounded"
        />
        {errors.store?.name && (
          <p className="text-red-500 text-sm mt-1">
            {errors.store.name.message}
          </p>
        )}
      </div>

      <div className="pt-5">
        <input
          type="text"
          placeholder="Store Phone"
          {...register("store.phone", {
            required: "Store phone is required",
            pattern: {
              value: /^(?:\+90|0)?5\d{9}$/,
              message: "Please enter a valid Türkiye phone number",
            },
          })}
          className="border w-full p-2 rounded"
        />
        {errors.store?.phone && (
          <p className="text-red-500 text-sm mt-1">
            {errors.store.phone.message}
          </p>
        )}
      </div>

      <div className="pt-5">
        <input
          type="text"
          placeholder="Store Tax ID"
          {...register("store.tax_no", {
            required: "Store tax ID is required",
            pattern: {
              value: /^T\d{4}V\d{6}$/,
              message: "Tax ID must match TXXXXVXXXXXX format",
            },
          })}
          className="border w-full p-2 rounded"
        />
        {errors.store?.tax_no && (
          <p className="text-red-500 text-sm mt-1">
            {errors.store.tax_no.message}
          </p>
        )}
      </div>

      <div className="pt-5">
        <input
          type="text"
          placeholder="Store Bank Account"
          {...register("store.bank_account", {
            required: "IBAN is required",
            pattern: {
              value: /^TR\d{24}$/,
              message: "Please enter a valid Turkish IBAN",
            },
          })}
          className="border w-full p-2 rounded"
        />
        {errors.store?.bank_account && (
          <p className="text-red-500 text-sm mt-1">
            {errors.store.bank_account.message}
          </p>
        )}
      </div>
    </>
  );
}

export default StoreFields;
