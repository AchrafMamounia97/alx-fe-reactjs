import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication state
const isAuthenticated = false; // Change to true to simulate logged-in user

function ProtectedRoute({ children }) {
  return isAuthenticated ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;
