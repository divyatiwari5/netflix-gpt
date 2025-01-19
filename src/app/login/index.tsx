"use client";

import { useState } from "react";
import { useFormik } from "formik";
import { z } from "zod";
import { toFormikValidate } from "zod-formik-adapter";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Define the validation schema with Zod
  const signInSchema = z.object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
  });

  const signUpSchema = signInSchema.extend({
    fullName: z
      .string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name is too long"),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
    },
    validate: toFormikValidate(isSignInForm ? signInSchema : signUpSchema),
    onSubmit: async (values) => {
      try {
        setError(""); // Clear previous errors
        setSuccess(""); // Clear previous success

        if (isSignInForm) {
          await signInWithEmailAndPassword(auth, values.email, values.password);
          setSuccess("Successfully signed in!");
        } else {
          await createUserWithEmailAndPassword(
            auth,
            values.email,
            values.password
          );
          setSuccess("Account created successfully!");
        }
      } catch (error: any) {
        setError(error.message.replace("Firebase: ", ""));
      }
    },
  });

  const toggleForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="absolute top-[30%] left-[35%]">
      <form
        onSubmit={formik.handleSubmit}
        className="bg-black p-7 flex gap-3 flex-col w-[400px]"
      >
        <p className="text-white font-bold text-3xl">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </p>

        {!isSignInForm && (
          <div>
            <input
              className="h-12 p-2 m-2 bg-black border-white border rounded-md text-white w-full"
              type="text"
              placeholder="Enter Full Name"
              {...formik.getFieldProps("fullName")}
            />
            {formik.touched.fullName && formik.errors.fullName ? (
              <div className="text-red-500 text-sm ml-2">
                {formik.errors.fullName}
              </div>
            ) : null}
          </div>
        )}

        <div>
          <input
            className="h-12 p-2 m-2 bg-black border-white border rounded-md text-white w-full"
            type="email"
            placeholder="Enter Email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm ml-2">
              {formik.errors.email}
            </div>
          ) : null}
        </div>

        <div>
          <input
            className="h-12 p-2 m-2 bg-black border-white border rounded-md text-white w-full"
            type="password"
            placeholder="Enter Password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-500 text-sm ml-2">
              {formik.errors.password}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          className="bg-red-600 p-2 m-2 text-white rounded-sm"
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}
        <p onClick={toggleForm} className="m-2 text-white cursor-pointer">
          {isSignInForm
            ? "New user? Sign Up Now!"
            : "Already registered? SignIn Now!"}
        </p>
      </form>
    </div>
  );
};

export default Login;
