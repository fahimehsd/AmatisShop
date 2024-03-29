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
    <div className="login-bg flex items-center justify-center">
      <div className="login relative flex flex-col justify-center p-5 text-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className=" text-gray-100 font-bold mb-4">
            Log In To Management Panel
          </h1>
          <input
            {...register("username")}
            placeholder="Username"
            className={
              errors.password ? "border-[1px] border-red-900" : "login-input"
            }
          />
          <p className=" text-red-900 font-bold">{errors.username?.message}</p>

          <input
            {...register("password")}
            placeholder="Password"
            className={
              errors.password ? "border-[1px] border-red-900" : "login-input"
            }
          />
          <p className=" text-red-900 font-bold">{errors.password?.message}</p>

          <input
            type="submit"
            className="login-btn w-full rounded-[5px] text-white p-[0.5rem] text-2xl"
          />
        </form>
        <Link
          to={"/"}
          className="flex text-gray-100 justify-center mt-4 decoration-transparent text-2xl"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PanelLogIn;
