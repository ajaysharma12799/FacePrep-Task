import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <Navbar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <main className="container mx-auto w-[90%]">
          <Routes>
            <Route
              path="/"
              element={<HomePage setCurrentUser={setCurrentUser} />}
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute currentUser={currentUser}>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
