import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//Redux
import { Provider } from "react-redux";
import store from "./store";

//Components
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

import "./index.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
          </Routes>
          <section className="container">
            <Routes>
             {/*UNDONE, needs to have seperate components which will be done later.
              <Route exact path="/friends" element={<Friends />} />
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/profile" element={<Profile />} />
              <Route exact path="/settings" element={<Settings  />} />
             */}
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/register" element={<Register />} />
            </Routes>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

