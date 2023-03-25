import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { loginService } from "../../api";

const signInSchema = Yup.object().shape({
  username: Yup.string().required("Username is required."),
  password: Yup.string()
    .required("Password is required.")
    .min(4, "Password must be at least 4 characters.")
});

const PanelLogIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(signInSchema)
  });

  const onSubmit = async (data) => {
    try {
      const res = await loginService(data);
      localStorage.setItem("token", res.accessToken);
      localStorage.setItem("refresh_token", res.refreshToken);
      navigate("/panel");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" flex  justify-end h-screen bg-gradient-to-r from-fuchsia-900 to-pink-100 ">
      <div className=" flex flex-col justify-center p-32 w-1/2 text-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className=" text-fuchsia-900 font-bold mb-4">
            Log In To Management Panel
          </h1>
          <input
            {...register("username")}
            placeholder="Username"
            className={errors.password ? "border-[1px] border-red-900" : null}
          />
          <p className=" text-red-900 font-bold">{errors.username?.message}</p>

          <input
            {...register("password")}
            placeholder="Password"
            className={errors.password ? "border-[1px] border-red-900" : null}
          />
          <p className=" text-red-900 font-bold">{errors.password?.message}</p>

          <input
            type="submit"
            className="bg-gradient-to-l from-fuchsia-900 to-pink-100 w-full rounded-[5px] text-white p-[0.5rem] text-2xl"
          />
        </form>
        <Link
          to={"/"}
          className="flex justify-center mt-4 decoration-transparent text-2xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PanelLogIn;
