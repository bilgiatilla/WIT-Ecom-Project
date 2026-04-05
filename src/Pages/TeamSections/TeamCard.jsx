import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TeamCard({ image, name, role }) {
  return (
    <div className="flex flex-col items-center text-center px-10">
      <img
        src={image}
        alt={name}
        className="w-100 h-60 object-cover"
      />
      <div className="mt-6 flex flex-col gap-3">
        <h3 className="font-bold">{name}</h3>
        <p className="text-sm text-gray-500">{role}</p>

        <div className="flex gap-4 text-blue-400 justify-center">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
        </div>
      </div>
    </div>
  );
}