import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://api.Tfoursolutions.com";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !fullName) {
      setError("Please enter your name and email.");
      return;
    }
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Registration failed.");

      alert("Registration successful! Please check your email to verify your account.");
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="
        min-h-screen flex items-center justify-center 
        py-12 px-4 
        bg-[var(--color-bg)]
        text-[var(--color-text)]
        transition-colors duration-300
      "
    >
      <div
        className="
          w-full max-w-md 
          p-8 rounded-lg shadow-2xl
          bg-[var(--color-card)] 
          border border-[var(--color-border)]
        "
      >
        <h2
          className="
            text-3xl font-extrabold text-center mb-6
            text-[var(--color-primary)]
          "
        >
          Create Your Account
        </h2>
        <p className="text-center mb-8 opacity-80">
          Join Tfour and unlock the future of AI-driven solutions.
        </p>

        {error && (
          <p
            className="
              bg-[var(--color-primary)]/10
              border border-[var(--color-primary)]
              text-[var(--color-text)]
              text-center p-3 rounded mb-6
            "
          >
            {error}
          </p>
        )}

        <form onSubmit={handleRegister} noValidate>
          {/* Full Name */}
          <label
            htmlFor="fullName"
            className="block text-sm font-medium mb-2 opacity-90"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="
              w-full p-3 mb-4 rounded border
              bg-[var(--color-bg)]
              border-[var(--color-border)]
              text-[var(--color-text)]
              focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
              transition
            "
            required
            autoComplete="name"
            placeholder="Your full name"
          />

          {/* Email */}
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2 opacity-90"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full p-3 mb-4 rounded border
              bg-[var(--color-bg)]
              border-[var(--color-border)]
              text-[var(--color-text)]
              focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
              transition
            "
            required
            autoComplete="email"
            placeholder="you@example.com"
          />

          {/* Password */}
          <label
            htmlFor="password"
            className="block text-sm font-medium mb-2 opacity-90"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="
              w-full p-3 mb-6 rounded border
              bg-[var(--color-bg)]
              border-[var(--color-border)]
              text-[var(--color-text)]
              focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]
              transition
            "
            required
            autoComplete="new-password"
            placeholder="Create a password (min 6 chars)"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full btn-primary py-3 text-lg"
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
