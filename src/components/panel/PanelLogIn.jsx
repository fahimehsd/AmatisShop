import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Link, useNavigate } from "react-router-dom";

const signInSchema = Yup.object().shape({
  username: Yup.string().required("نام کاربری الزامی است."),
  password: Yup.string()
    .required("رمز عبور الزامی است.")
    .min(4, "رمز عبور کوتاه است!")
});

const initialValues = {
  username: "",
  password: ""
};

const PanelLogIn = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/panel");
  };
  return (
    <div className="w-[60%] mx-auto my-[150px] text-center p-4 shadow rounded-md">
      <Formik
        initialValues={initialValues}
        validationSchema={signInSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formik) => {
          const { errors, touched, isValid, dirty } = formik;
          return (
            <div>
              <h1 className=" text-violet-900 font-semibold">
                ورود به پنل مدیریت فروشگاه آماتیس
              </h1>
              <Form onSubmit={submitHandler}>
                <div className="my-4">
                  <Field
                    type="text"
                    name="username"
                    id="username"
                    placeholder="نام کاربری"
                    className={
                      errors.username && touched.username
                        ? " border-red-900"
                        : null
                    }
                  />
                  <ErrorMessage
                    name="username"
                    component="span"
                    className=" text-red-900 font-bold"
                  />
                </div>

                <div className="mb-4">
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="رمز عبور"
                    className={
                      errors.password && touched.password
                        ? " border-red-900"
                        : null
                    }
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-red-900 font-bold"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-violet-900 w-full rounded-[5px] text-white p-[0.5rem] text-2xl"
                  disabled={!(dirty && isValid)}
                >
                  ورود
                </button>
              </Form>
            </div>
          );
        }}
      </Formik>
      <Link
        to={"/"}
        className="flex justify-end mt-4 decoration-transparent text-2xl"
      >
        بازگشت به سایت
      </Link>
    </div>
  );
};

export default PanelLogIn;
