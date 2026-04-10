function PricingPage() {
  return (
    <section className="w-full bg-[#f6f6f8] py-12 px-10">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800">
            Pricing
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-6">
            Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 text-sm font-semibold text-slate-700">
          <span>Monthly</span>

          <button
            type="button"
            className="cursor-pointer relative h-6 w-11 rounded-full bg-sky-200 transition"
          >
            <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow-sm transition" />
          </button>

          <span>Yearly</span>

          <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-500">
            Save 25%
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 max-w-2xl mx-auto">
          <div className="rounded-md border border-sky-400 bg-white px-6 py-8 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800">FREE</h3>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Organize across all apps by hand
            </p>

            <div className="mt-8 flex items-end justify-center gap-2">
              <span className="text-5xl font-extrabold text-sky-500">0</span>
              <div className="pb-1 text-left">
                <p className="text-xl font-bold text-sky-500">$</p>
                <p className="text-sm text-sky-400">Per Month</p>
              </div>
            </div>

            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ✓
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  Unlimited product updates
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ✓
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  Unlimited product updates
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ✓
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  Unlimited product updates
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs text-white">
                  ✓
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  1GB Cloud storage
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-gray-300 text-xs text-white">
                  ✓
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  Email and community support
                </span>
              </li>
            </ul>

            <button className="cursor-pointer mt-8 w-full rounded-md bg-sky-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-sky-600">
              Try for free
            </button>
          </div>

          <div className="rounded-md border border-sky-400 bg-white px-6 py-8 text-center shadow-sm">
            <h3 className="text-2xl font-bold text-slate-800">STANDARD</h3>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              Organize across all apps by hand
            </p>

            <div className="mt-8 flex items-end justify-center gap-2">
              <span className="text-5xl font-extrabold text-sky-500">19</span>
              <div className="pb-1 text-left">
                <p className="text-xl font-bold text-sky-500">$</p>
                <p className="text-sm text-sky-400">Per Month</p>
              </div>
            </div>

            <ul className="mt-8 space-y-4 text-left">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ✓
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  Unlimited product updates
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ✓
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  Unlimited product updates
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ✓
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  Unlimited product updates
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ✓
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  1GB Cloud storage
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-xs text-white">
                  ✓
                </span>
                <span className="text-sm font-semibold text-slate-700">
                  Email and community support
                </span>
              </li>
            </ul>

            <button className="cursor-pointer mt-8 w-full rounded-md bg-sky-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-sky-600">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingPage;
