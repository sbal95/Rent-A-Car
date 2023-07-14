import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import CarDetail from "./pages/CarDetail";
import Vehicles from "./pages/Vehicles";
import Service from "./pages/Service";
import AboutUs from "./pages/About";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/home" Component={Home} />
          <Route exact path="/vehicles" Component={Vehicles} />
          <Route exact path="/service" Component={Service} />
          <Route exact path="/about" Component={AboutUs} />
          <Route path="/carDetail/:id" Component={CarDetail} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
