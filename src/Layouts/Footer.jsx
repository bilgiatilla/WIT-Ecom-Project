function Footer() {
  return (
    <footer className="">
      <div className="bg-[#FAFAFA] p-15 lg:flex lg:flex-row lg:justify-between ">
        <h3 className="text-2xl font-bold">Bandage</h3>
        <div className="flex flex-row gap-5 pt-5 lg:pt-0">
          <i className="fa-brands fa-facebook text-[#23A6F0] text-2xl"></i>
          <i className="fa-brands fa-instagram text-[#23A6F0] text-2xl"></i>
          <i className="fa-brands fa-twitter text-[#23A6F0] text-2xl"></i>
        </div>
      </div>
      <section className="p-15 flex flex-col lg:flex-row lg:gap-40">
        <div className="flex flex-col gap-3 pb-6">
          <h5 className="font-bold">Company Info</h5>
          <a className="text-[#737373]">About Us</a>
          <a className="text-[#737373]">Carrier</a>
          <a className="text-[#737373]">We are hiring</a>
          <a className="text-[#737373]">Blog</a>
        </div>
        <div className="flex flex-col gap-3 pb-6">
          <h5 className="font-bold">Legal</h5>
          <a className="text-[#737373]">About Us</a>
          <a className="text-[#737373]">Carrier</a>
          <a className="text-[#737373]">We are hiring</a>
          <a className="text-[#737373]">Blog</a>
        </div>
        <div className="flex flex-col gap-3 pb-6">
          <h5 className="font-bold">Features</h5>
          <a className="text-[#737373]">Bussines Marketing</a>
          <a className="text-[#737373]">User Analytic</a>
          <a className="text-[#737373]">Live Chat</a>
          <a className="text-[#737373]">Unlimited Support</a>
        </div>
        <div className="flex flex-col gap-3 pb-6">
          <h5 className="font-bold">Resources</h5>
          <a className="text-[#737373]">IOS & Android</a>
          <a className="text-[#737373]">Watch a Demo</a>
          <a className="text-[#737373]">Customers</a>
          <a className="text-[#737373]">API</a>
        </div>
        <div>
          <h5 className="font-bold pb-3">Get In Touch</h5>
          <form className="w-full">
            <div className="mx-auto flex w-full max-w-85 overflow-hidden rounded-md border border-[#E6E6E6] bg-white">
              <input
                type="email"
                placeholder="Your Email"
                className="min-w-0 flex-[2.2] px-4 py-4 text-sm text-[#737373] outline-none placeholder:text-[#737373]"
              />
              <button
                type="submit"
                className="flex-1 bg-[#23A6F0] px-4 py-4 text-sm text-white"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="p-20 text-center lg:text-start font-bold bg-[#FAFAFA]">
        <h6>Made With Love By Finland All Right Reserved </h6>
      </section>
    </footer>
  );
}

export default Footer;
