import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import "./App.css"; // Ensure global styles are applied

const App = () => {
  return (
    <Router>
      <div
        style={{ display: "flex", height: "100vh", backgroundColor: "#121212" }}
      >
        <Sidebar />
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            marginLeft: "250px",
          }}
        >
          {" "}
          {/* Adjust for sidebar width */}
          <Navbar />
          <main style={{ flex: 1, overflowY: "auto", padding: "20px" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
