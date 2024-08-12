import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(2, "Password must be at least 2 characters")
    .required("Password is required"),
});

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (values) => {
    if (values.email === "User@g.com" && values.password === "123") {
      login();
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        navigate("/shopping-cart");
      }, 5000);
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      {showSuccess && (
        <div className="fixed top-4 right-4 p-4 bg-gray-200 text-green-700 rounded-lg shadow-lg border border-green-300 overflow-hidden animate-fadeInOut">
          <p>Logged in successfully!</p>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-green-500 animate-progress" />
        </div>
      )}

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        {error && (
          <div className="bg-red-500 text-white p-2 mb-4 rounded">
            {error}
          </div>
        )}
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <Field
                name="email"
                type="email"
                autoComplete="email"
                className="w-full p-2 mt-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <Field
                name="password"
                type="password"
                autoComplete="current-password"
                className="w-full p-2 mt-2 border border-gray-300 rounded"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Login
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default Login;
