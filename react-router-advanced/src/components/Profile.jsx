// Routes Route ProfileDetails ProfileSettings - Required components

import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

// Using Routes, Route, ProfileDetails, and ProfileSettings components
function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      {/* Implementing nested routes with Routes and Route components */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
