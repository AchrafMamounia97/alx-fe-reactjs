import React from "react";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

// Ensure required components are available
const components = {
  Routes,
  Route,
  ProfileDetails,
  ProfileSettings
};

function Profile() {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
        <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;
