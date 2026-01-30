"use client";
import { redirect } from "next/navigation";
import { useState } from "react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    if (loading) return;
    const { isValid, errors } = validateLogin(email, password);

    if (!isValid) {
      setErrors(errors);
      return;
    }
    setLoading(true);
    const result = await fetch("http://localhost:3001/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).catch((e) => {
      console.log(e);
    });
    console.log("result.status", result.status);
    if (result.status == 200 || result.status == 201) {
      const res = await result.json();
      console.log("res", res);
      localStorage.setItem("accessToken", res.access_token);
      redirect("/");
    }
    setLoading(false);

    // gọi API login
  };
  const validateLogin = (email, password) => {
    const errors = {};

    // Email
    if (!email.trim()) {
      errors.email = "Email không được để trống";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Email không đúng định dạng";
    }

    // Password
    if (!password.trim()) {
      errors.password = "Mật khẩu không được để trống";
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Login</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to your account</p>
        </div>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password}</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 font-medium transition"
        >
          {loading ? "Dang login" : "Login"}
        </button>

        <div className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Reset pass
          </span>
        </div>
      </div>
    </div>
  );
}
