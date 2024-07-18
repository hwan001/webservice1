import "../styles/Common.css";
// import Header from "../components/Header.js";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { BASE_URL } from "../constants";

export function useLogin() {
  const [login, setLogin] = useState(null);

  const updateLogin = async (username, password) => {
    const url = BASE_URL + "/login";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };

    try {
      const res = await fetch(url, options);
      if (res.ok) {
        const userData = await res.json();
        console.log("Login(hook) result:", userData); // 응답 데이터 로그 출력
        setLogin(userData);
        return userData;
      } else {
        const error = await res.json();
        return { success: false, message: error.detail || "Failed to login" };
      }
    } catch (err) {
      console.error("Failed to login", err);
      return {
        success: false,
        message: "An error occurred. Please try again later.",
      };
    }
  };

  return [login, updateLogin];
}

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginData, updateLogin] = useLogin();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await updateLogin(username, password);
      console.log("Login result:", result); // 응답 데이터 로그 출력

      if (result.success) {
        navigate("/");
      } else {
        setError(
          result.message ||
            "Login failed. Please check your username and password.",
        );
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("An error occurred. Please try again later.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <div className="login-body">
      <div className="login-container">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder="Password"
          className="login-input"
        />
        <button onClick={handleLogin} className="login-button">
          Login
        </button>

        {loginData && <div>Welcome {loginData.username}</div>}
        {error && <div className="alert">{error}</div>}
      </div>
    </div>
  );
}

function Login() {
  const homeMenuItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Products", path: "/products" },
  ];

  return (
    <>
      <Navbar menuItems={homeMenuItems} />
      <LoginPage />
      <Footer />
    </>
  );
}

export default Login;
