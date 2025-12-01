import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabaseClient"; // relative import for src/pages/auth/Register.jsx

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnnoldld";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Google OAuth Registration
  const handleGoogleAuth = async () => {
    setError(null);
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({ provider: "google" });
      if (error) throw new Error(error.message);
      // Supabase redirects; can't notify Formspree
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Email/Password Registration + Formspree notification
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
      // Supabase registration
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { fullName } }
      });
      if (error) throw new Error(error.message);

      // Notify you via Formspree as well
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(Object.entries({ name: fullName, email, message: "User registered on Tfour AI" }).reduce((fd, [k, v]) => {
          fd.append(k, v); return fd;
        }, new window.FormData()))
      });

      setSuccess(true);
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
        <h2 className="text-3xl font-extrabold text-center mb-6 text-[var(--color-primary)]">
          Create Your Account
        </h2>
        {success ? (
          <div className="bg-green-100 border border-green-400 text-green-700 rounded p-3 text-center mb-3">
            Registration complete! You may check your inbox for next steps.
          </div>
        ) : (
          <>
            <p className="text-center mb-8 opacity-80">
              Join Tfour and unlock the future of AI-driven solutions.
            </p>
            {error && (
              <p className="bg-[var(--color-primary)]/10 border border-[var(--color-primary)] text-[var(--color-text)] text-center p-3 rounded mb-6">
                {error}
              </p>
            )}

            {/* Google Registration Button */}
            <button
              onClick={handleGoogleAuth}
              className="w-full flex items-center justify-center gap-3 py-3 mb-7 rounded font-semibold bg-white text-[#222] shadow border border-[var(--color-border)] hover:shadow-lg hover:bg-gray-50 active:scale-[0.98] transition disabled:opacity-50"
              disabled={loading}
              aria-label="Register with Google"
            >
              <svg width="22" height="22" viewBox="0 0 40 40"><g><path d="M36.27 20.5c0-.98-.087-1.93-.24-2.84H20.5v5.38h8.82c-.38 2.03-1.53 3.72-3.26 4.88v4.02h5.24c3.07-2.82 4.97-6.97 4.97-11.44z" fill="#4285F4" /><path d="M20.5 37c4.24 0 7.8-1.4 10.4-3.79l-5.24-4.02c-1.45.98-3.3 1.56-5.16 1.56-3.97 0-7.34-2.68-8.54-6.28H6.56v4.09C9.08 33.28 14.46 37 20.5 37z" fill="#34A853" /><path d="M11.96 24.47a8.56 8.56 0 010-5.44v-4.09H6.56A16.502 16.502 0 004 20.5a16.5 16.5 0 007.96 14.56l4.09-4.09c-2.35-1.43-4.03-3.89-4.03-6.44z" fill="#FBBC05" /><path d="M20.5 11.8c2.33 0 4.43.8 6.08 2.36l4.55-4.55C28.3 6.95 24.74 5 20.5 5A16.5 16.5 0 004 20.5c0 2.6.62 5.06 1.78 7.22l4.09-4.08c-.62-1.45-.98-3.02-.98-4.72z" fill="#EA4335" /></g></svg>
              <span>Continue with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center my-7">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 opacity-75 text-sm">or</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Email/Password Registration */}
            <form onSubmit={handleRegister} noValidate>
              <label htmlFor="fullName" className="block text-sm font-medium mb-2 opacity-90">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 mb-4 rounded border bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                required
                autoComplete="name"
                placeholder="Your full name"
              />

              <label htmlFor="email" className="block text-sm font-medium mb-2 opacity-90">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mb-4 rounded border bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                required
                autoComplete="email"
                placeholder="you@example.com"
              />

              <label htmlFor="password" className="block text-sm font-medium mb-2 opacity-90">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mb-6 rounded border bg-[var(--color-bg)] border-[var(--color-border)] text-[var(--color-text)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
                required
                autoComplete="new-password"
                placeholder="Create a password (min 6 chars)"
              />

              <button
                type="submit"
                className="w-full btn-primary py-3 text-lg"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Register;
