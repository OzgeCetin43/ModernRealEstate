import React, { useEffect, useState } from "react";

import Preloader from "./components/Preloader/Preloader";
import Layout from "./layout/Layout";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 8000);
  }, []);

  return <>{isLoading ? <Preloader /> : <Layout />}</>;
};

export default App;
