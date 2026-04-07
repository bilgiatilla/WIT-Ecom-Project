import { useEffect, useState } from "react";
import api from "../api/axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import StoreFields from "./SignupSections/StoreFields";

function SignupPage() {
  const [roles, setRoles] = useState([]);

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>_\-\\/\[\]=+;']).{8,}$/;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({ defaultValues: { role_id: 3 } });

  const password = watch("password");
  const selectedRole = watch("role_id");
  const isStore = selectedRole === "2";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/roles")
      .then((res) => {
        setRoles(res.data);
        setValue("role_id", 3);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setValue]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitError("");
    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
      };

      if (data.store) {
        payload.store = {
          name: data.store.name,
          phone: data.store.phone,
          tax_no: data.store.tax_no,
          bank_account: data.store.bank_account,
        };
      }
      await api.post("/signup", payload);
      toast.warning(
        "You need to click link in email to activate your account!",
      );
      navigate(-1);
    } catch (err) {
      console.log(err);

      setSubmitError(
        err?.response?.data?.message ||
          "Signup failed. Please check your information and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h flex justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md border rounded-xl text-center p-4 bg-white shadow-sm">
        <h1 className="text-2xl font-bold mb-4">Signup</h1>

        <form onSubmit={handleSubmit(onSubmit)} className=" space-y-5">
          <div>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must contain at least 3 characters.",
                },
              })}
              className="border w-full p-2 rounded "
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Please enter a valid email address",
                },
              })}
              className="border w-full p-2 rounded"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: passwordRegex,
                  message:
                    "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character",
                },
              })}
              className="border w-full p-2 rounded"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="border w-full p-2 rounded"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <div>
            <select
              {...register("role_id", { required: "Please select a role" })}
              className="border w-full p-2 rounded"
            >
              <option value="">Select role</option>
              {roles.map((role) => (
                <option key={role.id} value={String(role.id)}>
                  {role.name}
                </option>
              ))}
            </select>
            {isStore && <StoreFields register={register} errors={errors} />}
            {errors.role_id && (
              <p className="text-red-500 text-sm mt-1">
                {errors.role_id.message}
              </p>
            )}
          </div>
          {submitError && (
            <p className="text-red-500 text-sm mt-2">{submitError}</p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="border bg-[#23A6F0] hover:bg-blue-800 text-[white] transition duration-300 px-4 py-2 mt-2 cursor-pointer rounded-lg bg- disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting && (
              <span className="w-4 h-4 border-2 border-gray-400 border-t-black rounded-full animate-spin"></span>
            )}
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default SignupPage;
