import React from "react";

import Header from "../components/Header/Header";
import Routers from "../routes/Routers";

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <div>
        <Routers />
      </div>
    </>
  );
};

export default Layout;
