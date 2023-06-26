import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout/Layout";
import CarDetail from "./pages/CarDetail";
import Vehicles from "./pages/Vehicles";
// import NotFound from '../pages/NotFound'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/home" Component={Home} />
          <Route exact path="/vehicles" Component={Vehicles} />
          <Route path="/carDetail/:id" Component={CarDetail} />
          {/* <Route path="*" element={<NotFound/>}/> */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
