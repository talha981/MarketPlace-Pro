import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Form validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const Login = () => {
  const handleSubmit = (values) => {
    console.log("Form Values:", values);

    // Using FormData to capture form data and log it to the console
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    // Log FormData entries to console
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          {/* Email Field */}
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

          {/* Password Field */}
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
