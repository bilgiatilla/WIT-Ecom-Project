import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../store/thunks/clientThunks";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const onSubmit = async (data) => {
    try {
      await dispatch(loginUser(data, navigate, from));
      toast.success("Login successful");
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="min-h flex justify-center bg-gray-100 p-4">
        <div className="w-full max-w-md border rounded-xl text-center p-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input
        {...register("email", {
          required: "Email zorunlu",
          pattern: {
            value: /^\S+@\S+\.\S+$/,
            message: "Geçerli bir email gir",
          },
        })}
        placeholder="Email"
        className="border w-full p-2 rounded mb-4"
      />
      {errors.email && <p>{errors.email.message}</p>}
      <input {...register("password")} type="password" placeholder="Password" className="border w-full p-2 rounded mb-4" />
      <label className="flex items-center gap-2 text-sm mb-4">
        <input type="checkbox" {...register("rememberMe")} />
        Remember me
      </label>
      <button type="submit" className="w-full bg-[#23A6F0] hover:bg-blue-800 text-white transition duration-300 py-2 cursor-pointer rounded-lg disabled:opacity-50 disabled:cursor-not-allowed">Login</button>
      </div>
    </form>
  );
}

export default LoginPage;
