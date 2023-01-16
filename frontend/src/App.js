import React, { useState } from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddReview from "./components/Add-review";
import Restaurant from "./components/Restaurant";
import RestaurantsList from "./components/Restaurants-list";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/restaurants" className="navbar-brand">
            Restaurant Reviews
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/restaurants" className="nav-link">
                Restaurant
              </Link>
            </li>
            <li className="nav-item">
              {user ? (
                <div
                  onClick={logout}
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                >
                  Logout {user.name}
                </div>
              ) : (
                <Link to="/login" className="nav-link">
                  Login
                </Link>
              )}
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route index path={"/restaurants"} element={<RestaurantsList />} />
            <Route
              path="/restaurants/:id/review"
              element={<AddReview user={user} />}
            />
            <Route
              path="/restaurants/:id"
              element={<Restaurant user={user} />}
            />
            <Route path="/login" element={<Login login={login} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
