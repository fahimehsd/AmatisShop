import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Link, useNavigate } from "react-router-dom";

const signInSchema = Yup.object().shape({
  username: Yup.string().required("   Username is required."),
  password: Yup.string()
    .required("Password is required.   ")
    .min(4, "Password must be at least 4 characters.")
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
    <div className=" flex">
      <div className="w-1/2 p-28 bg-gradient-to-r from-fuchsia-900 via-pink-300 to-fuchsia-900">
        <h1 className="text-center">
          Fragrances are powerful magicians that can transport you through the
          years you have lived
        </h1>
      </div>
      <div className="w-1/2 p-20 text-center ">
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
                <h1 className=" text-fuchsia-900 font-bold">
                  Log In To Management Panel
                </h1>
                <Form onSubmit={submitHandler}>
                  <div className="my-4">
                    <Field
                      type="text"
                      name="username"
                      id="username"
                      placeholder="Username "
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
                      placeholder="Password "
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
                    className="bg-gradient-to-r  from-fuchsia-900 via-pink-300 to-fuchsia-900 w-full rounded-[5px] text-white p-[0.5rem] text-2xl"
                    disabled={!(dirty && isValid)}
                  >
                    Log In
                  </button>
                </Form>
              </div>
            );
          }}
        </Formik>
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
