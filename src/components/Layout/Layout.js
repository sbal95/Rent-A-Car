import React from "react";
import Header from "./Header";
import { Footer } from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        <main className="min-h-[calc(100vh_-_303px)]">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
