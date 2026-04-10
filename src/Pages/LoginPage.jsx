import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h flex justify-center bg-gray-100 p-4"
      >
        <div className="w-full max-w-md border rounded-xl text-center p-6 bg-white shadow-sm">
          <h1 className="text-2xl font-bold mb-4">Login</h1>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email",
              },
            })}
            placeholder="Email"
            className="border w-full p-2 rounded mb-4"
          />
          {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email.message}</p>}
          <input
            {...register("password", {
              required: "Password is required",
            })}
            type="password"
            placeholder="Password"
            className="border w-full p-2 rounded mb-4"
          />
          {errors.password && <p>{errors.password.message}</p>}
          <label className="flex items-center gap-2 text-sm mb-4">
            <input type="checkbox" {...register("rememberMe")} />
            Remember me
          </label>
          <button
            type="submit"
            className="w-full bg-[#23A6F0] hover:bg-blue-800 text-white transition duration-300 py-2 cursor-pointer rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Login
          </button>
          <div className="mt-6 text-sm">
            <p className="mb-2 text-gray-600">Don't have an account?</p>
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="cursor-pointer w-full border border-[#23A6F0] text-[#23A6F0] hover:bg-[#23A6F0] hover:text-white transition duration-300 py-2 rounded-lg"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
  );
}

export default LoginPage;
