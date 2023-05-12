import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#282c34",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        <h1>YOU ARE NOT ALLOWED TO DO THAT!</h1>
        <Link
          style={{
            border: "none",
            width: "200px",
            borderRadius: 5,
            padding: "20px",
            backgroundColor: "green",
            color: "white",
            fontWeight: "600",
            cursor: "pointer",
            textDecoration: "none",
            textAlign: "center",
            margin: "20px",
          }}
          to="/"
        >
          Go To Home
        </Link>
        <span>or</span>
        <h3>Login as Admin</h3>
        <span>username: admintest</span>
        <span>password: admintest</span>
        <hr
          style={{
            color: "white",
            fontSize: "20px",
            display: "block",
            height: "2px",
            width: "80%",
          }}
        />

        <div style={{ margin: "20px", display: "flex" }}>
          <Link
            style={{
              border: "none",
              width: "200px",
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "blueviolet",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "none",
              textAlign: "center",
              margin: "20px",
            }}
            to="/login"
          >
            Login
          </Link>
          <Link
            style={{
              border: "1px solid white",
              width: "200px",
              borderRadius: 5,
              padding: "20px",
              backgroundColor: "transparent",
              color: "white",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "none",
              textAlign: "center",
              margin: "20px",
            }}
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
